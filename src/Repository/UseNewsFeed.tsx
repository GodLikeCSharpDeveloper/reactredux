import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from "../Resources/Data.json"

export const UseNewsFeed = data;
// export const UseNewsFeed = () => {
//   const dispatch = useDispatch();
//   const { posts, allPosts } = useSelector((state: State) => state);
//   const loadingRef = useRef<HTMLDivElement | null>(null); // Задаем тип для ref

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         const firstEntry = entries[0];
//         if (firstEntry.isIntersecting) {
//           dispatch(fetchPostsAsync());
//         }
//       },
//       { threshold: 1 }
//     );

//     if (loadingRef.current) {
//       observer.observe(loadingRef.current);
//     }

//     return () => {
//       if (loadingRef.current) {
//         observer.unobserve(loadingRef.current);
//       }
//     };
//   }, []);

//   return { posts, loadingRef };
// };