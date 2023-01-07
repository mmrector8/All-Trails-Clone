import * as reviewmodalcss from "./reviewmodal.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviews";

const ReviewModal = ({open, onClose, hike}) =>{
    const user = useSelector((state)=> state.session.user)
    const dispatch = useDispatch();
    const [stars, setStars] = useState(0)
    const [content, setContent] = useState('')
    const [activityType, setActivityType] = useState('')
    const [conditions, setConditions] = useState('') 

    if (!open){
        return null;
    }
    if(!hike || !user){
        return null;
    }

    const handleSubmit = async (e) =>{
        console.log('hitting handlesubmit')
        const data = {
            user_id: 1,
            hike_id: 2,
            stars: 2,
            content: "very nice hike",
            activity_type: "hiking",
            conditions: "Great!"
        }
        console.log(data, 'data')
        dispatch(createReview(data))
    }

    return (
        <>
            <div className="overlay"></div>
            <div className='modal-content'>
                <button onClick={onClose}>X</button>
                <h1>{hike.name}</h1>
                <button onClick={handleSubmit}>Submit</button>
                {/* <form onSubmit={handleSubmit}>
                    <label>Stars
                        <input type="integer" value={stars} onChange={(e=> setStars(e.target.value))}></input>
                    </label>
                    <label>Review
                        <input type="text" value={content} onChange={(e => setContent(e.target.value))}></input>
                    </label>
                    <label>Activity Type
                        <input type="text" value={activityType} onChange={(e => setActivityType(e.target.value))}></input>
                        <select onChange={(e => setActivityType(e.target.value))} value={activityType}>
                            <option value="hiking">Hiking</option>
                            <option value="walking">Walking</option>
                        </select>
                    </label>
                    <label>Trail Conditions 
                        <input type="text" value={conditions} onChange={(e => setConditions(e.target.value))}></input>
                        <select onChange={(e => setConditions(e.target.value))} value={conditions}>
                            <option value="Great!">Great!</option>
                            <option value="No shade">No shade</option>
                        </select>
                    </label>
                    <button type="submit">Post</button>
                </form> */}
               
            </div>
        </>
    )
}
export default ReviewModal;