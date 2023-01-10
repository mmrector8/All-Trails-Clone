import {Link, useHistory} from "react-router-dom"
import { useEffect, useState } from "react"
import * as Splashcss from "./splashpage.css"
import LocalFavorites from "./localfavorites";
import Activities from "./activities";
import InspiringImage from "./inspiringimage";
import julia from "../../assets/julia.jpg"
import alexbackground from "../../assets/alexbackground.png"
import splashresized from "../../assets/splashresized.jpg"
import ReasonsToSignUp from "./reasonssignup.jsx";
import AdventureAnywhere from "./adventureanywhere";
import ForPlanet from "./planet";
import SearchBar from "../Searchbar";


const SplashPage = ()=>{
    const [currentImgIdx, setCurrentImgIdx] = useState(0)
    const[searchOpen, setSearchOpen] = useState(false);

    const images = [
        julia,
        splashresized,
        alexbackground
    ]

    useEffect(()=>{
        const backgroundInterval = setInterval(()=>{
            if (currentImgIdx < images.length - 1) {
                setCurrentImgIdx(currentImgIdx + 1)
            } else {
                setCurrentImgIdx(0)
            }
        }, 3000) 
        return ()=> clearInterval(backgroundInterval)
    }, [currentImgIdx])
    

    const handleClickAway =(e)=>{
        e.preventDefault();
        if(searchOpen){
            setSearchOpen(false)
        }
    }

    return (
        <div onClick={handleClickAway}>
            <div className="searchbar-container" >
                <img src={images[currentImgIdx]} id="background-image"></img>
                <div className="splash-search-bar">
                    
                    <h1 className='splash-title'>Find your outdoors</h1>
                    <SearchBar setSearchOpen={setSearchOpen} open={searchOpen}/>
                    <Link to={'/hikes'} onClick={()=>window.scrollTo({ top: 0, left: 0 })}className='explore-link'>Explore trails in the Bay</Link>
                </div>    
            </div>
            <LocalFavorites />
            <Activities />
            <InspiringImage /> 
            <ReasonsToSignUp />
            <AdventureAnywhere />
            <ForPlanet />
        </div>
    )
}
export default SplashPage;