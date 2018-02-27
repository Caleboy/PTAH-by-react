require('../styles/main.scss');
import React, {PropTypes} from 'react';
import Search from '../myFrameworke/components/Search';
import Select from '../myFrameworke/components/Select';
import Icon from '../myFrameworke/components/Icon';
import Button from '../myFrameworke/components/Button';

const Option = Select.Option;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  render() {
    const { switched } = this.props;
    return (
      <div className="main" style={{left:switched?'58px':'208px'}}>
        <div className="main-bar">
          <h3>Search</h3>
          <Search
            placeholder="姓名/工號/CWR號"
          />
          <br/>
          <Search
            placeholder="姓名/工號/CWR號"
            width="400"
            position="left"/>
          <br/>
          <Search
            placeholder="輸入內容"
            width="500"
            onSearch={(value) => this._searchHandle(value)}
          />
        </div>
        <div className="main-bar">
          <h3>Select</h3>
          <Select onSelect={(value) => this._selectHandle(value)}>
            <Option>111</Option>
            <Option>222</Option>
            <Option>333</Option>
          </Select>
          <br/>
          <Select
            mode="tags"
            onSelect={(value) => this._selectHandle(value)}
            size='big'
            prefix={<i><img src={require('../images/down-01.png')} alt=""/></i>}
          >
            <Option>111</Option>
            <Option>222</Option>
            <Option>333</Option>
            <Option>444</Option>
            <Option>555</Option>
            <Option>666</Option>
            <Option>777</Option>
            <Option>888</Option>
          </Select>
          <br/>
          <Select
            width="300"
            onSelect={(value) => this._selectHandle(value)}
            prefix={<img src={require('../images/down-01.png')} alt="icon"/>}
          >
            <Option>111</Option>
            <Option>222</Option>
            <Option>333</Option>
            <Option>666</Option>
            <Option>888</Option>
          </Select>
        </div>
        <div className="main-bar">
          <h3>Icon</h3>
          <Icon/>
          <br/>
          <Icon className="icon-search"/>
          <br/>
          <Icon type="search" spin={true}/>
        </div>
        <div className="main-bar">
          <h3>Button</h3>
          <Button>button</Button>
          <br/>
          <Button type="primary">Primary</Button>
          <br/>
          <Button type="default">Default</Button>
          <br/>
          <Button type="disabled">Disabled</Button>
        </div>
        <div className="main-bar">
          <h3>DatePicker</h3>
        </div>
      </div>
    );
  }
  _searchHandle(value){
    console.log(value)
  }
  _selectHandle(value){
    console.log(value)
  }
}

Home.PropTypes = {
  switched: PropTypes.bool.isRequired
};

export default Home;
