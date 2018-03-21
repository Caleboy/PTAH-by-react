import React, {PropTypes} from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      inputWidth: 100,
    }
  }
  componentDidMount() {
    let inputWidth = this.refs.search.offsetWidth
    this.setState({
      inputWidth
    })
  }
  render() {
    const size = this.props.size && this.props.size==='big' ? 36 : 28;
    return (
      <div
        className="search-form"
        style={{width:this.props.width?`${this.props.width}px`:'100%',height:`${size}px`}}
        ref="search"
      >
        <div
          className="search-icon"
          style={{float:this.props.position?this.props.position:'right',width:`${size}px`,height:`${size}px`}}
          onClick={() => this.onSubmitHandle(this.state.value)}
        >
          <img
            src={require('../../images/search.png')}
            alt="search"/>
        </div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          style={{width:this.props.width? (this.props.width- 36):this.state.inputWidth - 36,fontSize: size / 2.4}}
          value={this.state.value}
          onChange={(e) => this.onChangeHandle(e)}
          onKeyDown={(e) => this.onKeyHandle(e)}
        />
      </div>
    );
  }
  onChangeHandle(e){
    let value = e.target.value;
    this.setState({
      value
    })
    if(this.props.onChange){
      this.props.onChange(value)
    }
  }
  onSubmitHandle(value){
    if(this.props.onSearch)
    this.props.onSearch(value)
  }
  onKeyHandle(e){
    if(e.keyCode == 13){
      this.onSubmitHandle(this.state.value)
    }
  }
}

Search.PropTypes = {
  width: PropTypes.number,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func
};

export default Search;
