import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHike, fetchHike} from "../../store/hikes";
import placeholdermap from "../../assets/placeholdermap.png"
import * as HikeShowCss from "./HikeShowPage.css"
import HikeShowListItem from "./OtherHikesItem";
import HikeMapWrapper, {HikeMap} from "../HikeMap";
import HikeBigMapWrapper from "../HikeBigMap";
import ReviewIndex from "../Reviews";

const HikeShowPage = ()=>{
    const dispatch = useDispatch();
    const { hikeId } = useParams();
    let hike = useSelector(getHike(hikeId))
    
    useEffect(()=>{
        dispatch(fetchHike(hikeId))
    }, [dispatch, hikeId])


    if (!hike || !hike.relatedHikes){
        return null;
    }

    const getAllRelatedHikes = ()=>{
       let filtered = []
        for(let i=0; i <hike.relatedHikes.length; i++){
            if (hike.relatedHikes[i].id != hike.id){
                filtered.push(hike.relatedHikes[i])
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
                <p className="main-descriptors park-name">{hike.parkName}</p>
                <img src={hike.photoUrls[0]} alt="hello" className="hike-show-photo" />
            </div>
            <div className="grid-elements">
                <div className="body-descriptors">
                    <div className="duration-items">
                        <p className='body-items'>Length:</p>
                        <p className="body-items duration">{hike.duration}</p>
                    </div>
                    <div className="elevation-gain-items">
                        <p className='body-items'>Elevation Gain:</p>
                        <p className="el-gain">{hike.elevationGain} ft.</p>
                    </div>
                    <div className="route-type-items">
                        <p className='body-items'>Route Type:</p>
                        <p className="type">{hike.routeType[0].toUpperCase() + hike.routeType.slice(1, hike.routeType.length)}</p>
                    </div>
                </div>
                <div className="long-description">
                    <p>{hike.description}</p>
                </div>
                <div className='sidebar'>
                    <div className='sidebar-map-container'>
                        <img src={placeholdermap} alt="map" className="sidebar-map"></img>
                    </div>
                    <div className="other-hikes">
                            <h1 className='nearby-trails'>Nearby trails</h1>
                        {getAllRelatedHikes().map((hike, i)=> <HikeShowListItem key={i} hike={hike}/>)}
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
               
                <div className="reviews">
                    <ReviewIndex hike={hike}/>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default HikeShowPage;