import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
    <div className='register'>
      <div className='wrapperR'>
        <h1>Create An Account</h1>
        <form className='formRegister'>
          <input className='inputFR1' placeholder='name' />
          <input className='inputFR1' placeholder='last name' />
          <input className='inputFR1' placeholder='username' />
          <input className='inputFR1' placeholder='email' />
          <input className='inputFR1' placeholder='password' />
          <input className='inputFR1' placeholder='confirm password' />
          <button className='formRButton'>Create</button>
          <p>Do you have an account? <Link to="/login" className='rLink'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register