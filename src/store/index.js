import { createStore, combineReducers, applyMiddleware } from 'redux'
import home from './home/reducer'
import demo from './demo/reducer'
import thunk from 'redux-thunk'

let store = createStore(combineReducers({ home, demo }), applyMiddleware(thunk))

export default store
