import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import nameCard from "./nameCard/reducer"

const rootReducer = combineReducers({
  nameCard
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store