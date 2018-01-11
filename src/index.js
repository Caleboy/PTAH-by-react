require('./styles/App.scss')
import 'core-js/fn/object/assign'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import App from './containers/App'
import Home from './containers/home'
import configureStore from './store/configureStore'
import createBrowserHistory from 'history/createBrowserHistory'

const store = configureStore()
const customHistory = createBrowserHistory()

// Render the main component into the dom
render(
  <Provider store={store}>
    <Router history={customHistory}>
      <div>
        <Route path="/" component={App}/>
        <Route path="/main" component={Home}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
