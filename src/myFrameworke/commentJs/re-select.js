import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {contains} from './contains'

export default (WrappedComponent) => {
  class NewComponent extends React.PureComponent {
    constructor(props){
      super(props);
      this.state = {
        optionsSwitch: false,
        value: ''
      }
    }
    componentDidUpdate(_, prevState){
      const self = this;
      const state = this.state;
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
    render(){
      const size = this.props.size && this.props.size==='big' ? 32 : 26;
      const newProps = {
        value: this.state.value,
      }
      return (
        <div
          className="select-bar"
          style={{width:this.props.width?`${this.props.width}px`:'100%',height:`${size}px`,lineHeight: `${size}px`}}
          onMouseDown={(e) => this.onDocumentClick(e)}
          onClick={(e) => this._handleClick(e)}
        >
          <WrappedComponent {...this.props} {...newProps}/>
          <span
            className="select-icon"
            style={{width: `${size}px`,height:`${size}px`}}
          >
            <img src={require('../../images/down.png')} alt="down"/>
          </span>
          <div
            className="select-options"
            style={{top: `${size - 1}px`,display: this.state.optionsSwitch?'block':'none'}}
            onClick={(e) => this._childHandleClick(e)}
          >
            {this.props.children.map(child => child)}
          </div>
        </div>
      );
    }
    _handleClick(){
      this.setState({
        optionsSwitch: !this.state.optionsSwitch
      });
    }
    _childHandleClick(e){
      this.props.onSelect(e.target.innerHTML);
      this.setState({
        value: e.target.innerHTML
      });
    }
  }
  NewComponent.propTypes = {
    children: PropTypes.array.isRequired || PropTypes.element.isRequired
  };
  return NewComponent
}
