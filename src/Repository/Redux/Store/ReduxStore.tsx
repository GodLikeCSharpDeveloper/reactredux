import {configureStore} from '@reduxjs/toolkit'
import {postReducer, likeReducer} from '../Reducers/RootReducer'
import thunk from 'redux-thunk'


export const store = configureStore({
    reducer: {
      posts: postReducer,
      likes: likeReducer
    }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;