import * as reviewscss from "./reviews.css"
import ReviewIndexItem from "./ReviewIndexItem";
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import {getReviews } from "../../store/reviews"
import { useParams } from "react-router-dom";
import ReviewModalContainer from "./reviewmodalcontainer";

const ReviewIndex = ({hike}) =>{
    const reviews = useSelector(getReviews)
    const currentUser = useSelector(state=> state.session.user)

    if(!hike || !reviews){
        return null;
    }

    const averageStars = () =>{
        let count = 0.0;
        for(let i=0; i < reviews.length; i++){
            count += reviews[i].stars
        }
        return (count/reviews.length).toFixed(1)
    }

    return (
        <>
            <h1 className='reviews-title'>Reviews ({reviews.length})</h1>
                <div className= "review-top-bucket">
                    <div className='review-avg-rating-bar'>
                        <p>5 <i class="fa-sharp fa-solid fa-star"></i>------</p>
                        <p>4 <i class="fa-sharp fa-solid fa-star"></i>------</p>
                        <p>3 <i class="fa-sharp fa-solid fa-star"></i>------</p>
                        <p>2 <i class="fa-sharp fa-solid fa-star"></i>------</p>
                        <p>1<i class="fa-sharp fa-solid fa-star"></i>------</p>
                    </div>
                    <div className="avg-reviews">
                        <h1 className='avg-stars'>{averageStars()}</h1>
                        <p><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i></p>
                        <p>{reviews.length} reviews</p>
                    </div>
                    <ReviewModalContainer hike={hike}/>
                </div>
            {reviews?.map((review, i)=><ReviewIndexItem review={review} key={i}/>)}
        </>
    )

}
export default ReviewIndex;