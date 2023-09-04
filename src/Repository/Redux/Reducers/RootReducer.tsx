import data from '../../../Resources/Data.json';
import { GET_ALL_POSTS, LOAD_MORE_POSTS, ASYNC_GET_ALL_POSTS } from "../ActionTypes/ActionTypes";
import Post from "../Model/PostsModel";

interface State {
    posts: Post[];
    allPosts: Post[];
}
const InitialState : State = {
    posts: data.posts.slice(0,5),
    allPosts: data.posts
}
export function postReducer(state = InitialState, action: any){
    switch(action.type){
        case GET_ALL_POSTS:
            console.log("Success getted all data", action.payload)
            return {
                ...state, posts: action.payload
            };
        case LOAD_MORE_POSTS:
            console.log("load")
            return {...state, posts:[...state.posts, ...state.allPosts.slice(state.posts.length, state.posts.length+action.payload)]};
        case ASYNC_GET_ALL_POSTS:
            console.log('async')
            return state;
        default:
            console.log("default2")
            return state;
    }
}
export default postReducer;