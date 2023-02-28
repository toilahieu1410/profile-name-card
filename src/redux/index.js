import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import address from './address/reducer'
import profile from './profile/reducer'
import comment from './comment/reducer'
const rootReducer = combineReducers({
  address, profile, comment
});

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store