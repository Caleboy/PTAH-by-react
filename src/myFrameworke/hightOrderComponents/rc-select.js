import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { contains } from '../commentJs/contains'
import omit from '../commentJs/omit'

export default (WrappedComponent) => {
  class NewComponent extends React.PureComponent {
    constructor(props){
      super(props);
      this.state = {
        optionsSwitch: false,
        value: '',
        name: ''
      }
    }
    componentDidUpdate(_, prevState){
      const self = this;
      const state = self.state;
      if(state.optionsSwitch){
        let currentDocument;
        if (!this.clickOutsideHandler) {
          currentDocument = window.document;
          this.clickOutsideHandler = currentDocument.addEventListener('mousedown', self.onDocumentClick.bind(self));
        }
        return;
      }
      this.clearOutsideHandler();
    }
    clearOutsideHandler(){
      let self = this,
        currentDocument = window.document;
      if(this.clickOutsideHandler){
        currentDocument.removeEventListener('mousedown',self.onDocumentClick.bind(self))
      }
    }
    onDocumentClick(event){
      const root = ReactDOM.findDOMNode(this);
      const target = event.target;
      if(!contains(root,target)){
        this.setState({
          optionsSwitch: false
        })
      }
    }
    onHandleFocus(e){
      e.stopPropagation();
      this.setState({
        optionsSwitch: true
      })
    }
    onHandleChange(e){
      let props = this.props;
      let value = e.target.value;
      if(props.onSelect && typeof props.onSelect === 'function'){
        props.onSelect(value);
      }
      this.setState({
        value
      })
    }
    render(){
      const { width, prefix, children, className } = this.props;
      const size = this.props.size && this.props.size==='big' ? 32 : 26;
      const classString = `select-bar ${className}`;
      const newProps = {
        name: {
          value: this.state.value,
          onFocus: this.onHandleFocus.bind(this),
          onChange: this.onHandleChange.bind(this)
        }
      }
      const selectIconClass = this.state.optionsSwitch ? 'select-icon spin' : 'select-icon';
      return (
        <div
          className={classString}
          style={{width:width?`${width}px`:'100%',height:`${size}px`,lineHeight: `${size}px`}}
          onMouseDown={(e) => this.onDocumentClick(e)}
          onClick={(e) => this._handleClick(e)}
        >
          <WrappedComponent {...omit(this.props,['className', 'width', 'children'])} {...newProps}/>
          {
            prefix ? <span
              className={selectIconClass}
              style={{width: `${size}px`,height:`${size}px`}}
              onClick={(e) => this._iconHandleClick(e)}
            >
              {prefix}
            </span> : <span
              className={selectIconClass}
              style={{width: `${size}px`,height:`${size}px`}}
              onClick={(e) => this._iconHandleClick(e)}
            >
              <img src={require('../../images/down.png')} alt="down"/>
            </span>
          }

          <div
            className="select-options"
            style={{top: `${size - 1}px`,display: this.state.optionsSwitch?'block':'none'}}
            onClick={(e) => this._childHandleClick(e)}
          >
            {children.map(child => child)}
          </div>
        </div>
      );
    }
    _handleClick(){
      if(this.props.mode === 'tags') return;
      this.setState({
        optionsSwitch: !this.state.optionsSwitch
      });
    }
    _iconHandleClick(e){
      e.stopPropagation();
      this.setState({
        optionsSwitch: !this.state.optionsSwitch
      });
    }
    _childHandleClick(e){
      let props = this.props;
      let value = e.target.innerHTML;
      if(props.onSelect && typeof props.onSelect === 'function'){
        props.onSelect(value);
      }
      this.setState({
        value,
        optionsSwitch: false
      });
    }
  }
  NewComponent.propTypes = {
    mode: PropTypes.string,
    width: PropTypes.string || PropTypes.number,
    size: PropTypes.string,
    children: PropTypes.array.isRequired || PropTypes.element.isRequired,
    prefix: PropTypes.element,
    onSelect: PropTypes.func,
    className: PropTypes.string
  };
  return NewComponent
}
