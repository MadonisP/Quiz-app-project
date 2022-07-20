import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='wrapperL'>
                <h1>Sign in</h1>
                <form className='formLogin'>
                    <input className='inputFL1' placeholder='username' />
                    <input className='inputFL1' placeholder='password' />
                    <button className='formLButton'>Create</button>
                    <Link to="/register" className='lLink'>Create a new account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login