import { useEffect, useMemo } from 'react'
import { getHikes, fetchHikes } from "../../store/hikes"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import treeicon from "../../assets/treeicon.png"
import * as hikebigmap from "./hikebigmap.css"

const HikeBigMapWrapper = ({ hike }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    })
    
    if (!isLoaded) {
        return <div>Loading...</div>
    }
    if (!hike) {
        return null;
    }
    return (
        <>
            <div className="hike-big-map-wrapper">
                <HikeBigMap hike={hike} />
            </div>
        </>
    )
}
export default HikeBigMapWrapper;

export const HikeBigMap = ({ hike }) => {
    const dispatch = useDispatch();
    const hikes = useSelector(getHikes)

    useEffect(()=>{
        dispatch(fetchHikes())
    }, [dispatch])

    const image = {
        url: treeicon,
    }
    if (!hike || !hikes) {
        return null;
    }
    const latitude = hikes[0].latitude
    const longitude = hikes[0].longitude
    const center = ({ lat: latitude, lng: longitude })
    // const center = useMemo(()=>({lat: latitude, lng: longitude }),[])
    return (
        <>
            <GoogleMap zoom={11} center={center} mapContainerClassName='big-map-container'>
                {hikes?.map((hike) => <Marker position={{ lat: hike.latitude, lng: hike.longitude }} icon={image} mapContainerClassName='marker' />)}
            </GoogleMap>
        </>
    )
}