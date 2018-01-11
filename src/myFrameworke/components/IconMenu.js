import React from 'react';

class IconMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }
  _toggleHandle(){
    this.setState({
      toggle: !this.state.toggle
    });
    this.props.onClick();
  }
  render() {
    return (
      <div className={this.state.toggle?'icon-memu-exhibit icon-menu-constrate':'icon-memu-exhibit'} onClick={() => this._toggleHandle()}>
        <div className="ex ex-top"></div>
        <div className="ex ex-mid"></div>
        <div className="ex ex-bot"></div>
      </div>
    );
  }
}

IconMenu.defaultProps = {
};

export default IconMenu;
