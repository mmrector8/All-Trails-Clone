import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPark, fetchPark } from "../../store/parks"

const HikeShowListItem = ({ hike }) => {
    const dispatch = useDispatch();

    const park = useSelector(getPark(hike.parkId))

    useEffect(() => {
        dispatch(fetchPark(hike.parkId))
    }, [dispatch, hike.parkId])

    if (!park) {
        return null;
    }


    return (
        <>
            <div className="side-bar-hikes">
            <Link to={`/hikes/${hike.id}`} className="link">
                    <div className="hike-show-list-items-photos">
                        <img src="" alt="photo here"></img>
                    </div>
                    <div className="hike-show-list-items">
                        <p className="hike-show-list-item hike-show-difficulty">{hike.difficulty}</p>
                        <p className="hike-show-list-item hike-show-name">{hike.name}</p>
                        <Link to={`/parks/${hike.parkId}`} className="hike-show-park-name">{park.name}</Link>
                        <p className="hike-show-duration-and-length">Length: {hike.duration} {"•"} Est. {hike.estimatedTime}  </p>
                    </div>
            </Link>
            </div>
        </>
    )
}
export default HikeShowListItem;