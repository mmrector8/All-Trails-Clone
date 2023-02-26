import { Link, NavLink } from "react-router-dom";
import * as footercss from "./footer.css"
import logo from "../../assets/logo.png"
const Footer = () =>{
    return (
        <>
            <div className='footer'>
                <NavLink to="/" className='footer-logo' onClick={()=>window.scroll({top:0, left:0})}><img src={logo} id="logo-session-sign-up"></img>  BayAreaTrails</NavLink>
                
                <div className='footer-item-container'>
                    <div className='footer-sections'>
                        <p className="footer-first-section"><i className="fa-solid fa-earth-americas"></i>An app for the outdoors</p>
                        <p className="footer-first-section"><i className="fa-solid fa-earth-americas"></i>Members for the planet</p>
                        <p className="footer-first-section"><i className="fa-solid fa-earth-americas"></i>Connect with yourself</p>
                    </div>
                    <div className="morgan-links-container">
                        <p className="thanks">Thanks for visiting!</p>
                        <p className="check-it-out">Check out my GitHub and LinkedIn!</p>
                        <Link to={{ pathname: "https://github.com/mmrector8" }} target="_blank" className="morgan-links"> <i className="fa-brands fa-github icon-large morgan-link-icon"></i>Github</Link>
                        <Link to={{ pathname: "https://www.linkedin.com/in/morgan-marie-rector/" }} target="_blank" className="morgan-links"> <i className="fa-brands fa-linkedin icon-large morgan-link-icon"></i>LinkedIn</Link>
                    </div>
                </div>
                <p className='copywright'>Made by Morgan Rector</p>
            </div>
        </>
    )
}
export default Footer;