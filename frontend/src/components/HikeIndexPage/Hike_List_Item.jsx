import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { getPark, fetchPark } from "../../store/parks";
import { useHistory } from 'react-router-dom';

const HikeListItem = ({hike }) =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const park = useSelector(getPark(hike.parkId))

    useEffect(() => {
        dispatch(fetchPark(hike.parkId))
    }, [dispatch, hike.parkId])

    if (!park) {
            return null;
    }
   

    return (
        <>
            <Link to={`/hikes/${hike.id}`} onClick={()=>window.scrollTo({ top: 0, left: 0})} className="link">
            <div className="hike-list-item-container">
            <div className="hike-list-items-photos">
                <img src="" alt="photo here"></img>
            </div>
            <div className="hike-list-items">
                <p className="hike-list-item hike-difficulty-index">{hike.difficulty}</p>
                <div className="top-list-items">
                    <p className="hike-list-item hike-name">{hike.name}</p>
                    {/* <button onClick={(() => history.push(`/parks/${hike.parkId}`))}>{park.name}</button> */}
                    <Link to={`/parks/${hike.parkId}`} className ="hike-list-item park-name-trails">{park.name}</Link>
                    <p className="hike-list-item hike-duration-and-estimated-time">Length: {hike.duration} {"•"} Est. {hike.estimatedTime}  </p>
                </div>
                <div className="description-container">
                    <p className="hike-list-item hike-description">
                        {hike.description.slice(0, 150)}... <button className="read-more link">Show more </button>
                        {/* {hike.description.slice(0, 150)}... <Link to={`/hikes/${hike.id}`} className="read-more link">Show more </Link> */}
                    </p>
                </div>
            </div>
            </div>
        </Link>
        </>
    )
}
export default HikeListItem;