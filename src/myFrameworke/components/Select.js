import React, {PropTypes} from 'react';
import WrapWithSelect from '../hightOrderComponents/rc-select';

class DefaultSelect extends React.Component {
  /*componentDidMount() {
    let self = this;
    this.windowMouseover = window.addEventListener('mouseover', self.handleMouseover.bind(this))
  }
  handleMouseover (e) {
    if(e.target.nodeName !== 'INPUT')
      this.textInput.blur();
  }*/
  render() {
    const props = this.props;
    const size = props.size && props.size === 'big' ? 32 : 26;
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

const Option = (props) => {
  return (
    <div
      className="option"
    >
      {props.children}
    </div>
  );
}

DefaultSelect.PropTypes = {
  name: PropTypes.object,
  mode: PropTypes.string
}

Option.PropTypes = {
  children: PropTypes.string.isRequired
}

const Select = WrapWithSelect(DefaultSelect);

Select.Option = Option;

export default Select;
