import { Link, NavLink } from "react-router-dom";
import * as footercss from "./footer.css"
const Footer = () =>{
    return (
        <>
            <div className='footer'>
                <NavLink to="/" className='footer-logo' onClick={()=>window.scroll({top:0, left:0})}><i className="fa-solid fa-mountain-city footer-icon"></i>BayAreaTrails</NavLink>
                
                <div className='footer-item-container'>
                    <div className='footer-sections'>
                        <p className="footer-first-section">An app for the outdoors</p>
                        <p className="footer-first-section">Members for the planet</p>
                        <p className="footer-first-section">Connect with yourself</p>
                    </div>
                    <div className="morgan-links-container">
                        <p>About the creator</p>
                        <Link className="morgan-links">Github</Link>
                        <Link className="morgan-links">LinkedIn</Link>
                    </div>
                </div>
                <p className='copywright'>Made by Morgan Rector</p>
            </div>
        </>
    )
}
export default Footer;