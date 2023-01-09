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

    const sortReviews = (reviews) =>{
        if(reviews.length < 2){
            return reviews;
        }
        let left = []
        let right=[]
        let pivot = reviews[0]

        for(let i =1; i < reviews.length; i ++){
            if(reviews[i].updatedAt < pivot.updatedAt){
                left.push(reviews[i])
            }else{

                right.push(reviews[i])
            }
        }
        return left.concat(pivot).concat(right).reverse();
    }

    const styleBar = (reviews, numReviews) =>{
        let reviewLength = reviews.length
        let rating = 0;

        for(let i=0; i < reviews.length; i ++){
            if (reviews[i].stars == numReviews){
                rating +=1
            }
        }
        rating = (rating / reviewLength)*100;

        return {
            width: `${rating}%`
        }
    }

    return (
        <>
            <h1 className='reviews-title'>Reviews ({reviews.length})</h1>
                <div className= "review-top-bucket">
                    <div className='review-avg-rating-bar'>
                        <div className="stars-slider-container">
                            <p className="icon-holder">5 </p>
                            <i className="fa-sharp fa-solid fa-star star-rating-icon"></i>
                            <div className='five-star-bar' style={styleBar(reviews, 5)}> </div>
                        </div>
                        <div className="stars-slider-container">
                            <p className="icon-holder">4</p>
                            <i className="fa-sharp fa-solid fa-star star-rating-icon"></i>
                            <div className='five-star-bar' style={styleBar(reviews, 4)} > </div>
                        </div>
                        <div className="stars-slider-container">
                            <p className="icon-holder">3</p>
                            <i className="fa-sharp fa-solid fa-star star-rating-icon"></i> 
                            <div className='five-star-bar' style={styleBar(reviews, 3)}> </div>
                        </div>
                         <div className="stars-slider-container">
                            <p className="icon-holder">2</p>
                            <i className="fa-sharp fa-solid fa-star star-rating-icon"></i> 
                            <div className='five-star-bar' style={styleBar(reviews, 2)}> </div>
                         </div>
                        <div className="stars-slider-container">
                             <p className="icon-holder">1 </p>
                            <i className="fa-sharp fa-solid fa-star star-rating-icon"></i>
                            <div className='five-star-bar' style={styleBar(reviews, 1)} > </div>
                        </div>
                    </div>
                    <div className="avg-reviews">
                         <h1 className='avg-stars'>{averageStars()}</h1>
                        <p><i className="fa-sharp fa-solid fa-star star-rating-icon"></i><i className="fa-sharp fa-solid fa-star star-rating-icon"></i><i className="fa-sharp fa-solid fa-star star-rating-icon"></i><i className="fa-sharp fa-solid fa-starstar-rating-icon"></i><i className="fa-sharp fa-solid fa-star star-rating-icon"></i><i className="fa-sharp fa-solid fa-star star-rating-icon"></i><i className="fa-sharp fa-solid fa-starstar-rating-icon"></i></p>
                        <p>{reviews.length} reviews</p>
                        
                    </div>
                     
                    <ReviewModalContainer hike={hike}/>
                </div>
            {sortReviews(reviews).map((review, i)=><ReviewIndexItem review={review} key={i} currentUser={currentUser}/>)}
        </>
    )
    }
export default ReviewIndex;