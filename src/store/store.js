import { createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    auth: authReducer,
})



export const Store = createStore(
    reducer,
   composeEnhancers(
       applyMiddleware(thunk)
   ))