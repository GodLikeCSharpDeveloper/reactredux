import data from '@/Resources/Data.json';
import { GET_ALL_POSTS, LOAD_MORE_POSTS, ASYNC_GET_ALL_POSTS, INCREMENT_LIKE } from "../ActionTypes/ActionTypes";
import Post from "../Model/PostsModel";

interface PostState {
    posts: Post[];
    allPosts: Post[];
    hasMore: boolean
}
const InitialPostState : PostState = {
    posts: data.posts.slice(0,5),
    allPosts: data.posts,
    hasMore: true
}
export function postReducer(PostState = InitialPostState, action: any){
    switch(action.type){
        case GET_ALL_POSTS:
            console.log("Success getted all data", action.payload)
            return {
                ...PostState, posts: action.payload
            };
        case LOAD_MORE_POSTS:
            console.log("load")
            const hasMore = PostState.posts.length < PostState.allPosts.length;
            return {...PostState, posts:[...PostState.posts, ...PostState.allPosts.slice(PostState.posts.length, PostState.posts.length+action.payload)], hasMore};
        case ASYNC_GET_ALL_POSTS:
            console.log('async')
            return PostState;
        default:
            console.log("default2")
            return PostState;
    }
}
interface likeState {
    LikesCount: number;
}
const InititialLikeState : likeState = {
    LikesCount: 0
}
export function likeReducer(LikeState = InititialLikeState, action: any){
    switch(action.type){
        case INCREMENT_LIKE:
            console.log("Incremented likes count:", action.payload+1)
            return {...LikeState, LikesCount: LikeState.LikesCount+1}
    }
}
export default postReducer;