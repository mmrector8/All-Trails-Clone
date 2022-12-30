import { getHikes, fetchHikes } from "../../store/hikes"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import HikeListItem from "./Hike_List_Item"

const HikeIndexPage = ()=>{
    const dispatch = useDispatch()
    const hikes = useSelector(getHikes)
    
    useEffect(()=>{
        dispatch(fetchHikes())
    }, [dispatch])

    return (
        <>
            <h1>San Francisco Hikes</h1>
            {hikes.map((hike, i) =><HikeListItem key={i} hike={hike}/>)}
        </>
        
    )
}
export default HikeIndexPage;