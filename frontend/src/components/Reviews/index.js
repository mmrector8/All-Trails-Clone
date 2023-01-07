import * as reviewscss from "./reviews.css"

const ReviewIndex = ({hike}) =>{

    const reviews = hike.reviews
    
    if(!hike || !reviews){
        return null;
    }

    return (
        <>
            <h1>Reviews</h1>
            {reviews?.map((review)=><p>{review.content}</p>)}
        </>
    )

}
export default ReviewIndex;