import { Link, useHistory } from "react-router-dom";
import Carousel from 'react-elastic-carousel'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHikes, fetchHikes } from "../../store/hikes"
import HikeShowListItem from "../HikeShowPage/OtherHikesItem";

const LocalFavorites = () =>{
    const dispatch = useDispatch();
    const hikes = useSelector(getHikes)
    const history = useHistory();

    useEffect(() => {
      dispatch(fetchHikes())
    }, [dispatch])

    if(!hikes){
        return null;
    } 

    const responsive = {
        XLDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 
        },
        tablet: {
            breakpoint: { max: 1024, min: 704 },
            items: 3,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2
        }
    };

    const handleClick = ()=>{
        let path = `/hikes`
        history.push(path)
        window.scrollTo({ top: 0, left: 0 })
    }

    return (
        <div className='local-favorites'>
            <h1 className="local-favorites-links">Local favorites in the <Link to={'/hikes'} onClick={()=>window.scrollTo({ top: 0, left: 0 })} className="local-favorites-links local-fave-link">Bay Area</Link></h1>
            <Carousel itemsToShow={4} breakPoints={responsive}>
                {hikes.map((hike, i)=> <HikeShowListItem key={i} hike={hike}/>)}
                <div className='local-favorites-show-more' onClick={handleClick}>
                    <p className="carousel-show-more-link">Show more</p>
                </div>
             </Carousel>
        </div>
    )
}
export default LocalFavorites;