import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { getPark, fetchPark} from "../../store/parks";
import { useHistory } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';

const HikeListItem = ({hike }) =>{
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const history = useHistory();
    // const park = useSelector(getPark(hike.parkId))


    // useEffect(() => {
    //     dispatch(fetchPark(hike.parkId))
    // }, [dispatch, hike.parkId])

    // if (!park) {
    //         return null;
    // }
    const routeChange = ()=>{
        let path = `/hikes/${hike.id}`
        history.push(path)
        window.scrollTo({top: 0, left: 0})
    }

    const handleParkShowClick = (e)=>{
        e.stopPropagation()
        window.scrollTo({ top: 0, left: 0 })
    }

    return (
        <>
            <div onClick={routeChange} className='hike-show-button'>
               
            <div className="hike-list-item-container">
            <div className="hike-list-items-photos">
                <img src="" alt="photo here"></img>
            </div>
            <div className="hike-list-items">
                <p className="hike-list-item hike-difficulty-index">{hike.difficulty}</p>
                <div className="top-list-items">
                    <p className="hike-list-item hike-name">{hike.name}</p>
                    <Link to={`/parks/${hike.parkId}`} onClick={handleParkShowClick} className="hike-list-item park-name-trails">{hike.parkName}</Link>
                    <p className="hike-list-item hike-duration-and-estimated-time">Length: {hike.duration} {"•"} Est. {hike.estimatedTime}  </p>
                </div>
                <div className="description-container">
                    <p className="hike-list-item hike-description">
                        {hike.description.slice(0, 150)}... <button className="read-more link">Show more </button>
                    </p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default HikeListItem;