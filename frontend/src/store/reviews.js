import csrfFetch from "./csrf"
import { RECEIVE_HIKE } from "./hikes"
export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

export const receiveReview = (review)=> {
    console.log('hitting receive review')
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const receiveReviews = (reviews)=>{
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const removeReview = (reviewId) =>{
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const getReviews = (store={})=>{
    if(store.reviews){
        return Object.values(store.reviews)
    }
    return []
}

export const getReview = (reviewId) => (store={})=>{
    if(store.reviews){
        return store.reviews[reviewId]
    }
}

export const fetchReviews = (hikeId)=> async (dispatch) =>{
    const res = await csrfFetch(`/api/hikes/${hikeId}/reviews`)
    if(res.ok){
        const reviews = await res.json();
        dispatch(receiveReviews(reviews))
    }
}

export const createReview = (review)=> async dispatch => {
    console.log('hitting create review')
    console.log(review.hikeId)
    const res = await csrfFetch(`/api/hikes/${review.hikeId}/reviews`, {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok){
        const review = await res.json();
        console.log(review, 'review')
        dispatch(receiveReview(review))
    }
}

export const updateReview = (review)=> async dispatch =>{
    const res = await csrfFetch(`api/hikes/${review.hike_id}/reviews/${review.id}`,{
        method: 'PATCH',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if(res.ok){
        const review = await res.json();
        dispatch(receiveReview(review))
    }
}

const reviewsReducer = (state={}, action)=>{
    const newState = {...state}
    switch(action.type){
        case RECEIVE_HIKE:
            return {...newState, ...action.payload.reviews}
        case RECEIVE_REVIEWS:
            return {...action.reviews}
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
                return newState;
        default:
            return state;
    }
}
export default reviewsReducer;