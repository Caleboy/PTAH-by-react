import React, { PropTypes } from 'react'
import picker from '../commentJs/picker'

export default (...mon) => {
  class NewComponent extends React.PureComponent {
    weekDateTab() {
      let datePickerTab = [];
      picker(...mon).forEach(function(val, index) {
        let weekDateArr = [];
        for(let key in val) {
          weekDateArr.push(
            <td key={key} target={val[key][1]}>
              <a style={{
                color: val[key][1] ? '#939393' : val[key][2] === 't' ? '#FFFFFF' : '#333333',
                backgroundColor: val[key][2] === 't' ? '#1890FF' : '',
                borderColor: val[key][3] === 'opt' ? '#1890FF' : 'transparent'
              }} target={val[key][1]}>{ val[key][0] }</a>
            </td>
          );
        }
        datePickerTab.push(
          <tr key={index}>
            { weekDateArr }
          </tr>
        );
      });
      return datePickerTab
    }

    weekTitleTab() {
      let weekName = ['Mo','Tu','We','Th','Fr','Sa','Su']
      let weekTitle = []

      weekName.forEach(function(val, index) {
        weekTitle.push(
          <th key={index} className="dh">{val}</th>
        );
      });
      return weekTitle;
    }

    render () {
      return (
        <div className="picker-tab">
          <div className="dh picker-date">
            <table>
              <thead>
              <tr>
                { this.weekTitleTab() }
              </tr>
              </thead>
              <tbody>
                { this.weekDateTab() }
              </tbody>
            </table>
          </div>
          <div className="today-opts"><a>today</a></div>
        </div>
      );
    }
  }

  NewComponent.PropTypes = {};

  return NewComponent;
}
