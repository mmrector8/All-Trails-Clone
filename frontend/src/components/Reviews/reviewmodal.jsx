import * as reviewmodalcss from "./reviewmodal.css"
import { useState } from "react";
import { useSelector } from "react-redux";

const ReviewModal = ({open, onClose, hike}) =>{
    const [stars, setStars] = useState('')
    const [content, setContent] = useState('')
    const [activityType, setActivityType] = useState('')
    const [conditions, setConditions] = useState(null) 

    if (!open){
        return null;
    }
    if(!hike){
        return null;
    }

    return (
        <>
            <div className="overlay"></div>
            <div className='modal-content'>
                <button onClick={onClose}>X</button>
                <h1>{hike.name}</h1>
                <form>
                    <label>Stars
                        <input type="number" onChange={(e=> setStars(e.target.value))}></input>
                    </label>
                    <label>Review
                        <input type="text" onChange={(e => setContent(e.target.value))}></input>
                    </label>
                    <label>Activity Type
                        <select onChange={(e => setContent(e.target.value))}>
                            <option value="hiking">Hiking</option>
                            <option value="walking">Walking</option>
                        </select>
                    </label>
                    <label>Trail Conditions 
                        <select onChange={(e => setConditions(e.target.value))}>
                            <option value="Great!">Great!</option>
                            <option value="No shade">No shade</option>
                        </select>
                    </label>
                    <button>Post</button>
                </form>
               
            </div>
        </>
    )
}
export default ReviewModal;