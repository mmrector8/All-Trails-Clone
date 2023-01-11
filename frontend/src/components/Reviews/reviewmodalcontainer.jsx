import {useState} from 'react'
import { useSelector } from 'react-redux'
import ReviewModal from './reviewmodal'
import LoginFormPage from '../LoginFormPage'
import * as reviewmodalcss from "./reviewmodal.css"

const ReviewModalContainer = ({hike, isEdit, review}) =>{
    const [isOpen, setIsOpen] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const currentUser = useSelector((state)=> state.session.user)

    const checkSessionUser = ()=>{
        if(currentUser){
            setIsOpen(true)
            return;
        }else{
           setLoginModal(true)
           setIsOpen(false)
        }
    }

    const closeModal = () =>{
        setLoginModal(false)
    }

    return (
        <>
            <div className= 'review-button-container'>
                <button className={isEdit ? "edit-review-button": "write-review-button" }onClick={checkSessionUser} >{isEdit ? "Edit" : "Write Review"}</button>
            </div>
            <div className= 'write-review-modal'>
                {loginModal ? <><div className='overlay' onClick={closeModal}></div> <LoginFormPage modal={loginModal} /> </> : <ReviewModal hike={hike} open={isOpen} review={review} onClose={(() => setIsOpen(false))} />}
            </div>
        </>
    )
}
export default ReviewModalContainer;