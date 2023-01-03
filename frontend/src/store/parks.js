import csrfFetch from "./csrf";

const RECEIVE_PARK = 'parks/RECEIVE_PARK';

export const receivePark = park => ({
    type: RECEIVE_PARK,
    park
})


export const getPark = (parkId) => (state) => {
    if (state.parks) {
        return state.parks[parkId]
    }
    return null
}



export const fetchPark = (parkId) => async dispatch => {
    const res = await csrfFetch(`/api/parks/${parkId}`)
    if (res.ok) {
        const park = await res.json();
        dispatch(receivePark(park[parkId]))
    }
}

const parksReducer = (state = {}, action) => {
    const newState = { ...state }
    switch (action.type) {
        case RECEIVE_PARK:
            // return { [action.hike.id]: action.hike }
            newState[action.park.id] = action.park;
            return newState;
        default:
            return state;
    }
}
export default parksReducer;