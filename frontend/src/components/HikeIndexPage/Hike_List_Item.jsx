import { Link } from "react-router-dom";

const HikeListItem = ({hike}) =>{
    return (
        <>
        <ul>
            {console.log(hike)}
            <li>{hike.name}</li>
            <li>{hike.difficulty}</li>
            <li>{hike.city}</li>
            <li>{hike.length}</li>
            <li>{hike.duration}</li>
            <li>{hike.description}</li>
            <li>{hike.estimatedTime}</li>
            <br></br>
        </ul>
        </>
    )
}
export default HikeListItem;