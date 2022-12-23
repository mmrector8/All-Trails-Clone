import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import *  as NavCSS from './Navigation.css'

const Navigation = () =>{
    const sessionUser = useSelector(state=> state.session.user)

    let sessionLinks;
    if(sessionUser){
        console.log(sessionUser, 'just added this')
        sessionLinks = (<ProfileButton user={sessionUser}/>)
    }else{
        sessionLinks =(
            <>
                <div className='innerLinks'>
                <NavLink to="/login" className='inner'>Log In</NavLink>  
                <NavLink to="/signup" className='inner'>Sign Up</NavLink>
                </div>
            </>
        )
    }
    return (
        <>
            <ul> 
                <div className="links">
                <NavLink to="/">Homepage</NavLink>
                {sessionLinks}
                </div>
            </ul>
        </>
    )

}
export default Navigation;