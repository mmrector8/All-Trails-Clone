import {Link, useHistory} from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchHikes } from "../../store/hikes";
import { useDispatch, useSelector } from "react-redux";
import * as Splashcss from "./splashpage.css"
import Activities from "./activities";
import InspiringImage from "./inspiringimage";
import ReasonsToSignUp from "./reasonssignup";
import AdventureAnywhere from "./adventureanywhere";
import ForPlanet from "./planet";
import SearchBarContainer from "./SearchBarContainer";
import LocalFavorites from "./localfavorites";


const SplashPage = () => {
    const currentUser = useSelector((state)=> state.session.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHikes());
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