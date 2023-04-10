import * as mapcss from "./hike-map.css"
import {useMemo} from 'react'
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import treeicon from "../../assets/treeicon.png"
const HikeMapWrapper = ({hikes, isShow, disableDefaultUI}) =>{
    const {isLoaded} =  useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    })
    if (!hikes) {
        return null;
    }
    if(!isLoaded){
        return <div>Loading...</div>
    }
    return (
        <>
            <div className="hike-map-wrapper">
                <HikeMap hikes={hikes} isShow={isShow} disableDefaultUI={disableDefaultUI}/>
            </div>
        </>
    )
}
export default HikeMapWrapper;

export const HikeMap = ({hikes, isShow, disableDefaultUI}) =>{
    const image ={
        url: treeicon,
    }

    const options={
        disableDefaultUI: disableDefaultUI,
        mapTypeId: "terrain",
        zoomControl: true,
        rotateControl: true
    }
    if(!hikes[0]){
        return null;
    }
   const latitude = hikes[0].latitude
   const longitude = hikes[0].longitude
   const center = ({lat: latitude, lng: longitude})
    // const center = useMemo(()=>({lat: latitude, lng: longitude }),[])
    return (
        <>
            <GoogleMap zoom={isShow ? 12 : 10} center={center} mapContainerClassName={isShow ? 'small-map map-container' : 'map-container'} options={options}>
            {hikes?.map((hike, i) => <Marker position={{ lat: hike.latitude, lng: hike.longitude }} icon={image} mapContainerClassName='marker' key={i}/>)} 
        </GoogleMap>
        </>
    )
}