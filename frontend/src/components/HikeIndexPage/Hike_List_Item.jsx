import { Link } from "react-router-dom";

const HikeListItem = ({hike}) =>{
    return (
        <>
        <div className="hike-list-item-container">
        <div className="hike-list-items-photos">
            <img src="" alt="photo here"></img>
        </div>
        <div className="hike-list-items">
            <p className="hike-list-item hike-difficulty">{hike.difficulty}</p>
            <p className="hike-list-item hike-name">{hike.name}</p>
            <p className ="hike-list-item park-name-trails">{hike.parkId}</p>
            <p className="hike-list-item hike-city">{hike.city}</p>
            <p className="hike-list-item hike-elevation">{hike.elevationGain} ft. elevation gain</p>
            <p className="hike-list-item hike-duration" >{hike.duration}</p>
            <p className="hike-list-item hike-description">{hike.description}</p>
            <p className="hike-list-item hike-estimatedTime">{hike.estimatedTime}</p>
        </div>
        </div>
        </>
    )
}
export default HikeListItem;