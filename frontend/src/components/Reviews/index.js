import * as reviewscss from "./reviews.css"
import ReviewIndexItem from "./ReviewIndexItem";
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import {getReviews } from "../../store/reviews"
import { useParams } from "react-router-dom";
import ReviewModalContainer from "./reviewmodalcontainer";

const ReviewIndex = ({hike}) =>{
    const [reviewsPresent, setReviewsPresent] = useState(false)
    const reviews = useSelector(getReviews)
    const currentUser = useSelector(state=> state.session.user)

    if(!hike || !reviews){
        return null;
    }

    const averageStars = () =>{
        if (!reviews.length){
           return 0
        }
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
                        <p>5 <i className="fa-sharp fa-solid fa-star star-rating-icon"></i>------</p>
                        <p>4 <i className="fa-sharp fa-solid fa-star star-rating-icon"></i>------</p>
                        <p>3 <i className="fa-sharp fa-solid fa-star star-rating-icon"></i>------</p>
                        <p>2 <i className="fa-sharp fa-solid fa-star star-rating-icon"></i>------</p>
                        <p>1<i className="fa-sharp fa-solid fa-star star-rating-icon"></i>------</p>
                    </div>
                    <div className="avg-reviews">
                         <h1 className='avg-stars'>{averageStars()}</h1>
                        <p><i className="fa-sharp fa-solid fa-star star-rating-icon"></i><i className="fa-sharp fa-solid fa-star star-rating-icon"></i><i className="fa-sharp fa-solid fa-star star-rating-icon"></i><i className="fa-sharp fa-solid fa-starstar-rating-icon"></i><i className="fa-sharp fa-solid fa-star star-rating-icon"></i><i className="fa-sharp fa-solid fa-star star-rating-icon"></i><i className="fa-sharp fa-solid fa-starstar-rating-icon"></i></p>
                        <p>{reviews.length} reviews</p>
                        
                    </div>
                     
                    <ReviewModalContainer hike={hike}/>
                </div>
            {reviews?.map((review, i)=><ReviewIndexItem review={review} key={i} currentUser={currentUser}/>)}
        </>
    )

}
export default ReviewIndex;