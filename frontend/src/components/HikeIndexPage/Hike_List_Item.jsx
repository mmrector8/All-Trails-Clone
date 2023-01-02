import { Link, Redirect } from "react-router-dom";

const HikeListItem = ({hike}) =>{

    const handleClick = (e)=>{
    //    return <Redirect to={`/hikes/${hike.id}`} />
        return <Link to={`/hikes/${hike.id}`}> Redirect</Link>
    }
    return (
        <>
        <Link to={`/hikes/${hike.id}`} id="link">
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
                <p className="hike-list-item hike-description">{hike.description}</p>
                
            </div>
            </div>
        </Link>
        </>
    )
}
export default HikeListItem;