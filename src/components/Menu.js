require('../styles/iconMenu.scss');
import React from 'react';

import IconMenu from '../myFrameworke/components/IconMenu'

let navList = [
  {
    index: 0,
    name: '首頁',
    img: 'home'
  },
  {
    index: 1,
    name: '建設人力資源管理',
    img: 'manage'
  },
  {
    index: 2,
    name: '創建公司資料',
    img: 'company'
  }
];

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchIndex: 0
    }
  }
  menuBarText() {
    let navBar = [];
    navList.map(function(value){
      navBar.push(
        <li
          key={value.index}
          className="clear-box"
          onClick={() => this._menuClick(value.index)}>
          <h2 style={{color: this.state.switchIndex === value.index ? '#EAC12E' : '#FFF'}}>{value.name}</h2>
        </li>
      );
    }.bind(this));
    return navBar;
  }
  menuBarIcon() {
    let navBar = [];
    navList.map(function(value){
      navBar.push(
        <li
          key={value.index}
          className="menu-li clear-box"
          onClick={() => this._menuClick(value.index)}>
          <div className="li-icon">
            {this.state.switchIndex === value.index ? <img src={require(`../images/${value.img}-active.png`)} alt="li-icon"/> : <img src={require(`../images/${value.img}.png`)} alt="li-icon"/> }
          </div>
        </li>
      );
    }.bind(this));
    return navBar;
  }
  render() {
    const {switched,menuToggle} = this.props;
    return (
      <div className="menu-container" style={{width: switched ? '50px' : '200px'}}>
        <div className="menu-bar">
          <IconMenu onClick={() => menuToggle()}/>
          <ul className="menu-list">
            {switched ? this.menuBarIcon() : this.menuBarText()}
          </ul>
        </div>
      </div>
    );
  }
  _menuClick(index){
    this.setState({
      switchIndex: index
    })
  }
}

Menu.defaultProps = {
};

export default Menu;
