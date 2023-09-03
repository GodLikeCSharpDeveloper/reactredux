import '../../../../css/NewsFeed.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
interface Feed {
    category: string,
    user: string,
    time: string,
    title:string
}
function FeedLinks({ category, user, time, title }:Feed) {
    const navigate = useNavigate();
    return (
        <>
            <Link className='row linkClass' to='/details'>
                <div className='col-3'>
                    <span onClick={(()=>navigate(`/details2/${time}`))}>
                        <span className='link'>{category}</span>
                    </span>
                </div>  
                <div className='col-3 '>
                    <label className='linkToUser '>{user}/ {time} </label>
                </div>
                <div className='col-3 linkClass text-start'>

                </div>
                <div className='col-3 linkClass d-flex justify-content-end'>
                    <button>Join</button>
                </div>
                <div className='col-12 linkClass'>
                    <label>{title}</label>
                </div>
            </Link>
        </>
    )
}
export default FeedLinks;