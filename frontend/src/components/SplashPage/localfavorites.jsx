import { Link } from "react-router-dom";

const LocalFavorites = () =>{
    return (
        <div className='local-favorites'>
            <h1 className="local-favorites-links">Local favorites in the <Link to={'/hikes'} className="local-favorites-links local-fave-link">Bay Area</Link></h1>
            <div className='bay-hikes'>
                <p className='local-bay-hike-images'>Img here</p>
                <p className='local-bay-hike-images'>Img here</p>
                <p className='local-bay-hike-images'>Img here</p>
                <p className='local-bay-hike-images'>Img here</p>
            </div>
        </div>
    )
}
export default LocalFavorites;