import { Link } from "react-router-dom";

const HikeListItem = ({hike}) =>{
    return (
        <>
        <ul>
            <li>{hike.name}</li>
            <li>{hike.difficulty}</li>
            <li>{hike.city}</li>
            <li>{hike.length}</li>
            <li>{hike.duration}</li>
            <li>{hike.description}</li>
            <li>{hike.est_time} hours</li>
            <br></br>
        </ul>
        </>
    )
}
export default HikeListItem;