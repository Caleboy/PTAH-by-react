require('../styles/iconMenu.scss');
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST } from '../store/variableStore'
import IconMenu from '../myFrameworke/components/IconMenu'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchIndex: 0
    }
  }
  menuBarText() {
    let navBar = [];
    NAV_LIST.map(function(value){
      navBar.push(
        <li
          key={value.index}
          className="clear-box"
          onClick={() => this._menuClick(value.index)}>
          <Link to={value.img === 'home' ? '/' : value.img}><h2 style={{color: this.state.switchIndex === value.index ? '#EAC12E' : '#FFF'}}>{value.name}</h2></Link>
        </li>
      );
    }.bind(this));
    return navBar;
  }
  menuBarIcon() {
    let navBar = [];
    NAV_LIST.map(function(value){
      navBar.push(
        <li
          key={value.index}
          className="menu-li clear-box"
          onClick={() => this._menuClick(value.index)}>
          <Link to={value.img === 'home' ? '/' : value.img}>
            <div className="li-icon">
              {this.state.switchIndex === value.index ? <img src={require(`../images/${value.img}-active.png`)} alt="li-icon"/> : <img src={require(`../images/${value.img}.png`)} alt="li-icon"/> }
            </div>
          </Link>
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
