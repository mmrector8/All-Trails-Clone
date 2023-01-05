import {Link, Redirect, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

const ForPlanet = ()=>{

    const sessionUser = useSelector(state => state.session.user)

    const history = useHistory();

    const handleClick = () =>{
       const path = '/signup'
        history.push(path)
        window.scroll({top:0, left: 0})
    }

    return (
        <>

            <div className='for-the-planet-container'>
                <div className='p-for-planet'>
                    <i className="fa-solid fa-earth-americas"></i>
                    <h1 className='for-planet-section-title'> 1% for the Planet</h1>
                    <p>A portion of every BayAreaTrails membership goes to protecting the wild places we cherish.</p>
                </div>
                <div className='trees'>
                    <i className="fa-solid fa-seedling"></i>
                    <h1 className='for-planet-section-title'> 10,000 trees (and counting)</h1>
                    <p>From our birthday to employee anniversaries, we celebrate by giving to One Tree Planted.</p>
                </div>
                <div className='no-trace'>
                    <i className="fa-solid fa-tree"></i>
                    <h1 className='for-planet-section-title'> No trace on the trail</h1>
                    <p>As a Leave No Trace partner, we’re committed to keeping outdoor spaces clean, safe, and kind.</p>
                </div>
                <div className='give-back-link-container'>
                    {!sessionUser ? <button onClick={handleClick} className="give-back-link">Sign up for BayAreaTrails</button> : <p className="thanks-for-being-member">Thanks for being a member!</p>}
                    
                </div>
            </div>
            
        </>
    )

}
export default ForPlanet;