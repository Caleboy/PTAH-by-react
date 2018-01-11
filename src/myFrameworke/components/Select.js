import React from 'react';
import ReactDOM from 'react-dom'
import {contains} from '../commentJs/container'

export class Select extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      optionsSwitch: false,
      value: null
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
    if(this.clickOutsideHandler){
      removeEventListener(this.clickOutsideHandler)
    }
  }
  render(){
    const size = this.props.size && this.props.size==='big' ? 32 : 26;
    return (
      <div
        className="select-bar"
        style={{width:this.props.width?`${this.props.width}px`:'100%',height:`${size}px`,lineHeight: `${size}px`}}
        onClick={(e) => this.handleClick(e)}
        onMouseDown={(e) => this.onDocumentClick(e)}
        ref="isOptionsHide"
      >
        <div className="select-rc">
          <span className="select-contant">{this.state.value}</span>
          <span
            className="select-icon"
            style={{width: `${size}px`,height:`${size}px`}}
          >
            <img src={require('../../images/down.png')} alt="down"/>
          </span>
        </div>

        <div
          className="select-options" style={{top: `${size - 1}px`,display: this.state.optionsSwitch?'block':'none'}}
          onClick={(e) => this.childHandleClick(e)}
        >
          {this.props.children.map(child => child)}
        </div>
      </div>
    );
  }
  onDocumentClick(event){
    const root = ReactDOM.findDOMNode(this);
    const target = event.target;
    // console.log(container(target,root))
    if(!contains(root,target)){
      this.setState({
        optionsSwitch: false
      })
    }
  }
  handleClick(){
    this.setState({
      optionsSwitch: !this.state.optionsSwitch
    });
  }
  childHandleClick(e){
    this.setState({
      value: e.target.innerHTML
    });
    this.props.onSelect(e.target.innerHTML);
  }
}

export const Option = (props) => {
  return (
    <div
      className="option"
    >
      {props.children}
    </div>
  );
}


