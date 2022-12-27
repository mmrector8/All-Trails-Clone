import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect, useHistory } from 'react-router-dom'
import './SignUpForm.css'

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

    const handleSubmit = async (e)=>{
        
        e.preventDefault();

        if (password === confirmPassword){
            return dispatch(sessionActions.signUp({email, username, password}))
            .catch(async (res)=>{
                console.log(res.statusText)
                let data;
                try {
                    data = res.clone().json()
                } catch{
                    data = await res.text()
                }
                
                if(data?.errors) setErrors(data.errors)
                else if(data) setErrors([])
                else setErrors([res.statusText])
            })
        }
        return setErrors(["passwords must match"])
    }

    return (
        <>
            <div className='sign-up-form'>
                <div className='sign-up-header'>
                    <i class="fa-solid fa-mountain-city" id='logo'></i>
                </div>
                <div className='sign-up-title'>
                    <h1 className='formTitle'>Sign up today to start planning your next adventure</h1>
                </div>
                <div className='sign-up-body'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-elements">
                            <input type="text" class='input-value' value={username} onChange={((e)=> setUsername(e.target.value))} placeholder='Username'></input>
                            <input type="text" class='input-value' value={email} onChange={((e) => setEmail(e.target.value))} placeholder="Email"></input>
                            <input type="password" class='input-value' value={password} onChange={((e) => setPassword(e.target.value))} placeholder="Password"></input>
                            <input type="password" class='input-value' value={confirmPassword} onChange={((e) => setConfirmPassword(e.target.value))} placeholder="Confirm Password"></input>
                        <p >{errors}</p>
                        <button id='sign-up-button'>Sign Up!</button>
                        <p id='link-to-login-form'>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUpForm;