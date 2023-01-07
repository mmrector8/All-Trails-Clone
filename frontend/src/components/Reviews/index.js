import * as reviewscss from "./reviews.css"
import ReviewIndexItem from "./ReviewIndexItem";

const ReviewIndex = ({hike}) =>{

    const reviews = hike.reviews
    
    if(!hike || !reviews){
        return null;
    }

    return (
        <>
            <h1>Reviews</h1>
            {reviews?.map((review)=><ReviewIndexItem review={review}/>)}
        </>
    )

}
export default ReviewIndex;