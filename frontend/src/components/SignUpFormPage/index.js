import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect } from 'react-router-dom'
import './SignUpForm.css'

const SignUpForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [confirmPassword, setConfirmPassword] = useState("")
    const dispatch = useDispatch()
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
            <h1 className='formTitle'>Sign Up Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="formElements">
                <label>Username: 
                    <input type="text" value={username} onChange={((e)=> setUsername(e.target.value))}></input>
                </label>
                <label>Email:
                    <input type="text" value={email} onChange={((e) => setEmail(e.target.value))}></input>
                </label>
                <label>Password:
                    <input type="password" value={password} onChange={((e) => setPassword(e.target.value))}></input>
                </label>
                <label>Confirm Password:
                        <input type="password" value={confirmPassword} onChange={((e) => setConfirmPassword(e.target.value))}></input>
                </label>
                <p>{errors}</p>
                </div>
                <button>Sign Up!</button>
            </form>
        </>
    )
}
export default SignUpForm;