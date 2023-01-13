import { Link, useHistory } from "react-router-dom";
import Carousel from 'react-elastic-carousel'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getHikes, fetchHikes } from "../../store/hikes"
import HikeShowListItem from "../HikeShowPage/OtherHikesItem";

const LocalFavorites = () =>{
    const hikes = useSelector(getHikes)
    const history = useHistory();

    if(!hikes){
        return null;
    } 

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 600, itemsToShow: 2 },
        { width: 860, itemsToShow: 3 },
        { width: 1120, itemsToShow: 4 }
    ];

    const handleClick = ()=>{
        let path = `/hikes`
        history.push(path)
        window.scrollTo({ top: 0, left: 0 })
    }

    const filteredLocalFavorites = () =>{
        let filtered = []
        for(let i=0; i < hikes.length; i++){
            if(i % 3 === 0){
                filtered.push(hikes[i])
            }
        }
        return filtered;
    }

    return (
        <div className='local-favorites'>
            <h1 className="local-favorites-links">Local favorites in the <Link to={'/hikes'} onClick={()=>window.scrollTo({ top: 0, left: 0 })} className="local-fave-link">Bay Area</Link></h1>
            <Carousel breakPoints={breakPoints} enableMouseSwipe={true} itemsToScroll={3} outerSpacing={0}>
                {filteredLocalFavorites().map((hike, i)=> <HikeShowListItem key={i} hike={hike}/>)}
                <div className='local-favorites-show-more' onClick={handleClick}>
                    <p className="carousel-show-more-link">Show more</p>
                </div>
             </Carousel>
        </div>
    )
}
export default LocalFavorites;