import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { clearSearchHikes, fetchSearchFilterListings, getSearchHikes } from "../../store/search.js"
import { getParks } from "../../store/parks.js"
import { Link, useLocation } from "react-router-dom";
import useDebounce from "../../hooks/debounce";
import * as searchbarcss from "../Searchbar/searchbar.css"
import { useHistory } from 'react-router-dom';

const Search = ({ setSearchOpen, open }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("")
    const [focused, setFocused] = useState(false)
    const location = useLocation();
    let hikes = useSelector(getSearchHikes)
    let parks = useSelector(getParks)

    const debounced = useDebounce(searchQuery, 500);

    useEffect(() => {
        setSearchQuery("");
    }, [location.pathname]);

    useEffect(()=>{
        if (debounced !== ""){
            dispatch(fetchSearchFilterListings(searchQuery))
        }
        return () => dispatch(clearSearchHikes())
    }, [debounced])

    if (!hikes || !parks) {
        return null;
    }

    const handleSearch = (e) => {
        e.preventDefault()
        // setSearchOpen(true)
        history.push({
            pathname: '/search',
            state: { searchQuery }
        })
        // setSearchQuery('')
    }

    const searchBar = (e) => {
        setSearchQuery(e.target.value);
        setSearchOpen(true)
    }


    return (
        <div className="search-container">
            <div className="search-input">
                <form onSubmit={handleSearch} onFocus={()=> setFocused(true)}>
                    <input type='text' value={searchQuery} placeholder="Search by hike name" onChange={searchBar}  className="search-input-bar" />
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <button className="go-to-show-page"> <i className="fa-solid fa-arrow-right"></i></button>
                </form>
            </div>
            {focused && open && (
                <div className="search-results-container">
                    <div className="options">
                        <p className='searchbar-options'> Hikes and Parks</p>
                    </div>
                    {hikes.length && searchQuery !== "" ? hikes?.map((item, i) => {
                        return (
                            <div className='search-results' key={i} >
                                {item.parkId === undefined ?
                                    <Link to={`parks/${item.id}`} className="search-results-link" onClick={() => window.scrollTo({ top: 0, left: 0 })}> <i className="fa-solid fa-tree searchbar-icon tree-searchbar"></i><p className='searchbar-hike-name searchbar-park-name'>{item.name}</p></Link>
                                    : <Link to={`hikes/${item.id}`} className="search-results-link" onClick={() => window.scrollTo({ top: 0, left: 0 })}><i className="fa-solid fa-location-dot searchbar-icon"></i><div><p className='searchbar-hike-name'>{item.name}</p></div></Link>
                                }
                         </div>
                        );
                    }) : <div className='no-search-results'>
                        <p className='searchbar-no-results-message'>Sorry, no results found!</p>
                        <Link to="/hikes" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='no-results-link'><p className='see-bay-area-hikes'>See Bay Area Hikes</p></Link>
                    </div>}
                </div>
            )}
        </div>

    )

}
export default Search;