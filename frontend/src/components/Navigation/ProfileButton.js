import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as sessionActions from '../../store/session'
import * as ProfileButtonCSS from './ProfileButton.css'

const ProfileButton = ({user}) => {
    const dispatch = useDispatch()
    const[showMenu, setShowMenu] = useState(false)
    const history = useHistory();

    const openMenu = ()=>{
        if (showMenu) return;
        setShowMenu(true)
    }

    useEffect(()=>{
        if(!showMenu) return;

        const closeMenu = () =>{
            setShowMenu(false)
        }
    }, [showMenu])
    
    const logout = (e)=> {
        e.preventDefault();
        dispatch(sessionActions.logout())
        history.push("/")
    }
    return (
        <>
            <div className='dropdown-menu' onMouseOver={((e) => setShowMenu(true))} onMouseLeave={(e) => setShowMenu(false)}>
                <button className='dropdown-button' onMouseOver={openMenu}>
                    <i className="fa-solid fa-tree dropdown-icon" ></i>
                </button>
                {showMenu && (
                    <ul className='dropdown' onMouseOver={openMenu} onMouseLeave={(e) => setShowMenu(false)}>
                        <li className='nav-item'>{user.fname}'s Profile</li>
                        <li className='nav-item'>Reviews</li>
                        <li><button onClick={logout} className=' nav-item logout-button'>Logout</button></li>
                    </ul>
                )}
            </div>
        </>
    )
}
export default ProfileButton;