import * as reviewmodalcss from "./reviewmodal.css"

const ReviewModal = ({open, onClose}) =>{
    if (!open){
        return null;
    }

    return (
        <>
            <div className="overlay"></div>
            <div className='modal-content'>
                <button onClick={onClose}>Close Modal</button>
                {/* {children} */}
                <p>This is the review modal</p>
            </div>
        </>
    )
}
export default ReviewModal;