import React, {PropTypes} from 'react';
import WrapWithSelect from '../commentJs/re-select';

class SelectDefault extends React.Component{
  render(){
    return (
      <div className="select-rc">
        <span className="select-contant">{this.props.value}</span>
      </div>
    );
  }
}

const Option = (props) => {
  return (
    <div
      className="option"
    >
      {props.children}
    </div>
  );
}

SelectDefault.PropTypes = {
  value: PropTypes.string
}
Option.PropTypes = {
  children: PropTypes.string.isRequired
}

const Select = WrapWithSelect(SelectDefault);

Select.Option = Option;

export default Select;
