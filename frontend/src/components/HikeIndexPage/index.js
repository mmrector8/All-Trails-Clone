import { getHikes, fetchHikes } from "../../store/hikes"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import HikeListItem from "./Hike_List_Item"
import goldengate from "../../images/goldengate.jpg"
import ggbridge2 from "../../images/ggbridge2.jpg"
import aerialgg from "../../images/aerialgg.jpg"
import * as HikeIndexCss from "./HikeIndexPage.css"

const HikeIndexPage = ()=>{
    const dispatch = useDispatch()
    const hikes = useSelector(getHikes)
    
    useEffect(()=>{
        dispatch(fetchHikes())
    }, [dispatch])

    return (
        <>
            <div className="SF-photos">
                <img src={goldengate} className="SF-hike-images"></img>
                <img src={ggbridge2} className="SF-hike-images"></img>
                <img src={aerialgg} className="SF-hike-images"></img>
            </div>
            <div className="title-and-description">
            <h1 className="title">San Francisco Hikes</h1>
            <p className="description">Looking for the best hiking trails in San Francisco? Whether you're getting ready to hike, bike, trail run, or explore other outdoor activities, BayAreaTrails has scenic trails in the San Francisco area. Enjoy hand-curated trail maps, along with reviews and photos from nature lovers like you. Check out some trails with historic sights or adventure through the nature areas surrounding San Francisco that are perfect for hikers and outdoor enthusiasts at any skill level.</p>
            </div>
            {hikes.map((hike, i) =><HikeListItem key={i} hike={hike}/>)}
        </>
        
    )
}
export default HikeIndexPage;