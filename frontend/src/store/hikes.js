import csrfFetch from "./csrf";
import { receiveParks } from "./parks";

export const RECEIVE_HIKE = 'hikes/RECEIVE_HIKE';
export const RECEIVE_HIKES = 'hikes/RECEIVE_HIKES';
export const RECEIVE_PARKS = "parks/RECEIVE_PARKS";
export const REMOVE_HIKES = "hikes/REMOVE_HIKES";

export const receiveHike = hike =>({
    type: RECEIVE_HIKE,
    payload: hike
})

export const receiveHikes = (hikes)=>({
    type: RECEIVE_HIKES,
    payload: hikes.hikes
})

export const removeHikes = () => ({
    type: REMOVE_HIKES
})

export const getHike = (hikeId)=>(state)=>{
    if(state.hikes){
        return state.hikes[hikeId]
    }
    return null
}

export const getHikes = (store={})=>{
    if (store.hikes){
        return Object.values(store.hikes)
    }
    return []
}

export const fetchHikes = () => async dispatch =>{
    const res = await csrfFetch(`/api/hikes`)
    if (res.ok){
        const hikes = await res.json()
        dispatch(receiveHikes(hikes))
    }
}

export const fetchSearchFilterListings = (searchValue) => async (dispatch) => {
    const res = await csrfFetch(`/api/search?query=${searchValue}`)
    if (res.ok) {
        const hikes = await res.json();
        dispatch(receiveHikes(hikes));
        return hikes;
    }
}

export const fetchHike = (hikeId) => async dispatch => {
    const res = await csrfFetch(`/api/hikes/${hikeId}`)
    if (res.ok){
        const hike = await res.json();
        dispatch(receiveHike(hike))
    }
}

const hikesReducer = (state={}, action) => {
    const newState ={...state}
    switch(action.type){
        case RECEIVE_HIKE:
            // return { [action.hike.id]: action.hike }
            newState[action.payload.hike.id] = action.payload.hike;
            return newState;
        //    return {...newState, ...action.hike}
        case RECEIVE_HIKES:
            return {...newState, ...action.payload}
        case REMOVE_HIKES:
            return {};
        default:
            return state;
    }
}
export default hikesReducer;