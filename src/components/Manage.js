import React from 'react';
import pickerDateList from '../myFrameworke/commentJs/picker.js'

class Manage extends React.Component {
  render() {
    const { switched } = this.props;
    let datePickerTab = [];
    pickerDateList().forEach(function(val, index) {
      // console.log(val)
      let weekDateArr = []
      for(let key in val) {
        weekDateArr.push(<td key={key} style={{color: val[key][1] ? '#999' : '#333'}}>{val[key][0]}</td>)
      }
      datePickerTab.push(
        <tr key={index}>
          {weekDateArr}
        </tr>
      )
      return datePickerTab;
    })
    return (
      <div className="main" style={{left:switched?'58px':'208px'}}>
        <h2 style={{color: '#666'}}>Manage</h2>
        <div className="main-bar">
          <h3>DatePicker</h3>
          <table>
            <tbody>
            { datePickerTab }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Manage;
