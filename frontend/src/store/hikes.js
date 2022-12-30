import csrfFetch from "./csrf";

const RECEIVE_HIKE = 'hikes/RECEIVE_HIKE';
const RECEIVE_HIKES = 'hikes/RECEIVE_HIKES';

export const receiveHike = hike =>({
    type: RECEIVE_HIKE,
    payload: hike
})

export const receiveHikes = (hikes)=>({
    type: RECEIVE_HIKES,
    payload: hikes.hikes
})

export const fetchHikes = () => async dispatch =>{
    const res = await csrfFetch(`/api/hikes`)
    if (res.ok){
        const hikes = await res.json();
        console.log(hikes)
        dispatch(receiveHikes(hikes))
    }
}

const hikesReducer = (state={}, action) => {
    const newState ={...state}
    switch(action.type){
        // case RECEIVE_HIKE:
        //     newState[action.payload.hike.id] = action.payload.hike
        //     return newState;
        case RECEIVE_HIKES:
            return {...newState, ...action.payload}
        default:
            return state;
    }
}
export default hikesReducer;