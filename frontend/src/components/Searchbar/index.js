import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux' 
import {getHikes } from "../../store/hikes.js"
import { Link } from "react-router-dom";
import * as searchbarcss from "./searchbar.css"
import { useHistory } from 'react-router-dom';

const SearchBar = ({setSearchOpen, open}) =>{

    const history = useHistory();
    const [filteredData, setFilteredData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    let hikes = useSelector(getHikes)

    if (!hikes){
        return null;
    }

     const handleFilter = (e)=>{
            setSearchOpen(true)
            const searchedWord = e.target.value;
            setSearchQuery(searchedWord);
            
            const filterQuery = hikes.filter((hike) => {
                return hike.name.toLowerCase().includes(searchedWord.toLowerCase());
            })

            if (searchedWord === "") {
                setFilteredData(hikes)
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
                {filteredData.length !== 0 && open === true &&  (
                 <div className="search-results-container">
                     <div className="options">
                         <p className='searchbar-options'>All</p>
                         <p className='searchbar-options'>Hikes</p>
                         <p className='searchbar-options'>Parks</p>
                     </div>
                    {filteredData.map((hike, i)=>{
                        return (
                            <div className='search-results' key={i}>
                                <Link to={`hikes/${hike.id}`} className="search-results-link"><p className='searchbar-hike-name'>{hike.name}</p> <p className="searchbar-park-name" id="searchbar-park-name">{hike.parkName}</p></Link>
                            </div>
                        );
                   })}
                 </div>
                )}
        </div>

     )

}
export default SearchBar;