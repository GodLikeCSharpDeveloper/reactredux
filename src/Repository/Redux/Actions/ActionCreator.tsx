import { GET_ALL_POSTS, LOAD_MORE_POSTS, ASYNC_GET_ALL_POSTS } from "../ActionTypes/ActionTypes";
import { Dispatch, Action } from 'redux'
interface GetAllPostsAction extends Action {
    type: typeof GET_ALL_POSTS;
}

interface LoadMorePostsAction extends Action {
    type: typeof LOAD_MORE_POSTS;
}

interface AsyncGetAllPostsAction extends Action {
    type: typeof ASYNC_GET_ALL_POSTS;
}

export function GetAllPosts(): GetAllPostsAction {
    return {
        type: GET_ALL_POSTS
    };
}

export function LoadMorePosts(): LoadMorePostsAction {
    return {
       type: LOAD_MORE_POSTS
    };
}

export function AsyncGetAllPosts() {
    return function(dispatch: Dispatch) {
        const action: AsyncGetAllPostsAction = {
            type: ASYNC_GET_ALL_POSTS
        };
        dispatch(action);
    }
}

