import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect, useHistory } from 'react-router-dom'
import './SignUpForm.css'
import marinocean from "../../images/marinocean.jpg"
import marinhike from "../../images/marinhike.jpg"

const SignUpForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [confirmPassword, setConfirmPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    
     if (sessionUser) return <Redirect to="/" />

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signUp({ email, username, password }))
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
        return setErrors(['Passwords must match']);
    };

    return (
        <>
            <div className='sign-up-form'>
                <div className='sign-up-header'>
                    <i className="fa-solid fa-mountain-city" id='logo'></i>
                </div>
                <div className='sign-up-title'>
                    <h1 className='formTitle'>Sign up today to start planning your next adventure</h1>
                </div>
                <div className='sign-up-body'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-elements">
                            <ul>
                                {errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                            <input type="text" className='input-value' value={username} onChange={((e)=> setUsername(e.target.value))} placeholder='Username' required/>
                            <input type="text" className='input-value' value={email} onChange={((e) => setEmail(e.target.value))} placeholder="Email" required/>
                            <input type="password" className='input-value' value={password} onChange={((e) => setPassword(e.target.value))} placeholder="Password" required/>
                            <input type="password" className='input-value' value={confirmPassword} onChange={((e) => setConfirmPassword(e.target.value))} placeholder="Confirm Password" required/>
                        <button type="submit" id='sign-up-button'>Sign Up!</button>
                        <p id='link-to-login-form'>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <div id='background-image-container'>
                <img src={marinocean} className='background-image aerial'></img>
                <img src={marinhike} className='background-image'></img>
            </div>
        </>
    )
}
export default SignUpForm;