import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHike, getHikes, fetchHike, fetchHikes } from "../../store/hikes";
import { getPark, fetchPark } from "../../store/parks"
import placeholdermap from "../../images/placeholdermap.png"
import * as HikeShowCss from "./HikeShowPage.css"
import HikeShowListItem from "./OtherHikesItem";

const HikeShowPage = ()=>{
    const dispatch = useDispatch();
    const { hikeId } = useParams();
    let hike = useSelector(getHike(hikeId))
    let allHikes = useSelector(getHikes)

    useEffect(()=>{
        dispatch(fetchHike(hikeId))
    }, [hikeId])

    useEffect(()=>{
        dispatch(fetchHikes())
    }, [dispatch, hikeId])

    if (!hike){
        return null;
    }

    const getFilteredHikes = ()=>{
        let filtered = []
        for(let i=0; i < allHikes.length; i++ ){
            if (allHikes[i].parkId === hike.parkId && filtered.length < 5){
                filtered.push(allHikes[i])
            }
        }
        return filtered;
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
            <div className="grid-elements">
                <div className="body-descriptors">
                    <p className='body-items'>Length: <p id="duration">{hike.duration}</p></p>
                    <p className='body-items'>Elevation Gain: <p id="el-gain">{hike.elevationGain}</p></p>
                    <p className='body-items'>Route Type: <p id="type">{hike.routeType[0].toUpperCase() + hike.routeType.slice(1,hike.routeType.length)}</p></p>
                </div>
                <div className="long-description">
                    <p>{hike.description}</p>
                </div>
                <div className='sidebar'>
                    <div className='sidebar-map-container'>
                        <img src={placeholdermap} className="sidebar-map"></img>
                    </div>
                    <div className="other-hikes">
                            <h1 className='nearby-trails'>Nearby trails</h1>
                        {getFilteredHikes().map((hike, i)=> <HikeShowListItem key={i} hike={hike}/>)}
                    </div>
                </div>
                
                <div className="tag-container">
                    {/* <ul> */}
                        <p className="tags"> Tag 1</p>
                        <p className="tags"> Tag 2</p>
                    {/* </ul> */}
                </div>
                <div className='conditions'>
                    <ul>
                        <li>Conditions from reviews will go here</li>
                    </ul>
                </div>
                <div className='weather'>
                    <p> Weather modal here</p>
                </div>
               
                <div className="reviews">Write a Review
                    <li>Review 1</li>
                    <li>Review 2</li>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default HikeShowPage;