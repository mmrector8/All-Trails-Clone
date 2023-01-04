import walkinggirl from "../../assets/walkinggirl.jpg"
import hikersrectangle from "../../assets/hikersrectangle.jpg"
import treesrectangle from "../../assets/treesrectangle.jpg"
// import alex from "../../images/alex.png"
import julia from "../../assets/julia.jpg"
import splashresized from "../../assets/splashresized.jpg"
import { useHistory } from "react-router-dom"

const Activities =()=>{
    const history= useHistory();

    const handleClick = () => {
        let path = `/signup`
        history.push(path)
        window.scrollTo({ top: 0, left: 0 })
    }

    return(
        <div className='splash-container-2'>
            <div className='activity-images'>
                <img src={walkinggirl} className="local-bay-activity-images"></img>
                <img src={hikersrectangle} className="local-bay-activity-images"></img>
                <img src={treesrectangle} className="local-bay-activity-images"></img>
                <img src={walkinggirl} className="local-bay-activity-images"></img>
                <img src={hikersrectangle} className="local-bay-activity-images"></img>
                <img src={treesrectangle} className="local-bay-activity-images"></img>
            </div>
            <div className="splash-container-2-description">
                <h1 className='trails-that-fit-nature'>Trails that fit your nature</h1>
                <p className='pushing-limits'>Whether you're pushing your limits or pushing a stroller, we've got you covered</p>
                <button onClick={handleClick} className='sign-up-redirect-button'>Sign Up</button>
            </div>
        </div>
    )
}
export default Activities;