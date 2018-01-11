import { combineReducers } from 'redux'
import menuTodes from './menuTodes'
import router from './router'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  menuTodes,
  router
})

export default rootReducer
