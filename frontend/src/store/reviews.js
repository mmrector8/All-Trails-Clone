import csrfFetch from "./csrf"

export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

export const receiveReview = (review)=> {
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

export const removeReview = (hikeId) =>{
    return {
        type: REMOVE_REVIEW,
        hikeId
    }
}

export const getReviews = (store={})=>{
    if(store.reviews){
        return Object.values(store.hikes)
    }
    return []
}

export const getReview = (reviewId) => (store={})=>{
    if(state.reviews){
        return state.reviews[reviewId]
    }
}

export const fetchReviews = (hikeId)=> async dispatch =>{
    const res = await csrfFetch(`api/hikes/${hikeId}/reviews`)
    if(res.ok){
        const reviews = await res.json();
        dispatch(receiveReviews(reviews))
    }
}

export const createReview = (review)=> async dispatch => {
    const res = await csrfFetch(`api/hikes/${review.hike_id}/reviews`, {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if (res.ok){
        const review = await res.json();
        dispatch(receiveReview(review))
    }
}