import { GET_ALL_POSTS, LOAD_MORE_POSTS, ASYNC_GET_ALL_POSTS, PostActions, LikeActions, INCREMENT_LIKE } from "../ActionTypes/ActionTypes";
import { Dispatch } from 'redux'
import data from '@/Resources/Data.json'

export function GetAllPosts(): PostActions {
    return {
        type: GET_ALL_POSTS,
        payload: data.posts
    };
}

export function LoadMorePosts(): PostActions {
    return {
       type: LOAD_MORE_POSTS,
       payload: 1
    };
}

export function AsyncGetAllPosts() {
    return async (dispatch: Dispatch) => {
        try {
          setTimeout(()=> dispatch({ type: GET_ALL_POSTS, payload:data.posts}), 2003)
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
    }

export function IncrementLike(LikesCount: Number): LikeActions {
  return {
    type: INCREMENT_LIKE,
    payload: LikesCount
  }
}
