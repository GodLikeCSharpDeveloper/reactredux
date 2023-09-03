import { AsyncGetAllPosts, GetAllPosts, LoadMorePosts } from "../Actions/ActionCreator"
import { GET_ALL_POSTS, LOAD_MORE_POSTS, ASYNC_GET_ALL_POSTS } from "../ActionTypes/ActionTypes";
import Post from "../Model/PostsModel";

interface State {
    posts: Post[];
    allPosts: Post[];
}
const InitialState : State = {
    posts: [],
    allPosts: []
}
export function postReducer(state = InitialState, action: any){
    switch(action.type){
        case GET_ALL_POSTS:
            console.log("get")
            return state;
        case LOAD_MORE_POSTS:
            console.log("load")
            return state;
        case ASYNC_GET_ALL_POSTS:
            console.log('async')
            return state;
        default:
            console.log("default2")
            return state;
    }
}
export default postReducer;