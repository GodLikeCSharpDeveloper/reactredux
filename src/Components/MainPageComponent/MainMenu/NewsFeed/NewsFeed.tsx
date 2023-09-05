import '/src/css/NewsFeed.css'
import FeedSetting from './FeedSetting'
import FeedButtons from './FeedButtons'
import FeedLinks from './FeedLinks'
import store from '@/Repository/Redux/Store/ReduxStore' 
import { GetAllPosts, AsyncGetAllPosts, LoadMorePosts } from '@/Repository/Redux/Actions/ActionCreator'
import { UseNewsFeed } from '@/Repository/UseNewsFeed'
import Posts from '@/Repository/Redux/Model/PostsModel'
function NewsFeed() {
    const { posts, loadingRef, hasMore } = UseNewsFeed(LoadMorePosts());
    return (
        <div className='FeedSettings'>
            <button onClick={()=>store.dispatch(LoadMorePosts())}>load</button>
            <button onClick={()=>store.dispatch(GetAllPosts())}>get</button>
            <button onClick={()=>store.dispatch(AsyncGetAllPosts())}>async</button>
            <FeedSetting />
            {posts.map((post:Posts) => (
                <div className='row FeedForm' key={post.date_posted}>
                <FeedLinks time={post.date_posted} user={post.nickname} title={post.title} category={post.category}></FeedLinks>
                <FeedButtons CommentsCount={post.comments_count} LikesCount={post.likes_count}></FeedButtons>
            </div>
            ))}
           
           { hasMore ? <div ref={loadingRef}>Loading...</div> : <div>Конец списка</div> }
        </div>
    )
}
export default NewsFeed;