import csrfFetch from "./csrf";

const RECEIVE_HIKE = 'hikes/RECEIVE_HIKE';
const RECEIVE_HIKES = 'hikes/RECEIVE_HIKES';

export const receiveHike = hike =>({
    type: RECEIVE_HIKE,
    hike
})

export const receiveHikes = (hikes)=>({
    type: RECEIVE_HIKES,
    payload: hikes.hikes
})

export const getHike = (hikeId)=>(state)=>{
    if(state.hikes){
        console.log(state.hikes[hikeId], 'store hike')
        return state.hikes[hikeId]
    }
    return null
}

export const getHikes = (store={})=>{
    if (store.hikes){
        console.log(Object.values(store.hikes), "storehikes")
        return Object.values(store.hikes)
    }
    return []
}

export const fetchHikes = () => async dispatch =>{
    const res = await csrfFetch(`/api/hikes`)
    if (res.ok){
        const hikes = await res.json();
        console.log(hikes)
        dispatch(receiveHikes(hikes))
    }
}

export const fetchHike = (hikeId) => async dispatch => {
    const res = await csrfFetch(`/api/hikes/${hikeId}`)
    if (res.ok){
        const hike = await res.json();
        console.log(hike[hikeId], 'hike in fetchhike')
        dispatch(receiveHike(hike[hikeId]))
    }
}

const hikesReducer = (state={}, action) => {
    const newState ={...state}
    switch(action.type){
        case RECEIVE_HIKE:
            // return { [action.hike.id]: action.hike }
            newState[action.hike.id] = action.hike;
            return newState;
        //    return {...newState, ...action.hike}
        case RECEIVE_HIKES:
            return {...newState, ...action.payload}
        default:
            return state;
    }
}
export default hikesReducer;