import { createStore, combineReducers } from 'redux'
import { authReducer } from '../reducers/authReducer'

const reducer = combineReducers({
    auth: authReducer,
})



export const Store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())