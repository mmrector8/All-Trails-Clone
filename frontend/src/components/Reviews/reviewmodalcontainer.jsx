import {useState} from 'react'
import ReviewModal from './reviewmodal'

const ReviewModalContainer = () =>{
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            
            <div className= 'review-button-container'>
                <button className="write-review-button" onClick={()=> setIsOpen(true)}>Write Review</button>
            </div>
            <div className= 'write-review-modal'>
                <ReviewModal open={isOpen} onClose={(()=> setIsOpen(false))} />
            </div>
        </>
    )
}
export default ReviewModalContainer;