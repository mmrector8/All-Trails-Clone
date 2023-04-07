import { useState, useEffect } from "react";
import Search from "../Search";
import { Link, useHistory } from "react-router-dom"
import * as Splashcss from "./splashpage.css"
import julia from "../../assets/julia.jpg"
import alexbackground from "../../assets/alexbackground.png"
import splashresized from "../../assets/splashresized.jpg"
import singlesplash from "../../assets/singlesplash.jpg"

const SearchBarContainer = ({searchOpen, setSearchOpen, currentUser,})=> {
    const [currentImgIdx, setCurrentImgIdx] = useState(0)


    const images = [
        julia,
        splashresized,
        alexbackground
    ]

    const smallerImages = [
        singlesplash,
        splashresized,
        singlesplash
    ]

    useEffect(() => {
        const backgroundInterval = setInterval(() => {
            if (currentImgIdx < images.length - 1) {
                setCurrentImgIdx(currentImgIdx + 1)
            } else {
                setCurrentImgIdx(0)
            }
        }, 3000)
        return () => clearInterval(backgroundInterval)
    }, [currentImgIdx])

    return (
        <div className="searchbar-container" >
            <img src={images[currentImgIdx]} id="background-image"></img>
            <img src={smallerImages[currentImgIdx]} id="small-background-image"></img>
            <div className="splash-search-bar">

                <h1 className='splash-title'>{currentUser ? `Ready to do this, ${currentUser.fname}?` : "Find your outdoors"}</h1>
                {/* <SearchBar setSearchOpen={setSearchOpen} open={searchOpen}/> */}
                <Search setSearchOpen={setSearchOpen} open={searchOpen} />
                <Link to={'/hikes'} onClick={() => window.scrollTo({ top: 0, left: 0 })} className='explore-link'>Explore trails in the Bay</Link>
            </div>
        </div>
    )
}
export default SearchBarContainer;