import '../../../../css/NewsFeed.css'
import FeedSetting from './FeedSetting'
import FeedButtons from './FeedButtons'
import FeedLinks from './FeedLinks'
import store from '../../../../Repository/Redux/Store/ReduxStore' 
import { UseNewsFeed } from '../../../../Repository/UseNewsFeed';
import { GetAllPosts, AsyncGetAllPosts, LoadMorePosts } from '../../../../Repository/Redux/Actions/ActionCreator'
interface Posts {
    nickname: string;
    date_posted: string;
    category: string;
    title: string;
    likes_count: number;
    comments_count: number;
}
function NewsFeed() {
   const posts = UseNewsFeed;
    return (
        <div className='FeedSettings'>
            <button onClick={()=>store.dispatch(LoadMorePosts())}>load</button>
            <button onClick={()=>store.dispatch(GetAllPosts())}>get</button>
            <button onClick={()=>store.dispatch(AsyncGetAllPosts())}>async</button>
            <FeedSetting />
            {posts.posts.map((post:Posts) => (
                <div className='row FeedForm' key={post.date_posted}>
                <FeedLinks time={post.date_posted} user={post.nickname} title={post.title} category={post.category}></FeedLinks>
                <FeedButtons CommentsCount={post.comments_count} LikesCount={post.likes_count}></FeedButtons>
            </div>
            ))}
           
            <div >Loading...</div>
        </div>
    )
}
export default NewsFeed;