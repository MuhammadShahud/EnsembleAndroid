import AuthReducer from './Reducers/AuthReducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

// export const store = createStore(questionReducer);


export default createStore(
    combineReducers(
        {
            AuthReducer,
        }
    ), applyMiddleware(thunk)
)