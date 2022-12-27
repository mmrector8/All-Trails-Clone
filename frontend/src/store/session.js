import csrfFetch, { storeCSRFToken } from "./csrf";

//ACTION TYPES
const SET_USER = 'users/SET_USER';
const REMOVE_USER = 'users/REMOVE_USER';

//ACTION CREATORS
export const loginUser = user => ({
    type: SET_USER,
    payload: user
})

export const logoutUser = () => ({
    type: REMOVE_USER,
})

//THUNK ACTION CREATOR
export const login = (user) => async dispatch => {
    const { credential, password } = user;
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            // credential: user.credential,
            // password: user.password
            credential,
            password
        })
    })
    if(res.ok){
        let data = await res.json();
        storeCurrentUser(data.user)
        dispatch(loginUser(data.user));
        return res;
    }
}

export const restoreSession = ()=> async dispatch =>{
    const res = await csrfFetch(`/api/session`)
    storeCSRFToken(res)
    const data = await res.json()
    console.log(data, 'restoresession data')
    storeCurrentUser(data.user)
    dispatch(loginUser(data.user))
}

export const signUp = (user)=> async dispatch => {
    const res = await csrfFetch(`/api/users`, {
        method: "POST",
        body: JSON.stringify(user)
    })
    if (res.ok){
        const newUserData = await res.json();
        storeCurrentUser(newUserData.user)
        dispatch(loginUser(newUserData.user))
    }
}

export const logout = ()=> async dispatch => {
    const res = await csrfFetch(`/api/session`, {
        method: 'DELETE'
    })
    if(res.ok){
        const user = await res.json()
        storeCurrentUser(null)
        dispatch(logoutUser(user.id))
    }
}

const storeCurrentUser = (user)=>{
    const currentUser = JSON.stringify(user)
    if (user){
        sessionStorage.setItem('currentUser', currentUser)
    }else{
        delete sessionStorage.removeItem('currentUser')
    }
    
}
const initialState = {
    user: JSON.parse(sessionStorage.getItem('currentUser'))
}
//REDUCERS
const sessionReducer = (state=initialState, action) => {
    const nextState = {...state};
    switch(action.type){
        case SET_USER:
            debugger
            console.log(action, 'action')
           return {...state, user: action.payload}
        case REMOVE_USER:
        //     debugger
        //     nextState['user'] = null
        //    return nextState;
        return {...state, user: null}
        default:
            return state;
    }
}


export default sessionReducer;
