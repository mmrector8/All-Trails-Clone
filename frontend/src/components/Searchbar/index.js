import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux' 
import {getHikes } from "../../store/hikes.js"
import {getParks} from "../../store/parks.js"
import { Link } from "react-router-dom";
import * as searchbarcss from "./searchbar.css"
import { useHistory } from 'react-router-dom';

const SearchBar = ({setSearchOpen, open}) =>{

    const history = useHistory();
    const [filteredData, setFilteredData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    let hikes = useSelector(getHikes)
    let parks = useSelector(getParks)

    if (!hikes || !parks){
        return null;
    }

    let parksAndHikes = ([parks[0]]).concat([hikes[0]]).concat([parks[1]]).concat(hikes.slice(1, hikes.length)).concat(parks.slice(2, parks.length))
   
     const handleFilter = (e)=>{
            setSearchOpen(true)
            const searchedWord = e.target.value;
            setSearchQuery(searchedWord);
            
         const filterQuery = parksAndHikes.filter((item) => {
                return item.name.toLowerCase().includes(searchedWord.toLowerCase());
            })

            if (searchedWord === "") {
                setFilteredData(parksAndHikes)
            } else {
                setFilteredData(filterQuery);
            }  
        }

     const clearSearchBarFields = ()=>{
        setFilteredData([]);
        setSearchQuery("")
     }

     const handleGreenArrowClick = ()=>{
        if(open){
            const firstItem = filteredData[0];
            return history.push(`/hikes/${firstItem.id}`)
        }
       
     }

     return (
        <div className="search-container">
            <div className="search-input">
                 
                <input type='text' value={searchQuery} placeholder="Search by hike or park name" onChange={handleFilter} onClick={handleFilter} className="search-input-bar"/>
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <button className="go-to-show-page" onClick={handleGreenArrowClick}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
                {open === true &&  (
                 <div className="search-results-container">
                     <div className="options">
                         <p className='searchbar-options'>All</p>
                         {/* <p className='searchbar-options'>Hikes</p>
                         <p className='searchbar-options'>Parks</p> */}
                     </div>
                     {filteredData.length !== 0 ? filteredData.map((item, i)=>{
                        return (
                            <div className='search-results' key={i}>
                                {item.parkId === undefined ? 
                                    <Link to={`parks/${item.id}`} className="search-results-link" onClick={() => window.scrollTo({ top: 0, left: 0 })}> <i className="fa-solid fa-tree searchbar-icon tree-searchbar"></i><p className='searchbar-hike-name searchbar-park-name'>{item.name}</p></Link>
                                    : <Link to={`hikes/${item.id}`} className="search-results-link" onClick={() => window.scrollTo({ top: 0, left: 0 })}><i className="fa-solid fa-location-dot searchbar-icon"></i><div><p className='searchbar-hike-name'>{item.name}</p> <p className="searchbar-park-name" id="searchbar-park-name">{item.parkName}</p></div></Link>
                                }
                               
                            </div>
                        );
                   }) :  <div className='no-search-results'>
                            <p className='searchbar-no-results-message'>Sorry, no results found!</p>
                             <Link to="/hikes" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='no-results-link'><p className='see-bay-area-hikes'>See Bay Area Hikes</p></Link>
                        </div>}
                 </div>
                )}
        </div>

     )

}
export default SearchBar;