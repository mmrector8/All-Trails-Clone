import { Link } from "react-router-dom";

const LocalFavorites = () =>{


    return (
        <div className='local-favorites'>
            <h1 className="local-favorites-links">Local favorites in the <Link to={'/hikes'} onClick={()=>window.scrollTo({ top: 0, left: 0 })} className="local-favorites-links local-fave-link">Bay Area</Link></h1>
            {/* <Carousel itemsToShow={1}>
                <p className='local-bay-hike-images'>Img here</p>
                <p className='local-bay-hike-images'>Img here</p>
                <p className='local-bay-hike-images'>Img here</p>
                <p className='local-bay-hike-images'>Img here</p>
            </Carousel> */}
        </div>
    )
}
export default LocalFavorites;