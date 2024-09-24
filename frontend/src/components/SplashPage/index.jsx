import {Link, useHistory} from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchHikes } from "../../store/hikes";
import { useDispatch, useSelector } from "react-redux";
import * as Splashcss from "./splashpage.css"
import Activities from "./Activities";
import InspiringImage from "./InspiringImage";
import ReasonsToSignUp from "./ReasonsSignUp";
import AdventureAnywhere from "./AdventureAnywhere";
import ForPlanet from "./Planet";
import SearchBarContainer from "./SearchBarContainer";
import LocalFavorites from "./localfavorites";


const SplashPage = ()=>{
    const currentUser = useSelector((state)=> state.session.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHikes())
    }, [dispatch])

    return (
        <div className='splash-page'>
            <SearchBarContainer currentUser={currentUser}/>
            <LocalFavorites />
            <Activities />
            <InspiringImage /> 
            <ReasonsToSignUp />
            <AdventureAnywhere />
            <ForPlanet currentUser={currentUser}/>
        </div>
    )
}
export default SplashPage;