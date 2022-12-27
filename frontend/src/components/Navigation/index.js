import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import *  as NavCSS from './Navigation.css'

const Navigation = () =>{
    const sessionUser = useSelector(state=> state.session.user)

    let sessionLinks;
    if(sessionUser){
        sessionLinks = (<ProfileButton user={sessionUser}/>)
    }else{
        sessionLinks =(
            <>
                <div className='innerLinks'>
                <NavLink to="/signup" className='inner sign-up'>Sign Up</NavLink>
                <NavLink to="/login" className='inner log-in'>Log In</NavLink> 
                </div>
            </>
        )
    }
    return (
        <>
            <nav> 
                <div className="links">
                    <NavLink to="/" id='logo-text'><i className="fa-solid fa-mountain-city" id='logo'></i>SFTrails</NavLink>
                {sessionLinks}
                </div>
            </nav>
        </>
    )

}
export default Navigation;