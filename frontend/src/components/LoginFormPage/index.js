import {useDispatch, useSelector} from 'react-redux'
import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './LoginForm.css'
import goldengate from "../../images/goldengate.jpg"

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
        return dispatch(sessionActions.login({ credential:'demo-user@demo.com', password:'demopassword'}))
            .then(()=> history.push('/'))
    }

    return (
        <> 
            <div className='login-form'>
                <div className='login-header'>
                    <i className="fa-solid fa-mountain-city" id='logo'></i>
                </div>
                <div className='login-title'>
                    <h1 className='formTitle'>Login</h1>
                </div>
                <div className='login-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-elements'>
                            <ul>
                                {errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                                <input type ='text' value={credential} onChange={((e)=> setCredential(e.target.value))} placeholder="Username or email"></input>
                                <input type='password' value={password} onChange={((e) => setPassword(e.target.value))} placeholder="Password"></input>
                            
                            <button type='submit'>Submit</button>
                            </div>
                        </form>
                            <div className ='form-elements'>
                                 <button onClick={demoUser}>Demo Login</button>
                                <p id='link-to-sign-up-form'>Don't have an account? <Link to="/login">Sign up for free</Link></p>
                            </div>
                </div>
            </div>
            <div id='background-image-container'>
                <img src={goldengate} className='background-image'></img>
            </div>
        </>
    )
}
export default LoginFormPage;