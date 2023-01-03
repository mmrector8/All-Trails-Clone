import {getPark, fetchPark} from "../../store/parks"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import walkinggirl from "../../images/walkinggirl.jpg"
import hikersrectangle from "../../images/hikersrectangle.jpg"
import treesrectangle from "../../images/treesrectangle.jpg"
import ParkListItem from "./ParkListItem"

const ParkShowPage = () =>{
    const {parkId} = useParams();
    const dispatch = useDispatch();
    const park = useSelector(getPark(parkId))

    useEffect(()=>{
        dispatch(fetchPark(parkId))
    }, [dispatch, parkId])

    if (!park || !park.hikes){
        return null;
    } 
    const numOfHikes = park.hikes.length
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
                        <img src={walkinggirl} className="SF-hike-images"></img>
                        <img src={hikersrectangle} className="SF-hike-images"></img>
                        <img src={treesrectangle} className="SF-hike-images"></img>
                    </div>
                    <div className="title-and-description">
                        <h1 className="title">{park.name} Hikes</h1>
                        <p className="description">{park.description}</p>
                        <h1 className="map title">GOOGLE MAP WILL GO HERE</h1>
                    </div>
                    <h1 className="trail-list">Top Trails ({numOfHikes})</h1>
                    <div className="trails">
                        {park.hikes.map((hike, i) => <ParkListItem key={i} hike={hike} parkName={park.name}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ParkShowPage;