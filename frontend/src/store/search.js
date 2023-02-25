import csrfFetch from "./csrf";

export const RECEIVE_SEARCH_HIKES = 'search/RECEIVE_SEARCH_HIKES'
export const CLEAR_SEARCH_HIKES = 'search/CLEAR_SEARCH_HIKES'

export const receiveSearchHikes = (hikes) => ({
    type: RECEIVE_SEARCH_HIKES,
    payload: hikes.hikes
})

export const receiveSearchParks = (parks)=>({
    type: RECEIVE_SEARCH_HIKES,
    payload: parks.parks
})

export const clearSearchHikes = ()=>({
    type: CLEAR_SEARCH_HIKES
})
export const fetchSearchFilterListings = (searchValue) => async (dispatch) => {
    const res = await csrfFetch(`/api/search?query=${searchValue}`)
    if (res.ok) {
        const hikes = await res.json();
        dispatch(receiveSearchHikes(hikes));
        dispatch(receiveSearchParks(hikes))
        return hikes;
    }
}

export const getSearchHikes = (store = {}) => {
    if (store.search) {
        return Object.values(store.search)
    }
    return []
}

const searchReducer = (state = {}, action) => {
    const newState = { ...state }
    switch (action.type) {
        case RECEIVE_SEARCH_HIKES:
            return { ...newState, ...action.payload }
        case CLEAR_SEARCH_HIKES:
            return {}
        default:
            return state;
    }
}
export default searchReducer;