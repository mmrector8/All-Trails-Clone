import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchFilterListings, getHikes } from "../../store/hikes.js"
import { getParks } from "../../store/parks.js"
import { Link } from "react-router-dom";
import * as searchbarcss from "../Searchbar/searchbar.css"
import { useHistory } from 'react-router-dom';

const Search = ({ setSearchOpen, open }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("")
    let hikes = useSelector(getHikes)
    let parks = useSelector(getParks)

    useEffect(()=>{
        dispatch(fetchSearchFilterListings(searchQuery))
    }, [searchQuery])

    if (!hikes || !parks) {
        return null;
    }

    const handleSearch = (e) => {
        e.preventDefault()
        history.push({
            pathname: '/search',
            state: { searchQuery }
        })
        setSearchQuery('')
    }

    const clearSearchBarFields = () => {
        setSearchQuery("")
    }

    

    return (
        <div className="search-container">
            <div className="search-input">
                <form onSubmit={handleSearch}>
                    <input type='text' value={searchQuery} placeholder="Search by hike or park name" onChange={(e)=> setSearchQuery(e.target.value)} className="search-input-bar" />
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <button className="go-to-show-page"> <i className="fa-solid fa-arrow-right"></i></button>
                </form>
            </div>
            {open && (
                <div className="search-results-container">
                    <div className="options">
                        <p className='searchbar-options'>All</p>
                    </div>
                        <div className='search-results'>
                              <p>hello</p>
                        </div>
                    {/* <div className='no-search-results'>
                        <p className='searchbar-no-results-message'>Sorry, no results found!</p>
                        <Link to="/hikes" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='no-results-link'><p className='see-bay-area-hikes'>See Bay Area Hikes</p></Link>
                    </div> */}
                </div>
            )}
        </div>

    )

}
export default Search;