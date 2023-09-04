import Posts from "../Model/PostsModel";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const LOAD_MORE_POSTS = "LOAD_MORE_POSTS";
export const ASYNC_GET_ALL_POSTS = "ASYNC_GET_ALL_POSTS";

interface GetAllPostsAction {
    type: typeof GET_ALL_POSTS;
    payload: Posts[];
}

interface LoadMorePostsAction {
    type: typeof LOAD_MORE_POSTS;
    payload: Number;
}

interface AsyncGetAllPostsAction {
    type: typeof ASYNC_GET_ALL_POSTS;
    payload: Posts[];
}

export type PostActions = GetAllPostsAction | LoadMorePostsAction | AsyncGetAllPostsAction;