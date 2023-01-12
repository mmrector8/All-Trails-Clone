import * as reviewmodalcss from "./reviewmodal.css"
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createReview, getReview, fetchReview, updateReview } from "../../store/reviews";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";

const ReviewModal = ({open, setIsOpen, hike, review}) =>{
    const user = useSelector((state)=> state.session.user)
    const dispatch = useDispatch();
    const [stars, setStars] = useState(0)
    const [starChecked, setStarChecked] = useState(false)
    const [content, setContent] = useState('')
    const [activityType, setActivityType] = useState('hiking')
    const [conditions, setConditions] = useState([]) 
    const [isEdit, setIsEdit] = useState(false);
    const [pageNum, setPageNum] = useState(1)
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        if(review){
            setIsEdit(true)
            setStars(review.stars)
            setContent(review.content)
            setActivityType(review.activityType)
            setConditions(review.conditions.split(","))          
        }
    }, [dispatch, review, hike.id])

    useEffect(()=>{
        if(review){
            setConditions(review.conditions.split(","))
        } 
    }, [open])

    if (!open){
        return null;
    }
    if(!hike || !user){
        return null;
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // setPageNum(1);
        if(review){
            const data ={
                id: review.id,
                user_id: user.id,
                hike_id: hike.id,
                stars,
                content,
                activity_type: activityType,
                conditions: conditions.toString()
            }
           
          return dispatch(updateReview(data))
                .then(()=> setIsOpen(false))
                .catch(async (res) => {
                  let data;
                  try {

                      data = await res.clone().json();
                  } catch {
                      data = await res.text();
                  }
                  if (data?.errors) setErrors(data.errors);
                  else if (data) setErrors([data]);
                  else setErrors([res.statusText]);
              });;
        }
        else{
            const data = {
                user_id: user.id,
                hike_id: hike.id,
                stars,
                content,
                activity_type: activityType,
                conditions: conditions.toString()
            }
            
           return dispatch(createReview(data))
                .then(()=> setIsOpen(false))
                .then(()=> setPageNum(1))
               .catch(async (res) => {
                   let data;
                   try {

                       data = await res.clone().json();
                   } catch {
                       data = await res.text();
                   }
                   if (data?.errors) setErrors(data.errors);
                   else if (data) setErrors([data]);
                   else setErrors([res.statusText]);
               });;
            // setIsOpen(false);
            // setPageNum(1);
        }
        
    }

    const handleRadioChange = (e) =>{
        if(!conditions.includes(e.target.value)){
            setConditions((prevConditions) => [...prevConditions].concat(e.target.value))
        }else{
            let idx= conditions.indexOf(e.target.value)
            setConditions(prevConditions=> prevConditions.slice(0, idx).concat(prevConditions.slice(idx+1, prevConditions.length)))
        }     
    }


    const activities = ['hiking', 'backpacking', 'bird watching', 'bike touring', 'camping', 'fishing', 'horseback riding', 'mountain biking', 'road biking', 'rock climbing', 'skiing', 'running', 'walking']
    const conditionOptions = ['Great!', 'Blowdown', 'Bridge out', 'Bugs', 'Closed', 'Fee', 'Flooded', 'Muddy', 'No shade', 'Off trail', 'Overgrown', 'Rocky', 'Washed out']

  
    const closeModal = ()=>{
        setIsOpen(false)
        if(isEdit){
            return;
        }else{
            setPageNum(1)
            setStars(0)
            setContent("")
            setActivityType("")
            setConditions("")
            setErrors([])
        }
    }

    const starValue = (e)=>{
        if(stars !== e.target.value){
            setStars(e.target.value)
        }else if(e.target.value === 1 && starChecked === false) {
            setStars(e.target.value)
            setStarChecked(true)
        }else if(e.target.value===1 % starChecked === true){
            setStars(0)
            setStarChecked(false)
        }else{
            setStars(0)
        }
    }


    return (
        <>
            <div className="overlay"></div>
            <div className='modal-content'>
                <button onClick={closeModal} className="exit-modal">X</button>
                <h1 className="review-hike-title">{hike.name}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="review-form">
                        {pageNum === 1 ? <> 
                            <span className='page-num'>Page 1 of 2</span>
                            <div className="star-rating">
                                <input id="5" type="radio" name="rating" value={5} onChange={starValue} checked={stars == 5 ? "checked" : ""} />
                                    <label htmlFor="5" title="5 stars" className="star-label" >
                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                </label>
                                <input id="4" type="radio" name="rating" value={4} onChange={starValue} checked={stars == 4 ? "checked" : ""} />
                                <label htmlFor="4" title="4 stars" className="star-label" >
                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                </label>
                                <input id="3" type="radio" name="rating" value={3} onChange={starValue} checked={stars == 3 ? "checked" : ""} />
                                <label htmlFor="3" title="3 stars" className="star-label" >
                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                </label>
                                <input id="2" type="radio" name="rating" value={2} onChange={starValue} checked={stars == 2 ? "checked" : ""} />
                                <label htmlFor="2" title="2 stars" className="star-label" >
                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                </label>
                                <input id="1" type="radio" name="rating" value={1} onChange={starValue} checked={stars == 1 ? "checked" : ""} />
                                <label htmlFor="1" title="1 stars" className="star-label" >
                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                </label>

                            </div>
                            <div className="review-content">
                                <label className="review-content-label">Review</label>
                                <textarea value={content} onChange={(e => setContent(e.target.value))} className='textarea' required/>
                            </div>
                            <div className='button-container'>
                                <button onClick={()=> setPageNum(2)} className="next-page-modal-button" id="next-page-modal-button" disabled={stars >=1 && content.length >= 3 ? false : true} >Next Page</button>
                            </div>
                        </> : <> 
                        <span className='page-num'>Page 2 of 2</span>
                        <div className="activity-type-dropdown">
                            <p className="activity-type-label">Activity Type</p>
                            <select value={activityType} onChange={(e => setActivityType(e.target.value))}>
                                <option selected>Select</option>
                                {activities?.map((activity, i) => <option value={activity} key={i}>{activity}</option>)}
                            </select>
                        </div> 
                            <label className="trail-conditions-label">Trail Conditions  </label>
                            <div className="conditions-options">
                                {conditionOptions.map((condition, i) => 
                                    <div className="radio-conditions" key={`${i}radioconditions`}> 
                                        <input type="radio" value={condition} key={i} id={`conditions${i}`} onChange={()=> {}} onClick={handleRadioChange}checked={conditions.includes(condition) ? "checked" : ""} className="conditions-radio-buttons"/>
                                        <label htmlFor={`conditions${i}`} className="conditions-label" key={condition}> {conditions.includes(condition) ? `✓ ${condition}` : condition}  </label>
                                    </div>)}
                                </div> 
                                
                            <div className="button-container">
                                    <div className="errors">
                                        <ol className='error-list'>
                                            {errors.map((error) => (
                                                <li key={error} className='review-errors'>{error}</li>
                                            ))}
                                        </ol>
                                    </div>
                                    <button onClick={(() => setPageNum(1))} className="go-back-button" id="go-back-button">Go Back</button>
                                <button type="submit" className='post-review-button'>{isEdit ? "Edit" : "Post"}</button>
                            </div> </>}
                     
                    </div>
                    
                </form> 
            </div>
        </>
    )
}
export default ReviewModal;