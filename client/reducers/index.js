import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import plants from './plants'

export default combineReducers({
  plants,
  routing: routerReducer
})
