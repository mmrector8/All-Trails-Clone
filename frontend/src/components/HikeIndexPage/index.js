import { getHikes, fetchHikes } from "../../store/hikes"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import HikeListItem from "./Hike_List_Item"
import walkinggirl from "../../assets/walkinggirl.jpg"
import hikersrectangle from "../../assets/hikersrectangle.jpg"
import treesrectangle from "../../assets/treesrectangle.jpg"
import * as HikeIndexCss from "./HikeIndexPage.css"
import HikeMapWrapper from "../HikeMap"

const HikeIndexPage = ()=>{
    const dispatch = useDispatch()
    const hikes = useSelector(getHikes)
    
    useEffect(()=>{
        dispatch(fetchHikes())
    }, [dispatch])

    const numOfHikes = hikes.length

    if (!hikes){
        return null;
    }

    return (
        <>
            <div className="hike-index-page">
                <div className="all-items">
                    <div className="location-bar">
                        <p className="Country">United States of America</p>
                        <p className="arrow">{">"}</p>
                        <p className="State">California</p>
                        <p className="arrow">{">"}</p>
                        <p className="State">City</p>
                    </div>
                    <div className="SF-photos">
                        <img src={walkinggirl} alt="Person hiking"className="SF-hike-images"></img>
                        <img src={hikersrectangle} className="SF-hike-images" alt="hikers"></img>
                        <img src={treesrectangle} className="SF-hike-images" alt="tree-grove"></img>
                    </div>
                    <div className="title-and-description">
                        <h1 className="title">Bay Area Hikes</h1>
                        <p className="description">Looking for the best hiking trails in San Francisco? Whether you're getting ready to hike, bike, trail run, or explore other outdoor activities, BayAreaTrails has scenic trails in the San Francisco area. Enjoy hand-curated trail maps, along with reviews and photos from nature lovers like you. Check out some trails with historic sights or adventure through the nature areas surrounding San Francisco that are perfect for hikers and outdoor enthusiasts at any skill level.</p>
                        <HikeMapWrapper hikes={hikes}/>
                     </div>
                    
                <h1 className="trail-list">Top Trails ({numOfHikes})</h1>
                    <div className="trails">
                    {hikes.map((hike, i) =><HikeListItem key={i} hike={hike}/>)}
                    </div>
                </div>
            </div>
        </>
        
    )
}
export default HikeIndexPage;