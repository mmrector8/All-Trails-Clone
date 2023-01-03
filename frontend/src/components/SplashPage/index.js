import {Link, useHistory} from "react-router-dom"

const SplashPage = ()=>{
    const history = useHistory();
    const handleClick =()=>{
        let path = `/signup`
        history.push(path)
        window.scrollTo({ top: 0, left: 0 })
    }
    return (
        <>
            <div className="searchbar-container">
                <div className="splash-search-bar">
                    <h1>Find your outdoors</h1>
                    <p>Search by park or trail name</p>
                    <Link to={'/hikes'}>Explore trails in the Bay</Link>
                </div>
            </div>
            <div className='local-favorites'>
                <h1>Local favorites in the <Link to={'/hikes'}>Bay Area</Link></h1>
                <div className='bay-hikes'>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                </div>
            </div>
            <div className='splash-container-2'>
                <div className='activity-images'>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                    <p className='local-bay-hike-images'>Img here</p>
                </div>
                <div className="splash-container-2-description">
                    <h1>Trails that fit your nature</h1>
                    <p>Whether you're pushing your limits or pushing a stroller, we've got you covered</p>
                    <button onClick={handleClick}>Sign Up</button>
                </div>
                <div className='inspiring-image'>
                    <h1>Explore with confidence</h1>
                    <p>Inspiration and guidance for wherever your trail may lead</p>
                </div>
                <div className='reasons-to-sign-up'>
                    <div className='curated-trails'>
                        <h1>350k+</h1>
                        <h3>curated trails</h3>
                        <p>Discover unexpected gems, even in your own backyard.</p>
                    </div>
                    <div className='fellow-explorers'>
                        <h1>40 mil</h1>
                        <h3>fellow explorers</h3>
                        <p>Share your adventures and learn from our global community.</p>
                    </div>
                    <div className='logged-miles'>
                        <h1>600+ mil</h1>
                        <h3>logged miles</h3>
                        <p>Navigate your way and keep a record of all your travels.</p>
                    </div>
                    <div className='adventure-anywhere'>
                        <h1>Adventure anywhere</h1>
                        <p>Parks worth a look</p>
                        <div className="adventure-parks-list">
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                            <p className='park-image'>parkImg</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SplashPage;