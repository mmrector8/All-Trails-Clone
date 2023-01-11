import {useHistory } from "react-router-dom";

const AdventureAnywhereItem = ({hike})=>{
    const history = useHistory();

    if(!hike){
        return null;
    }

    const handleClick = () => {
        let path = `/hikes${hike.id}`
        history.push(path)
        window.scrollTo({ top: 0, left: 0 })
    }


    return (
       
            <div className="adventure-parks-list-small-container" onClick={handleClick}>
                <img src={hike.photoUrls[0]} alt="photo of hike" className="small-index-photos-aws" />
                <div className="small-hike-info">
                    <p className='small-hike-name'>{hike.name}</p>
                    <p className="small-miles-and-hours">{hike.duration}{" • "}{hike.estimatedTime}</p>
                </div>
            </div>
    )
}
export default AdventureAnywhereItem;