import {configureStore, applyMiddleware} from '@reduxjs/toolkit'
import postReducer from '../Reducers/RootReducer'
import thunk from 'redux-thunk'
import {createStore} from 'redux'

export const store = createStore(postReducer, applyMiddleware(thunk));
export default store;