import csrfFetch from "./csrf"
import { receiveReviews } from "./reviews"

export const RECEIVE_USER = "users/RECEIVE_USER"
export const RECEIVE_REVIEWS= "users/RECEIVE_REVIEWS"

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    payload: user
})

export const fetchUser = (userId)=> async dispatch=> {
    const res = await csrfFetch(`/api/users/${userId}`)
    if(res.ok){
        const user = await res.json();
        dispatch(receiveUser(user))
    }
}

export const getUser = (userId) => (state) => {
    if (state.users) {
        return state.users[userId]
    }
    return null
}

const usersReducer = (state={}, action)=>{
    const newState = {...state}
    switch(action.type){
        case RECEIVE_USER:
            newState[action.payload.user.id] = action.payload.user
            return newState;
        default:
            return state;
    }
}
export default usersReducer;