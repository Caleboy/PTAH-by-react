import React, { PropTypes } from 'react'
import picker from '../commentJs/picker'

export default (mon) => {
  class NewComponent extends React.PureComponent {
    render () {
      let datePickerTab = [];
      let weekName = ['Mo','Tu','We','Th','Fr','Sa','Su']
      let weekTitle = []
      picker(mon).forEach(function(val, index) {
        let weekDateArr = [];
        for(let key in val) {
          weekDateArr.push(
            <td key={key}>
              <a style={{
                color: val[key][1] ? '#999999' : val[key][2] === 't' ? '#FFFFFF' : '#333333',
                backgroundColor: val[key][2] === 't' ? '#1890FF' : ''
              }}>{ val[key][0] }</a>
            </td>
          )
        }
        datePickerTab.push(
          <tr key={index}>
            { weekDateArr }
          </tr>
        );
      });
      weekName.forEach(function(val, index) {
        weekTitle.push(
          <th key={index} className="dh">{val}</th>
        )
      })
      return (
        <div className="picker-tab">
          <div className="dh picker-date">
            <table>
              <thead>
              <tr>
                { weekTitle }
              </tr>
              </thead>
              <tbody>
                { datePickerTab }
              </tbody>
            </table>
          </div>
          <div className="today-opts"><a>today</a></div>
        </div>
      );
    }
  }
  return NewComponent
}
