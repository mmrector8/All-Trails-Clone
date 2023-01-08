import * as reviewmodalcss from "./reviewmodal.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviews";

const ReviewModal = ({open, onClose, hike}) =>{
    const user = useSelector((state)=> state.session.user)
    const dispatch = useDispatch();
    const [stars, setStars] = useState(0)
    const [content, setContent] = useState('')
    const [activityType, setActivityType] = useState('hiking')
    const [conditions, setConditions] = useState('Great!') 

    if (!open){
        return null;
    }
    if(!hike || !user){
        return null;
    }

    const handleSubmit = async (e) =>{
        const data = {
            user_id: user.id,
            hike_id: hike.id,
            stars,
            content,
            activity_type: activityType,
            conditions
        }
        dispatch(createReview(data))
    }

    return (
        <>
            <div className="overlay"></div>
            <div className='modal-content'>
                <button onClick={onClose} className="exit-modal">X</button>
                <h1 className="review-hike-title">{hike.name}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="review-form">
                    <div className="star-rating">
                        <input id="5" type="radio" name="rating" value={5} onChange={(e => setStars(e.target.value))} />
                        <label htmlFor="5" title="5 stars" className="star-label">
                            <i className="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="4" type="radio" name="rating" value={4} onChange={(e => setStars(e.target.value))} />
                        <label htmlFor="4" title="4 stars" className="star-label">
                            <i className="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="3" type="radio" name="rating" value={3} onChange={(e => setStars(e.target.value))} />
                        <label htmlFor="3" title="3 stars" className="star-label">
                            <i className="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="2" type="radio" name="rating" value={2} onChange={(e => setStars(e.target.value))} />
                        <label htmlFor="2" title="2 stars" className="star-label">
                            <i className="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="1" type="radio" name="rating" value={1} onChange={(e => setStars(e.target.value))} />
                        <label htmlFor="1" title="1 star" className="star-label">
                            <i className="active fa fa-star" aria-hidden="true"></i>
                        </label>
                    </div>
                    <div className="review-content">
                        <label className="review-content-label">Review</label>
                        <textarea value={content} onChange={(e => setContent(e.target.value))} className='textarea'/> 
                    
                    </div>
                    <div className="activity-type-dropdown">
                            <p className="activity-type-label">Activity Type</p>
                            <select value ={activityType} onChange={(e => setActivityType(e.target.value))}>
                                <option value="hiking">Hiking</option>
                                <option value="walking">Walking</option>
                            </select>
                            
                    </div>
                    <label>Trail Conditions 
                        {/* <select value={conditions} onChange={(e => setConditions(e.target.value))}>
                            <option value="Great!">Great!</option>
                            <option value="No shade">No shade</option>
                        </select> */}
                        <input type="radio" name='conditions' value='Great!' id="conditions1" onChange={(e => setConditions(e.target.value))} />
                        <label htmlFor="conditions1" className="conditions1"> Great!</label>
                        

                    </label>
                    
                    </div>
                    <button type="submit">Post</button>
                </form> 
            </div>
        </>
    )
}
export default ReviewModal;