import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

let store = createStore(
  reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App} />
        </Router>
      </Provider>
    ),
    document.getElementById('app')
  )
})
