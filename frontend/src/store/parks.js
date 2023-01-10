import csrfFetch from "./csrf";

const RECEIVE_PARK = 'parks/RECEIVE_PARK';
const RECEIVE_PARKS ='parks/RECEIVE_PARKS'

export const receivePark = park => ({
    type: RECEIVE_PARK,
    park
})

export const receiveParks = (parks) => ({
    type: RECEIVE_PARKS,
    payload: parks.parks
})


export const getPark = (parkId) => (state) => {
    if (state.parks) {
        return state.parks[parkId]
    }
    return null
}

export const getParks = (state={})=>{
    if(state.parks){
        return Object.values(state.parks)
    }
    return []
}

export const fetchPark = (parkId) => async dispatch => {
    const res = await csrfFetch(`/api/parks/${parkId}`)
    if (res.ok) {
        const park = await res.json();
        dispatch(receivePark(park[parkId]))
    }
}

export const fetchParks =() => async dispatch=>{
    const res = await csrfFetch(`/api/hikes`)
    if(res.ok){
        const parks = await res.json();
        dispatch(receiveParks(parks))
    }
}

const parksReducer = (state = {}, action) => {
    const newState = { ...state }
    switch (action.type) {
        case RECEIVE_PARK:
            // return { [action.hike.id]: action.hike }
            newState[action.park.id] = action.park;
            return newState;
        case RECEIVE_PARKS:
            return {...newState, ...action.payload}
        default:
            return state;
    }
}
export default parksReducer;