import {combineReducers,legacy_createStore as createStore,applyMiddleware,compose} from "redux"
import { counterReducer } from "./reducers/counterReducer"
import {composeWithDevTools} from "@redux-devtools/extension"
import thunk from "redux-thunk"
const reducer = combineReducers({
    counter:counterReducer
})


export const store = createStore(reducer,{},composeWithDevTools(applyMiddleware(thunk)) )