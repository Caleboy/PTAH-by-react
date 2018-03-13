import React, {PropTypes} from 'react';
import WrapWithSelect from '../hightOrderComponents/rc-select';

class DatePicker extends React.Component {
  render() {
    const props = this.props;
    const size = props.size && props.size === 'big' ? 32 : 26;
    if(props.focus && props.mode === 'tags') {
      this.textInput.focus();
    }
    return (
      <div className="select-rc">
        {
          props.mode === 'tags' ? <input
            name="name"
            type="text"
            className="select-contant"
            style={{fontSize: size / 2}}
            autoComplete="off"
            ref={input => {this.textInput = input}}
            {...props.name}
          /> : <span className="select-contant">
            {props.name.value}
          </span>
        }
      </div>
    );
  }
}

const Date = (props) => {
  return (
    <div
      className="option"
    >
      {props.children}
    </div>
  );
}

DatePicker.PropTypes = {
  name: PropTypes.object,
  mode: PropTypes.string
}

const Select = WrapWithSelect(DatePicker);

Select.Date = Date;

export default Select;
