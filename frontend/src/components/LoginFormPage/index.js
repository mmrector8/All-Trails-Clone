import {useDispatch, useSelector} from 'react-redux'
import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './LoginForm.css'
import goldengate from "../../images/sign-in-background.jpg"
import aerialgg  from "../../images/aerialgg.jpg"
import ggbridge2 from "../../images/ggbridge2.jpg"
// import pacifica from "../../images/pacifica.jpg"

const LoginFormPage = ()=>{
    const dispatch = useDispatch()
    const [credential, setCredential ] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

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
            <div className='background-image-container-login'>
                <div className='login-form'>
                    <div className='login-header'>
                        <i className="fa-solid fa-mountain-city" id='logo'></i>
                    </div>
                    <div className='login-title'>
                        <h1 className='formTitle'>Welcome back. <br></br>Log in and start exploring.</h1>
                    </div>
                    <div className='login-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='form-elements'>
                                <ul>
                                    {errors.map((error) => (
                                        <li key={error}>{error}</li>
                                    ))}
                                </ul>
                                    <input type ='text' value={credential} onChange={((e)=> setCredential(e.target.value))} placeholder="Username or email" className='input-value'></input>
                                <input type='password' value={password} onChange={((e) => setPassword(e.target.value))} placeholder="Password" className='input-value'></input>
                                <button type='submit' className='login-form-buttons'>Log in</button>
                                </div>
                            </form>
                                <div className ='form-elements'>
                                    <button onClick={demoUser} className ='login-form-buttons'>Demo Login</button>
                                    <p id='link-to-sign-up-form'>Don't have an account? <Link to="/login" className='signup-link'>Sign up for free</Link></p>
                                </div>
                        </div>
                 </div>
            
                {/* <img src={aerialgg} className='background-image-login'></img>
                <img src={ggbridge2} className='background-image-login'></img> */}
            </div>
        </>
    )
}
export default LoginFormPage;