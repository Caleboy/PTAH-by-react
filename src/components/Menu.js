require('../styles/iconMenu.scss');
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LIST } from '../store/variableStore'
import IconMenu from '../myFrameworke/components/IconMenu'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchIndex: 0
    }
  }
  componentDidMount() {
    let switchIndex = this.pathName();
    this.setState({
      switchIndex
    })
  }
  pathName() {
    var props = this.props,
      pathname = props.location.pathname;
    console.log(pathname)
    switch (pathname){
      case '/':
        return 0;
      case '/manage':
        return 1;
      case '/company':
        return 2;
      default:
        return 0;
    }
  }
  menuBar(flag) {
    let navBar = [];
    NAV_LIST.map(function(value){
      let textList =
          <li
            key={ value.index }
            className="clear-box"
            onClick={() => this._menuClick(value.index)}>
            <NavLink
              to={ value.img === 'home' ? '/' : value.img }
              isActive={ () => this.state.switchIndex === value.index }
              activeClassName="actived">
              <h2>{ value.name }</h2>
            </NavLink>
          </li>,
        iconList =
          <li
            key={ value.index }
            className="menu-li clear-box"
            onClick={ () => this._menuClick(value.index) }>
            <NavLink to={ value.img === 'home' ? '/' : value.img }>
              <div className="li-icon">
                {this.state.switchIndex === value.index ? <img src={require(`../images/${value.img}-active.png`)} alt="li-icon"/> : <img src={require(`../images/${value.img}.png`)} alt="li-icon"/> }
              </div>
            </NavLink>
          </li>;
      flag ? navBar.push(iconList) : navBar.push(textList);
    }.bind(this));
    return navBar;
  }
  render() {
    const { switched, menuToggle } = this.props;
    let offset = switched ? '50px' : '200px';
    return (
      <div className="menu-container" style={{ width: offset }}>
        <div className="menu-bar">
          <IconMenu onClick={() => menuToggle()}/>
          <ul className="menu-list">
            { this.menuBar(switched) }
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
