import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHike, fetchHike } from "../../store/hikes";
import placeholdermap from "../../images/placeholdermap.png"
import * as HikeShowCss from "./HikeShowPage.css"

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
        <div className="whole-page">
        <div className="hike-show-page">
            <div className="descriptors-with-background-image">
                <h1 className="main-descriptors hike-title">{hike.name}</h1>
                <p className="main-descriptors hike-difficulty">{hike.difficulty}</p>
                <p className="main-descriptors park-name">Park Name: {hike.parkId}</p>
            </div>
            <div className="body-descriptors">
                <p>Length: {hike.duration}</p>
                <p>Elevation Gain: {hike.elevationGain}</p>
                <p>Route Type: {hike.routeType}</p>
                <p>{hike.description}</p>
            </div>
            <div className='sidebar'>
                <div className='sidebar-map'>
                    <img src={placeholdermap}></img>
                </div>
                <div className="other-hikes">
                    <li>hike1</li>
                    <li>hike2</li>
                    <li>hike3</li>
                </div>
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
            <div className='weather'>
                <p>Weather modal here</p>
            </div>
            <div className="reviews">
                <li>Review 1</li>
                <li>Review 2</li>
            </div>
        </div>
        </div>
        </>
    )
}

export default HikeShowPage;