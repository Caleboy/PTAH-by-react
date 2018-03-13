require('./styles/App.scss')
import 'core-js/fn/object/assign'
import React from 'react'
import { render } from 'react-dom'
// import { Router, Route } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import App from './containers/App'
import Home from './containers/home'
import Manage from './containers/manage'
import Company from './containers/company'
import configureStore from './store/configureStore'
// import createBrowserHistory from 'history/createBrowserHistory'

const store = configureStore()
// const customHistory = createBrowserHistory()

// Render the main component into the dom
render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
        <Route exact path="/" component={Home}/>
        <Route path="/manage" component={Manage}/>
        <Route path="/company" component={Company}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
