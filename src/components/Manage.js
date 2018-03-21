
import React from 'react';
import DatePicker from '../myFrameworke/components/DatePicker'

class Manage extends React.Component {
  render() {
    const { switched } = this.props;
    return (
      <div className="main" style={{left:switched?'58px':'208px'}}>
        <h2 style={{color: '#666'}}>Manage</h2>
        <div className="main-bar">
          <h3>DatePicker</h3>
          <DatePicker />
        </div>
      </div>
    )
  }
}

export default Manage;
