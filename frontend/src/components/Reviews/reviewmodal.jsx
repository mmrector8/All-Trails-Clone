import * as reviewmodalcss from "./reviewmodal.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview, getReview, fetchReview, updateReview } from "../../store/reviews";
import { useParams } from "react-router-dom";

const ReviewModal = ({open, onClose, hike, review}) =>{
    const user = useSelector((state)=> state.session.user)
    const dispatch = useDispatch();
    const [stars, setStars] = useState(0)
    const [content, setContent] = useState('')
    const [activityType, setActivityType] = useState('hiking')
    const [conditions, setConditions] = useState([]) 
    const [isEdit, setIsEdit] = useState(false);
    const [pageNum, setPageNum] = useState(1)

    useEffect(()=>{
        if(review){
            setIsEdit(true)
            setStars(review.stars)
            setContent(review.content)
            setActivityType(review.activityType)
            setConditions(review.conditions.split(","))
            dispatch(fetchReview(review.id, hike.id))            
        }
    }, [dispatch, review, hike.id])

    useEffect(()=>{
        if(review){
            setConditions(review.conditions.split(","))
        } 
    }, [open])

    if (!open){
        return null;
    }
    if(!hike || !user){
        return null;
    }

    const handleSubmit = async (e) =>{
        if(review){
            const data ={
                id: review.id,
                user_id: user.id,
                hike_id: hike.id,
                stars,
                content,
                activity_type: activityType,
                conditions: conditions.toString()
            }
            dispatch(updateReview(data))
        }
        else{
            const data = {
                user_id: user.id,
                hike_id: hike.id,
                stars,
                content,
                activity_type: activityType,
                conditions: conditions.toString()
            }
            dispatch(createReview(data))
        }
        
    }

    const handleRadioChange = (e) =>{
        if(!conditions.includes(e.target.value)){
            setConditions((prevConditions) => [...prevConditions].concat(e.target.value))
        }else{
            let idx= conditions.indexOf(e.target.value)
            setConditions(prevConditions=> prevConditions.slice(0, idx).concat(prevConditions.slice(idx+1, prevConditions.length)))
        }     
    }

    const activities = ['backpacking', 'bird watching', 'bike touring', 'camping', 'fishing', 'hiking', 'horseback riding', 'mountain biking', 'road biking', 'rock climbing', 'skiing', 'running', 'walking']
    const conditionOptions = ['Great!', 'Blowdown', 'Bridge out', 'Bugs']




    return (
        <>
            <div className="overlay"></div>
            <div className='modal-content'>
                <button onClick={onClose} className="exit-modal">X</button>
                <h1 className="review-hike-title">{hike.name}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="review-form">
                        <div className="star-rating">
                            {[5, 4, 3, 2, 1].map((star, i) => <><input id={`${star}`} type="radio" name="rating" value={star} onChange={(e => setStars(e.target.value))} checked={stars == star ? "checked" : ""} />
                                <label htmlFor={`${star}`} title={`${star} stars`} className="star-label">
                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                </label></>)}
{/* 
                            <input id="5" type="radio" name="rating" value={5} onChange={(e => setStars(e.target.value))} checked={stars == 5 ? "checked" : ""} />

                            <label htmlFor="5" title="5 stars" className="star-label">
                                <i className="active fa fa-star" aria-hidden="true"></i>
                            </label>
                            <input id="4" type="radio" name="rating" value={4} onChange={(e => setStars(e.target.value))} checked={stars == 4 ? "checked" : ""} />

                            <label htmlFor="4" title="4 stars" className="star-label">
                                <i className="active fa fa-star" aria-hidden="true"></i>
                            </label>
                            <input id="3" type="radio" name="rating" value={3} onChange={(e => setStars(e.target.value))} checked={stars == 3 ? "checked" : ""} />
                            <label htmlFor="3" title="3 stars" className="star-label">
                                <i className="active fa fa-star" aria-hidden="true"></i>
                            </label>
                            <input id="2" type="radio" name="rating" value={2} onChange={(e => setStars(e.target.value))} checked={stars == 2 ? "checked" : ""} />
                            <label htmlFor="2" title="2 stars" className="star-label">
                                <i className="active fa fa-star" aria-hidden="true"></i>
                            </label>
                            <input id="1" type="radio" name="rating" value={1} onChange={(e => setStars(e.target.value))} checked={stars == 1 ? "checked" : ""} />
                            <label htmlFor="1" title="1 star" className="star-label">
                                <i className="active fa fa-star" aria-hidden="true"></i>
                            </label> */}
                        </div>
                        <div className="review-content">
                            <label className="review-content-label">Review</label>
                            <textarea value={content} onChange={(e => setContent(e.target.value))} className='textarea' />
                        </div>
                    <div className="activity-type-dropdown">
                            <p className="activity-type-label">Activity Type</p>
                            <select value ={activityType} onChange={(e => setActivityType(e.target.value))}>
                                {activities?.map((activity, i)=> <option value={activity} key={i}>{activity}</option>)}
                            </select>
                            
                    </div>
                        <label className="trail-conditions-label">Trail Conditions  </label>
                        <div className="conditions-options">
                            {conditionOptions.map((condition, i) => <div className="radio-conditions" key={`${i}radioconditions`}> <input type="radio" value={condition} key={i} id={`conditions${i}`} onChange={handleRadioChange} checked={conditions.includes(condition) ? "checked" : ""} className="conditions-radio-buttons"></input> <label htmlFor={`conditions${i}`} className="conditions-label" key={condition}> {document.getElementById(`conditions${i}`)?.checked && conditions.includes(condition)? `✓ ${condition}` : condition} </label> </div>)}
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit" className='post-review-button'>{isEdit ? "Edit" : "Post"}</button>
                    </div>
                </form> 
            </div>
        </>
    )
}
export default ReviewModal;