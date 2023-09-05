import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostActions } from "./Redux/ActionTypes/ActionTypes";
import {LoadMorePosts} from "./Redux/Actions/ActionCreator"
export const UseNewsFeed = (action : PostActions) => {
  const dispatch = useDispatch();
  const { posts, hasMore } = useSelector((state: any) => state);
  const loadingRef = useRef<HTMLDivElement | null>(null); // Задаем тип для ref
  
  useEffect(() => {
    
    const observer = new IntersectionObserver(
      entries => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          dispatch(LoadMorePosts());
        }
      },
      { threshold: 0.1 }
    );
    if (!hasMore && loadingRef.current) {
        observer.unobserve(loadingRef.current);
        return;
      }
    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  });

  return { posts, loadingRef, hasMore };
};