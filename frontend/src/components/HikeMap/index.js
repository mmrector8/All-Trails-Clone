import * as mapcss from "./hike-map.css"
import {useMemo} from 'react'
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import treeicon from "../../assets/treeicon.png"
const HikeMapWrapper = ({hikes}) =>{
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
                <HikeMap hikes={hikes}/>
            </div>
        </>
    )
}
export default HikeMapWrapper;

export const HikeMap = ({hikes}) =>{
    const image ={
        url: treeicon,
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
        <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
            {hikes?.map((hike) => <Marker position={{ lat: hike.latitude, lng: hike.longitude }} icon={image} mapContainerClassName='marker'/>)} 
        </GoogleMap>
        </>
    )
}