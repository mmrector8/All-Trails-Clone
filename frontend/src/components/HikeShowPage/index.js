import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getHike, fetchHike} from "../../store/hikes";
import placeholdermap from "../../assets/placeholdermap.png"
import * as HikeShowCss from "./HikeShowPage.css"
import HikeShowListItem from "./OtherHikesItem";
import HikeMapWrapper, {HikeMap} from "../HikeMap";
import HikeBigMapWrapper from "../HikeBigMap";
import ReviewIndex from "../Reviews";
import { Link } from "react-router-dom";

const HikeShowPage = ()=>{
    const [isShow, setIsShow] = useState(true);
    const dispatch = useDispatch();
    const { hikeId } = useParams();
    let hike = useSelector(getHike(hikeId))
    let reviews = useSelector(state=> state.reviews)
    
    useEffect(()=>{
        dispatch(fetchHike(hikeId))
    }, [dispatch, hikeId])


    if (!hike || !hike.relatedHikes || !reviews){
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

    const isDateLessThanOneWeekAgo = (date) =>{
        const today = new Date();
        const todaysDay = today.getDate();
        const convertedDate = new Date(date)
        const dateDay = convertedDate.getDate();

        if((todaysDay - dateDay) < 7){
            return true
        }

        return false;
    }
    const now = new Date();


    const getAllTagsFromReviews = (reviews)=>{
        const reviewArray = Object.values(reviews)
        let filtered = []
        let splitConditions;
        for(let i=0; i < reviewArray.length; i++){
            splitConditions = reviewArray[i].conditions.split(",")
            if(isDateLessThanOneWeekAgo(reviewArray[i].createdAt)){
                for (let j = 0; j < splitConditions.length; j++) {
                    if (!filtered.includes(splitConditions[j]) && splitConditions[j].length > 2) {
                        filtered.push(splitConditions[j])
                    }
                }
            }
           
        }
        return filtered;
    }

    const scrollToReviewButton = () =>{
        window.scrollTo({top: 900, left: 100, behavior: "smooth"})
    }

    const tags = ["Running", "Hiking", "Bird watching", "Walking", "Forest", "Views", "Wildflowers", "Wildlife"]

    return (
        <>
        
        <div className="whole-page">  
                <div className="hike-show-page-top-banner">
                    <p className='city-state-town'>California {"> "}</p>
                    <p className='city-state-town'>{hike.city +  " > "}</p>
                    <p className='city-state-town'> {hike.parkName ? `${hike.parkName} > ${hike.name}` :  `${hike.name}`}</p>
                </div> 
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
                        <HikeMapWrapper hikes={[hike]} isShow={isShow} disableDefaultUI={true}/>
                        {/* <img src={placeholdermap} alt="map" className="sidebar-map"></img> */}
                    </div>
                    <div className="other-hikes">
                            <h1 className='nearby-trails'>Nearby trails</h1>
                        {getAllRelatedHikes().map((hike, i)=> <HikeShowListItem key={i} hike={hike}/>)}
                    </div>
                </div>
                <div className="tag-container">
                    <div className="all-tags">
                        {tags.map((tag, i)=>{
                            return  <p className='hike-show-page-tags' key={i}>{tag}</p>
                        })}
                     </div>
                </div>

                <div className="conditions-container">
                    <h1 className='conditions-big-title'>Conditions</h1>
                    {getAllTagsFromReviews(reviews).length ? <div className="conditions-inner-container"><h1 className='conditions-title'>Conditions reported in the last 7 days: </h1> <div className="conditions">{getAllTagsFromReviews(reviews).map((condition, i) => <p className='tags' key={i}>{condition}</p>)}</div></div> : <div><h1 className="conditions-title large-conditions-title"> No conditions in reported in the last 7 days </h1> <p className='conditions-title'>Want to report conditions for this trail?<button onClick={scrollToReviewButton} className='scroll-to-write-a-review'>Write a review below</button>to inform other visitors!</p></div>}
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