import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const HikeListItem = ({hike}) =>{

    return (
        <>
        <Link to={`/hikes/${hike.id}`} className="link">
            <div className="hike-list-item-container">
            <div className="hike-list-items-photos">
                <img src="" alt="photo here"></img>
            </div>
            <div className="hike-list-items">
                <p className="hike-list-item hike-difficulty">{hike.difficulty}</p>
                <div className="top-list-items">
                    <p className="hike-list-item hike-name">{hike.name}</p>
                    <p className ="hike-list-item park-name-trails">Park Name:{hike.parkId}</p>
                    <p className="hike-list-item hike-duration-and-estimated-time">Length: {hike.duration} {"•"} {hike.estimatedTime}  </p>
                </div>
                <div className="description-container">
                    <p className="hike-list-item hike-description">
                                {hike.description.slice(0, 150)}... <Link to={`/hikes/${hike.id}`} className="read-more link">Show more </Link>
                    </p>
                </div>
            </div>
            </div>
        </Link>
        </>
    )
}
export default HikeListItem;