import { useEffect} from "react"
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
                <div className='running local-bay-activity-images'><p className='running-text'>Running</p></div>
                <div className='kid-hiking local-bay-activity-images'><p className='running-text'>Hiking</p></div>
                <div className='puppy local-bay-activity-images'><p className='running-text'>Dog friendly</p></div>
                <div className='biking local-bay-activity-images'><p className='running-text'>Biking</p></div>
                <div className='wheelchair local-bay-activity-images'><p className='running-text'>Wheelchair friendly</p></div>
                <div className='road-biking local-bay-activity-images'><p className='running-text'>Road biking</p></div>
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