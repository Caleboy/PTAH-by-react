import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Menu from '../components/Menu'
import * as Actions from '../actions/index'

const ShowTheLocationWithRouter = withRouter(Menu)

//将state.counter绑定到props的counter
function mapStateToProps(state){
  return {
    switched: state.menuTodes.switched
  }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch){
  return bindActionCreators(Actions,dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowTheLocationWithRouter);
