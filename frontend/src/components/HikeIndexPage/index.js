import { getHikes, fetchHikes } from "../../store/hikes"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import HikeListItem from "./Hike_List_Item"
import walkinggirl from "../../images/walkinggirl.jpg"
import hikersrectangle from "../../images/hikersrectangle.jpg"
import treesrectangle from "../../images/treesrectangle.jpg"
import * as HikeIndexCss from "./HikeIndexPage.css"

const HikeIndexPage = ()=>{
    const dispatch = useDispatch()
    const hikes = useSelector(getHikes)
    
    useEffect(()=>{
        dispatch(fetchHikes())
    }, [dispatch])

    const numOfHikes = hikes.length

    return (
        <>
            <div className="hike-index-page">
            <div className="location-bar">
                <p className="Country">United States of America</p>
                <p className="arrow">{">"}</p>
                <p className="State">California</p>
                <p className="arrow">{">"}</p>
                <p className="State">City</p>
            </div>
            <div className="SF-photos">
                <img src={walkinggirl} className="SF-hike-images"></img>
                <img src={hikersrectangle} className="SF-hike-images"></img>
                <img src={treesrectangle} className="SF-hike-images"></img>
            </div>
            <div className="title-and-description">
            <h1 className="title">San Francisco Hikes</h1>
            <p className="description">Looking for the best hiking trails in San Francisco? Whether you're getting ready to hike, bike, trail run, or explore other outdoor activities, BayAreaTrails has scenic trails in the San Francisco area. Enjoy hand-curated trail maps, along with reviews and photos from nature lovers like you. Check out some trails with historic sights or adventure through the nature areas surrounding San Francisco that are perfect for hikers and outdoor enthusiasts at any skill level.</p>
            <h1 className="map title">GOOGLE MAP WILL GO HERE</h1>
            </div>
                
            <h1 className="trail-list">Top Trails ({numOfHikes})</h1>
            <div className="trails">
            {hikes.map((hike, i) =><HikeListItem key={i} hike={hike}/>)}
            </div>
            </div>
        </>
        
    )
}
export default HikeIndexPage;