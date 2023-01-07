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
                <button onClick={onClose}>X</button>
                <h1>{hike.name}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="star-rating">
                        <input id="5" type="radio" name="rating" value={5} onChange={(e=> setStars(e.target.value))}/>
                        <label for="5" title="5 stars" className="star-label">
                            <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="4" type="radio" name="rating" value={4} onChange={(e => setStars(e.target.value))} />
                        <label for="4" title="4 stars" className="star-label">
                            <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="3" type="radio" name="rating" value={3} onChange={(e => setStars(e.target.value))} />
                        <label for="3" title="3 stars" className="star-label">
                            <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="2" type="radio" name="rating" value={2} onChange={(e => setStars(e.target.value))} />
                        <label for="2" title="2 stars" className="star-label">
                            <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="1" type="radio" name="rating" value={1} onChange={(e => setStars(e.target.value))} />
                        <label for="1" title="1 star" className="star-label">
                            <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                    </div>
                    <label>Review
                        <textarea value={content} onChange={(e => setContent(e.target.value))} />
                    </label>
                    <label>Activity Type
                        <select value ={activityType} onChange={(e => setActivityType(e.target.value))}>
                            <option value="hiking">Hiking</option>
                            <option value="walking">Walking</option>
                        </select>
                    </label>
                    <label>Trail Conditions 
                        <select value={conditions} onChange={(e => setConditions(e.target.value))}>
                            <option value="Great!">Great!</option>
                            <option value="No shade">No shade</option>
                        </select>
                    </label>
                    <button type="submit">Post</button>
                </form> 
            </div>
        </>
    )
}
export default ReviewModal;