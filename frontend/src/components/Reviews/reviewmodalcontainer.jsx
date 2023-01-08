import {useState} from 'react'
import ReviewModal from './reviewmodal'

const ReviewModalContainer = ({hike, isEdit, review}) =>{
    console.log(review)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className= 'review-button-container'>
                <button className="write-review-button" onClick={()=> setIsOpen(true)}>{isEdit ? "Edit Review" : "Write Review"}</button>
            </div>
            <div className= 'write-review-modal'>
                <ReviewModal hike={hike} open={isOpen} review={review} onClose={(()=> setIsOpen(false))} />
            </div>
        </>
    )
}
export default ReviewModalContainer;