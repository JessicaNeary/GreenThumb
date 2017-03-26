import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import PlantView from './components/PlantView'
import Home from './components/Home'
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
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='plant' component={PlantView} />
          </Route>
        </Router>
      </Provider>
    ),
    document.getElementById('app')
  )
})
