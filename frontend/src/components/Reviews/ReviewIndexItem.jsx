
import * as reviewindexcss from "./reviewindexitem.css"
import { useDispatch } from "react-redux"
import { deleteReview } from "../../store/reviews";

const ReviewIndexItem = ({review, currentUser}) =>{
    const dispatch = useDispatch();

    if (!review){
        return <div>No reviews yet!</div>
    }

    const months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }

    const convertDate = () =>{
        const date = review.updatedAt.toString();
        const year = date.slice(0,4)
        const month = parseInt(date.slice(5,7))
        let day;
        if(date[8] === '0'){
            day = date.slice(9, 10)
        }else{
            day = date.slice(8, 10)
        }
       let convertedDate = `${months[month]} ${day}, ${year}`
       return convertedDate;
    }

    const handleDeleteClick = ()=>{
        dispatch(deleteReview(review))
    }

    const checkCurrentUser =() =>{
        if (currentUser && currentUser.id === review.userId){
            return (
                 <button onClick={handleDeleteClick}>Delete Review</button>
            )
        }
        return null
    }

    return (
        <>
            <div className= 'review-index-item'>
                <div className= "review-header-container">
                    <div className="user-icon">
                        <i className="fa-solid fa-tree dropdown-icon review-icon" ></i>
                    </div>
                    <div className = "review-header">
                        <h1>{review.userId}</h1>
                        <p>{convertDate()} • {review.activityType}</p>
                    </div>
                </div>
                <div className="review-content">
                    <p>{review.stars}</p>
                    <p>{review.content}</p>
                </div>
                {checkCurrentUser()}
            </div>
        </>
        
    )
}
export default ReviewIndexItem;