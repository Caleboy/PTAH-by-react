import React, { PropTypes } from 'react';
import WithrcSelect from '../hightOrderComponents/rc-select';
import WrapPicker from '../hightOrderComponents/rc-picker';
import { reDate, monthTrans, moyEstimate } from '../commentJs/reDate'

class DefaultPicker extends React.Component {
  render() {
    const props = this.props;
    const size = props.size && props.size === 'big' ? 32 : 26;
    if(props.focus) {
      this.textInput.focus();
    }
    return (
      <div className="picker-rc">
        <input
          name="name"
          type="text"
          className="date-contant"
          style={{fontSize: size / 2}}
          autoComplete="off"
          ref={input => {this.textInput = input}}
          {...props.name}
        />
      </div>
    );
  }
}

const DefaultDatePicker = WithrcSelect(DefaultPicker);

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moy: '',
      dateTable: null
    }
  }
  componentDidMount() {
    let date = reDate(),
      moy = date.slice(0, 7);
    this.setStatePickerTab(moy);
  }
  setStatePickerTab(moy) {
    const DateTable = WrapPicker(moy),
      dateTable = <DateTable />;
    this.setState({
      moy,
      dateTable
    })
  }
  render () {
    let year = moyEstimate(this.state.moy).year,
      mon = moyEstimate(this.state.moy).month;
    return (
      <DefaultDatePicker
        moy={`${ year }-${ mon }`}
        onSelect={ (value) => this._handleSelectDate(value) }
        onChange={ value => this._handleChange(value) }
        prefix={<i><img src={require('../images/date.png')} alt=""/></i>}
      >
        <div className="dh y-m-skip">
          <a className="dh ye-prev" onClick={() => this._handlePrevYear()}> &lt;&lt; </a>
          <a className="dh mo-prev" onClick={() => this._handlePrevMonth()}> &lt; </a>
          <a className="dh mo-next" onClick={() => this._handleNextMonth()}> &gt; </a>
          <a className="dh ye-next" onClick={() => this._handleNextYear()}> &gt;&gt; </a>
          <span> { `${ monthTrans(mon) } ${ year }` } </span>
        </div>
        {this.state.dateTable}
      </DefaultDatePicker>
    )
  }
  _handleSelectDate(date) {
    // console.log(date)
    const DateTable = WrapPicker(date, date),
      dateTable = <DateTable />;
    this.setState({
      dateTable
    })
  }
  _handleChange(value) {
    // console.log(value)
    let date = value,
      isDate = new Date(date).getMonth();
    console.log(isDate)
    if(isDate) return;
    const DateTable = WrapPicker(date, date),
      dateTable = <DateTable />;
    this.setState({
      dateTable
    })
  }
  _handlePrevMonth() {
    let year = moyEstimate(this.state.moy).year - 0,
      mon = moyEstimate(this.state.moy).month - 1,
      moy = `${ mon <= 0 ? year - 1 : year }-${ mon <= 0 ? 12 : mon }`;
    this.setStatePickerTab(moy);
  }
  _handleNextMonth() {
    let year = moyEstimate(this.state.moy).year - 0,
      mon = moyEstimate(this.state.moy).month - 0 + 1,
      moy = `${ mon > 12 ? year + 1 : year }-${ mon > 12 ? 1 : mon }`;
    this.setStatePickerTab(moy);
  }
  _handlePrevYear() {
    let year = moyEstimate(this.state.moy).year - 0,
      mon = moyEstimate(this.state.moy).month,
      moy = `${ year - 1 }-${ mon }`;
    this.setStatePickerTab(moy);
  }
  _handleNextYear() {
    let year = moyEstimate(this.state.moy).year - 0,
      mon = moyEstimate(this.state.moy).month,
      moy = `${ year + 1}-${mon }`;
    this.setStatePickerTab(moy);
  }
}

DefaultPicker.PropTypes = {
  name: PropTypes.object,
  mode: PropTypes.string
}

export default DatePicker;
