import { getHikes } from "../../store/hikes"
import { shallowEqual, useSelector } from "react-redux";
import AdventureAnywhereItem from "./adventureanywhereitem.jsx"
import { useEffect, useMemo } from "react";

const AdventureAnywhere = () =>{
    const hikes = useSelector(getHikes, shallowEqual)

    useEffect(()=>{
        console.log("re-render adventureanywhere")
    })

    if(!hikes){
        return null;
    }

    return(
        <div className='adventure-anywhere-container'>
            <h1 className="adventure-anywhere">Adventure anywhere</h1>
            <p className="parks-worth-look">Trending Trails</p>
            <div className="adventure-parks-list">
                {hikes?.slice(0,8).map((hike, i)=>{
                   return <AdventureAnywhereItem hike={hike} key={i}/>})}
            </div>
        </div>
    )
}

export default AdventureAnywhere;