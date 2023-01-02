import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import * as ProfileButtonCSS from './ProfileButton.css'

const ProfileButton = ({user}) => {
    const dispatch = useDispatch()
    const[showMenu, setShowMenu] = useState(false)

    const openMenu = ()=>{
        if (showMenu) return;
        setShowMenu(true)
    }

    useEffect(()=>{
        if(!showMenu) return;

        const closeMenu = () =>{
            setShowMenu(false)
        }
        // document.addEventListener('mouseout', closeMenu)
        // return ()=> document.removeEventListener('mouseout', closeMenu)
    }, [showMenu])
    
    const logout = (e)=> {
        e.preventDefault();
        dispatch(sessionActions.logout())
    }

    //    return (
    //     <>
    //         <div className='dropdown-menu' onMouseOver={openMenu} onMouseLeave={(e) => setShowMenu(false)}>
    //             <button className='dropdown-button'>
    //                 <i className="fa-solid fa-tree dropdown-icon" onMouseOver={((e) => setShowMenu(true))}></i>
    //             </button>
    //             {showMenu && (
    //                    <ul className='dropdown dropdown-menu' onMouseOver={openMenu}>
    //                     <li className='nav-item'>{user.fname}'s Profile</li>
    //                     <li className='nav-item'>Reviews</li>
    //                     <li><button onClick={logout} className=' nav-item logout-button'>Logout</button></li>
    //                 </ul>
    //             )}
    //         </div>
    //     </>
    // )
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