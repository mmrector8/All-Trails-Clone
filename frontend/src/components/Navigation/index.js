import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import *  as NavCSS from './Navigation.css'
import logo from "../../assets/logo.png"

const Navigation = () =>{
    const sessionUser = useSelector(state=> state.session.user)
    const history = useHistory();

    const goHome = () =>{
        history.push("/")
        window.scrollTo({top: 0})
    }

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
                    <div className='logo-area'>
                        <img src={logo} id="logo" onClick={goHome}></img>
                        <NavLink to="/" id='logo-text'> BayAreaTrails</NavLink>
                    </div>
                {sessionLinks}
                </div>
            </nav>
        </>
    )

}
export default Navigation;