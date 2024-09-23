
import * as reviewindexcss from "./reviewindexitem.css"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { deleteReview } from "../../store/reviews";
import ReviewModalContainer from "./reviewmodalcontainer";
import { getHike } from "../../store/hikes";
import StarIndex from "./StarIndex";

const ReviewIndexItem = ({review, currentUser}) =>{
    const dispatch = useDispatch();
    const hike = useSelector(getHike(review.hikeId))

    if (!review || !hike){
        return <div>No reviews yet!</div>
    }

    const reviewConditions = (review)=>{
        const conditionsArr = review?.conditions?.split(",").filter(condition=> condition.length> 2)
        return conditionsArr;
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
        const date = review.createdAt.toString();
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
                <div className='review-buttons'>
                    <button onClick={handleDeleteClick} className="delete-review-button">Delete</button>
                    <ReviewModalContainer hike={hike} isEdit={true} review={review}/>
                </div>
            )
        }
        return null
    }


    return (
        <>
            <div className= 'review-index-item'>
                <div className= "review-header-container">
                    <div className="user-icon">
                        <i className="fa-solid fa-person-hiking review-icon-reviews"></i>
                    </div>
                    <div className = "review-header">
                        <h1>{review?.fname} {review?.lname}</h1>
                        <p className="date-and-activity-type-review">{convertDate()} • {review?.activityType}</p>
                    </div>
                </div>
                <div className="review-content-review-index">
                    <StarIndex numStars={review?.stars}/>
                    <p>{review?.content}</p>

                </div>
                <div className={reviewConditions(review)?.length ? "conditions-on-show-page" : "hide-title"}>
                    <ul className="listy"> <h1 className="conditions-list-title">Conditions:</h1>
                        {reviewConditions(review)?.map((condition, i) => <li key={i} className="condition-list-item">{i === reviewConditions(review).length - 1 ? `${condition}` : `${condition},`}</li>)}
                    </ul>
                </div>
                {checkCurrentUser()}
                
            </div>
        </>
        
    )
}
export default ReviewIndexItem;