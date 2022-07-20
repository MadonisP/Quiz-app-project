import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
    <div className='register'>
      <div className='wrapper'>
        <h1>Create An Account</h1>
        <form className='formRegister'>
          <input className='inputF1' placeholder='name' />
          <input className='inputF1' placeholder='last name' />
          <input className='inputF1' placeholder='username' />
          <input className='inputF1' placeholder='email' />
          <input className='inputF1' placeholder='password' />
          <input className='inputF1' placeholder='confirm password' />
          <button className='formButton'>Create</button>
          <p>Do you have an account? <Link to="/login" className='link'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register