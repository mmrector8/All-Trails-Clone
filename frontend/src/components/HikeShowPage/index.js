import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHike, fetchHike } from "../../store/hikes";

const HikeShowPage = ()=>{
    const dispatch = useDispatch();
    const { hikeId } = useParams();
    let hike = useSelector(getHike(hikeId))
    console.log(hike, 'hike in useSelector')

    useEffect(()=>{
        dispatch(fetchHike(hikeId))
    }, [hikeId])

    if (!hike){
        return null;
    }

    return (
        <>
            <div className="descriptors">
                <h1>{hike.name}</h1>
                <p>{hike.difficulty}</p>
                <p>Park Name: {hike.parkId}</p>
                <p>Length: {hike.duration}</p>
                <p>Elevation Gain: {hike.elevationGain}</p>
                <p>Route Type: {hike.routeType}</p>
                <p>{hike.description}</p>
            </div>
            <div className="tags">
                <ul>
                    <li> Tag 1</li>
                    <li> Tag 2</li>
                </ul>
            </div>
            <div className='conditions'>
                <ul>
                    <li>Conditions from reviews will go here</li>
                </ul>
            </div>
        </>
    )
}

export default HikeShowPage;