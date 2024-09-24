import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect, useHistory } from 'react-router-dom'
import './SignUpForm.css'
import logo from "../../assets/logo.png"

const SignUpForm = () => {
    const [username, setUsername] = useState("")
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("")
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
            return dispatch(sessionActions.signUp({ email, fname, lname, username, password }))
                .then(()=> history.goBack())
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
            <div className='background-image-container'>
            <div className='sign-up-form'>
                <div className='sign-up-header'>
                    <img src={logo} id="logo-session-sign-up"></img>
                </div>
                <div className='sign-up-title'>
                    <h1 className='formTitle'>Sign up today to start planning your next adventure</h1>
                </div>
                <div className='sign-up-body'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-elements">
                            <ul className='error-container'>
                                {errors.map((error) => (
                                    <li key={error} className='sign-up-errors'>{error}</li>
                                ))}
                            </ul>
                            <input type="text" className='input-value' value={fname} onChange={((e) => setFname(e.target.value))} placeholder='First Name' required />
                            <input type="text" className='input-value' value={lname} onChange={((e) => setLname(e.target.value))} placeholder='Last Name' required />
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
        </div>
        </>
    )
}
export default SignUpForm;