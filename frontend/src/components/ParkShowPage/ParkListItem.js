import { useState, useEffect } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPark, fetchPark } from "../../store/parks"

const ParkListItem = ({ hike }) => {
    const {parkId} = useParams()
    const dispatch = useDispatch();

    const park = useSelector(getPark(parkId))

    useEffect(() => {
        dispatch(fetchPark(parkId))
    }, [dispatch, parkId])

    if (!park) {
        return null;
    }

    return (
        <>
            <Link to={`/hikes/${hike.id}`} className="link">
                <div className="hike-list-item-container">
                    <div className="hike-list-items-photos">
                        <img src="" alt="photo here"></img>
                    </div>
                    <div className="hike-list-items">
                        <p className="hike-list-item hike-difficulty-index">{hike.difficulty}</p>
                        <div className="top-list-items">
                            <p className="hike-list-item hike-name">{hike.name}</p>
                            <p className="hike-list-item park-name-trails">{park.name}</p>
                            <p className="hike-list-item hike-duration-and-estimated-time">Length: {hike.duration} {"•"} Est. {hike.estimated_time}</p>
                        </div>
                        <div className="description-container">
                            <p className="hike-list-item hike-description">
                                {hike.description.slice(0, 150)}... <button className="read-more link">Show more </button>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default ParkListItem;