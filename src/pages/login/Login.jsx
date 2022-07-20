import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='wrapper'>
                <h1>Sign in</h1>
                <form className='formLogin'>
                    <input className='inputF1' placeholder='username' />
                    <input className='inputF1' placeholder='password' />
                    <button className='formButton'>Create</button>
                    <Link to="/register" className='link'>Create a new account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login