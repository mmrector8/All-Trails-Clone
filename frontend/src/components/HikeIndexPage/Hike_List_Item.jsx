import { Link } from "react-router-dom";

const HikeListItem = ({hike}) =>{
    return (
        <>
        <ul>
        <div className="hike-list-items">
            <li className="hike-list-item hike-difficulty">{hike.difficulty}</li>
            <li className="hike-list-item hike-name">{hike.name}</li>
            <li className ="hike-list-item park-name">{hike.parkId}</li>
            <li className="hike-list-item hike-city">{hike.city}</li>
            <li className="hike-list-item hike-elevation">{hike.elevationGain} ft. elevation gain</li>
            <li className="hike-list-item hike-duration" >{hike.duration}</li>
            <li className="hike-list-item hike-description">{hike.description}</li>
            <li className="hike-list-item hike-estimatedTime">{hike.estimatedTime}</li>
        </div>
        </ul>
        </>
    )
}
export default HikeListItem;