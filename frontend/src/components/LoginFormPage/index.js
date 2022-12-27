import {useDispatch, useSelector} from 'react-redux'
import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect, useHistory } from 'react-router-dom'
import './LoginForm.css'

const LoginFormPage = ()=>{
    const dispatch = useDispatch()
    const [credential, setCredential ] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser, 'sessionUser')

    if (sessionUser) return <Redirect to ="/" />

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .then(()=> history.push('/'))
            .catch(async (res) => {
                let data;
                try {

                    data = await res.clone().json();
                } catch {
                    data = await res.text(); 
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    const demoUser = (e)=> {
        e.preventDefault()
        return dispatch(sessionActions.login({credential:'demo@gmail.com', password:'demopassword'}))
            .then(()=> history.push('/'))
    }

    return (
        <> 
            <h1 className='formTitle'>Login Form</h1> 
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <div className='formElements'>
                
                <label className='label'>Username or Email <br></br>
                    <input type ='text' value={credential} onChange={((e)=> setCredential(e.target.value))}></input>
                </label>
                <label className='label'>Password<br></br>
                    <input type='password' value={password} onChange={((e) => setPassword(e.target.value))}></input>
                </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={demoUser}>Demo Login</button>
        </>
    )
}
export default LoginFormPage;