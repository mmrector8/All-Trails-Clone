import {useDispatch, useSelector} from 'react-redux'
import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './LoginForm.css'
import logo from "../../assets/logo.png"


const LoginFormPage = ({modal, closeModal})=>{
    let modalVal = modal
    const dispatch = useDispatch()
    const [credential, setCredential ] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    if(!modalVal){
        if (sessionUser) return <Redirect to="/" />
    }

    

    const handleSubmit = (e) => {

        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .then(() => {
                if (!modalVal) {
                    history.goBack()
                } else {
                    closeModal();
                }
            })
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
        return dispatch(sessionActions.login({ credential:'demo-user@demo.com', password:'demopassword'}))
            .then(() => {
                if(!modalVal){
                    history.goBack()
                }else{
                    closeModal();
                }
            }
        ) 
    }

    const openSignUpModal=()=>{
        closeModal();

    }


    return (
        <>
            <div className={modal ? "background-image-container-login hidden-background" : "background-image-container-login"}>
                <div className={modal ? "login-form hidden": "login-form"}>
                    {modal ? <p className='exit-modal-button' onClick={closeModal}>X</p> : ""}
                    <div className='login-header'>
                        <img src={logo} id="logo-session"></img>
                    </div>
                    <div className='login-title'>
                        {modal ? <div className="must-be-logged-in"> You must be logged in to write a review! <br></br><br></br> Login Below</div> : <h1 className='login-form-title'>Welcome back. <br></br>Log in and start exploring.</h1>}
                    </div>
                    
                    <div className='login-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='form-elements'>
                                <ul className='error-container-sign-in'>
                                    {errors.map((error) => (
                                        <li key={error} className='sign-in-errors'>{error}</li>
                                    ))}
                                </ul>
                                <input type ='text' value={credential} onChange={((e)=> setCredential(e.target.value))} placeholder="Username or email" className='input-value'></input>
                                <input type='password' value={password} onChange={((e) => setPassword(e.target.value))} placeholder="Password" className='input-value'></input>
                                <button type='submit' className='login-form-buttons'>Log in</button>
                                </div>
                            </form>
                                <div className ='form-elements'>
                                    <button onClick={demoUser} className ='login-form-buttons'>Demo Login</button>
                                    <p id='link-to-sign-up-form'>Don't have an account?</p>
                                <Link to="/signup" className='signup-link' onClick={(() => window.scrollTo({ top: 0 }))}>Sign up for free</Link>
                                </div>
                        </div>
                 </div>
            
            </div>
        </>
    )
}
export default LoginFormPage;