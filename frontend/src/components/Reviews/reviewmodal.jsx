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
                        {pageNum === 1 ? <> <div className="star-rating">
                            {[5, 4, 3, 2, 1].map((star, i) => <><input id={`${star}`} type="radio" name="rating" value={star} onChange={(e => setStars(e.target.value))} checked={stars == star ? "checked" : ""} />
                                <label htmlFor={`${star}`} title={`${star} stars`} className="star-label">
                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                </label></>)}
                        </div>
                            <div className="review-content">
                                <label className="review-content-label">Review</label>
                                <textarea value={content} onChange={(e => setContent(e.target.value))} className='textarea' />
                            </div>
                            <button onClick={()=> setPageNum(2)} className="next-page-modal-button">Next Page</button>
                        </> : <> 
                        <div className="activity-type-dropdown">
                            <p className="activity-type-label">Activity Type</p>
                            <select value={activityType} onChange={(e => setActivityType(e.target.value))}>
                                {activities?.map((activity, i) => <option value={activity} key={i}>{activity}</option>)}
                            </select>
                        </div> 
                            <label className="trail-conditions-label">Trail Conditions  </label>
                            <div className="conditions-options">
                                {conditionOptions.map((condition, i) => <div className="radio-conditions" key={`${i}radioconditions`}> <input type="radio" value={condition} key={i} id={`conditions${i}`} onChange={handleRadioChange} checked={conditions.includes(condition) ? "checked" : ""} className="conditions-radio-buttons"></input> <label htmlFor={`conditions${i}`} className="conditions-label" key={condition}> {document.getElementById(`conditions${i}`)?.checked && conditions.includes(condition) ? `✓ ${condition}` : condition} </label> </div>)}
                                </div> 
                            <div className="button-container">
                                <button onClick={(()=>setPageNum(1))} className="go-back-button">Go Back</button>
                                <button type="submit" className='post-review-button'>{isEdit ? "Edit" : "Post"}</button>
                            </div> </>}
                     
                    </div>
                    
                </form> 
            </div>
        </>
    )
}
export default ReviewModal;