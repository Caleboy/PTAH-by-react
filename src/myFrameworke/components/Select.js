import React, {PropTypes} from 'react';
import WrapWithSelect from '../hightOrderComponents/rc-select';

class SelectDefault extends React.Component{
  render(){
    const props = this.props;
    const size = props.size && props.size==='big' ? 32 : 26;
    return (
      <div className="select-rc">
        {
          props.mode === 'tags' ? <input
            name="name"
            type="text"
            className="select-contant"
            style={{fontSize: size / 2}}
            autoComplete="off"
            {...props.name}
          /> : <span className="select-contant">
            {props.name.value}
          </span>
        }
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
  name: PropTypes.object,
  mode: PropTypes.string
}
Option.PropTypes = {
  children: PropTypes.string.isRequired
}

const Select = WrapWithSelect(SelectDefault);

Select.Option = Option;

export default Select;
