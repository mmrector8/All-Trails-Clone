import {Link, useHistory} from "react-router-dom"
import { useEffect, useState } from "react"
import * as Splashcss from "./splashpage.css"
import walkinggirl from "../../images/walkinggirl.jpg"
import hikersrectangle from "../../images/hikersrectangle.jpg"
import treesrectangle from "../../images/treesrectangle.jpg"
// import alex from "../../images/alex.png"
import julia from "../../images/julia.jpg"
import splashresized from "../../images/splashresized.jpg"

const SplashPage = ()=>{
    const [currentImgIdx, setCurrentImgIdx] = useState(0)
    const history = useHistory();

    const handleClick =()=>{
        let path = `/signup`
        history.push(path)
        window.scrollTo({ top: 0, left: 0 })
    }

    const images = [
        splashresized,
        julia
    ]

    useEffect(()=>{
        const backgroundInterval = setInterval(()=>{
            if (currentImgIdx < images.length - 1) {
                setCurrentImgIdx(currentImgIdx + 1)
            } else {
                setCurrentImgIdx(0)
            }
        }, 5000) 
        return ()=> clearInterval(backgroundInterval)
    }, [currentImgIdx])
    

    return (
        <>
            <div className="searchbar-container" >
                <img src={images[currentImgIdx]} id="background-image"></img>
                <div className="splash-search-bar">
                    
                    <h1 className='splash-title'>Find your outdoors</h1>
                    <div className='search-bar'>
                        <p className='search-bar-text'>Search by park or trail name</p>
                    </div>
                    <Link to={'/hikes'} className='explore-link'>Explore trails in the Bay</Link>
                </div>
                
            </div>
            <div className='local-favorites'>
                <h1 className="local-favorites-links">Local favorites in the <Link to={'/hikes'} className="local-favorites-links local-fave-link">Bay Area</Link></h1>
                <div className='bay-hikes'>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                </div>
            </div>
            <div className='splash-container-2'>
                <div className='activity-images'>
                    <img src={walkinggirl} className="local-bay-activity-images"></img>
                    <img src={hikersrectangle} className="local-bay-activity-images"></img>
                    <img src={treesrectangle} className="local-bay-activity-images"></img>
                    <img src={walkinggirl} className="local-bay-activity-images"></img>
                    <img src={hikersrectangle} className="local-bay-activity-images"></img>
                    <img src={treesrectangle} className="local-bay-activity-images"></img>
                </div>
                <div className="splash-container-2-description">
                    <h1 className='trails-that-fit-nature'>Trails that fit your nature</h1>
                    <p className='pushing-limits'>Whether you're pushing your limits or pushing a stroller, we've got you covered</p>
                    <button onClick={handleClick} className='sign-up-redirect-button'>Sign Up</button>
                </div>
            </div>
                <div className='inspiring-image'>
                    <h1 className='inspiring-image-title'>Explore with confidence</h1>
                    <p className='inspiring-image-description'>Inspiration and guidance for wherever your trail may lead.</p>
                </div>
            
                <div className='reasons-to-sign-up'>
                    <div className='curated-trails'>
                        <h1 className='large-reasons'>350k+</h1>
                        <h3 className='medium-reasons'>curated trails</h3>
                        <p className='small-reasons'>Discover unexpected gems, even in your own backyard.</p>
                    </div>
                    <div className='fellow-explorers'>
                        <h1 className='large-reasons'>40 mil</h1>
                        <h3 className='medium-reasons'>fellow explorers</h3>
                        <p className="small-reasons">Share your adventures and learn from our global community.</p>
                    </div>
                    <div className='logged-miles'>
                        <h1 className='large-reasons'>600+ mil</h1>
                        <h3 className='medium-reasons'>logged miles</h3>
                        <p className="small-reasons">Navigate your way and keep a record of all your travels.</p>
                    </div>
                </div>
                    <div className='adventure-anywhere-container'>
                        <h1 className="adventure-anywhere">Adventure anywhere</h1>
                        <p className="parks-worth-look">Trending Trails</p>
                        <div className="adventure-parks-list">
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            {/* <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p> */}
                        </div>
                    </div>
               
        </>
    )
}
export default SplashPage;