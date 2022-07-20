import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import { auth } from "../../firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div className='register'>
      <div className='wrapperR'>
        <h1>Create An Account</h1>
        <form className='formRegister' onSubmit={handleLogin}>
          <input className='inputFR1' type="text" placeholder='name' required />
          <input className='inputFR1' type="text" placeholder='last name' required />
          <input className='inputFR1' type="text" placeholder='username' required />
          <input className='inputFR1' type="email" placeholder='email' onChange={e=>setEmail(e.target.value)} required />
          <input className='inputFR1' type="password" placeholder='password' onChange={e=>setPassword(e.target.value)}  required/>
          <input className='inputFR1' type="password" placeholder='confirm password' required/>
          <button className='formRButton' type='submit'>Create</button>
          <p>Do you have an account? <Link to="/login" className='rLink'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register