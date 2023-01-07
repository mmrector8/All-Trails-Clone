import * as reviewscss from "./reviews.css"
import ReviewIndexItem from "./ReviewIndexItem";
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import { fetchReviews, getReviews } from "../../store/reviews"
import { useParams } from "react-router-dom";

const ReviewIndex = ({hike}) =>{
    const reviews = useSelector(getReviews)
    const dispatch = useDispatch(); 
    const {hikeId} = useParams()

    useEffect(()=>{
        dispatch(fetchReviews(hike.id))
    }, [dispatch])

    if(!hike || !reviews){
        return null;
    }

    return (
        <>
            <h1>Reviews</h1>
            {reviews?.map((review, i)=><ReviewIndexItem review={review} key={i}/>)}
        </>
    )

}
export default ReviewIndex;