import { GET_ALL_POSTS, LOAD_MORE_POSTS, ASYNC_GET_ALL_POSTS, PostActions } from "../ActionTypes/ActionTypes";
import { Dispatch, Action } from 'redux'
import Posts from "../Model/PostsModel";
import data from '../../../Resources/Data.json'

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
          dispatch({ type: GET_ALL_POSTS})
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
    }


