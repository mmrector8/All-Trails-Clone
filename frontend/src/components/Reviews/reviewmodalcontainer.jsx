import {useState} from 'react'
import { useSelector } from 'react-redux'
import ReviewModal from './reviewmodal'
import * as reviewmodalcss from "./reviewmodal.css"

const ReviewModalContainer = ({hike, isEdit, review}) =>{
    const [isOpen, setIsOpen] = useState(false)
    const currentUser = useSelector((state)=> state.session.user)

    return (
        <>
            <div className= 'review-button-container'>
                <button className={isEdit ? "edit-review-button": "write-review-button" }onClick={()=> setIsOpen(true)} >{isEdit ? "Edit" : "Write Review"}</button>
            </div>
            <div className= 'write-review-modal'>
               <ReviewModal hike={hike} open={isOpen} review={review} onClose={(() => setIsOpen(false))} />  
                
            </div>
        </>
    )
}
export default ReviewModalContainer;