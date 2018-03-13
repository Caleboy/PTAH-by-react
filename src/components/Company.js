import React from 'react';

class Company extends React.Component {
  render() {
    const { switched } = this.props;
    return (
      <div className="main" style={{left:switched?'58px':'208px'}}>
        <h2 style={{color: '#666'}}>Company</h2>
      </div>
    )
  }
}

export default Company;
