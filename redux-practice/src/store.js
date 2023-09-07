import {combineReducers,legacy_createStore as createStore,applyMiddleware,compose} from "redux"
import { counterReducer } from "./reducers/counterReducer"
import thunk from "redux-thunk"
const reducer = combineReducers({
    counter:counterReducer
})

const composedEnhancers = compose(applyMiddleware(thunk))

export const store = createStore(reducer,{},composedEnhancers )