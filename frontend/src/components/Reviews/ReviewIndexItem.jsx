

const ReviewIndexItem = ({review}) =>{
    if (!review){
        return null;
    }

    return (
        <>
            <div className= "review-header-container">
                <div className="user-icon">
                    <i className="fa-solid fa-tree dropdown-icon review-icon" ></i>
                </div>
                <div className = "review-header">
                    <h1>{review.userId}</h1>
                    <p>{review.updatedAt} • {review.activityType}</p>
                </div>
            </div>
            <p>{review.stars}</p>
            <p>{review.content}</p>
        </>
        
    )
}
export default ReviewIndexItem;