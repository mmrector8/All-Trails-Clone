import { useState, useEffect } from "react";
import Search from "../Search";
import { Link, useHistory } from "react-router-dom"
import * as Splashcss from "./splashpage.css"
import julia from "../../assets/julia.jpg"
import alexbackground from "../../assets/alexbackground.png"
import splashresized from "../../assets/splashresized.jpg"
import singlesplash from "../../assets/singlesplash.jpg"
import BackgroundImage from "./BackgroundImage";

const SearchBarContainer = ({ currentUser})=> {
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(()=> {
        console.log('re-rendering search bar container')
    })


    return (
        <div className="searchbar-container" >
            <BackgroundImage />
            <div className="splash-search-bar">

                <h1 className='splash-title'>{currentUser ? `Ready to do this, ${currentUser.fname}?` : "Find your outdoors"}</h1>
                <Search setSearchOpen={setSearchOpen} open={searchOpen} />
                <Link to={'/hikes'} onClick={() => window.scrollTo({ top: 0, left: 0 })} className='explore-link'>Explore trails in the Bay</Link>
            </div>
        </div>
    )
}
export default SearchBarContainer;