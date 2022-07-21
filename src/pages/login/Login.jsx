import { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { auth } from "../../firebase-config"
import { signInWithEmailAndPassword  } from "firebase/auth";
import {AuthContext}from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
  
    const navigate = useNavigate()

    const{dispatch}=useContext(AuthContext)

    const handleLogin = (e) => {
      e.preventDefault();
  
      signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          dispatch({type:"LOGIN",payload:user})
          navigate("/")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }

    return (
        <div className='login'>
            <div className='wrapperL'>
                <h1>Sign in</h1>
                <form className='formLogin' onSubmit={handleLogin}>
                    <input className='inputFL1' type="email" placeholder='username' onChange={e=>setEmail(e.target.value)} required />
                    <input className='inputFL1' type="password" placeholder='password' onChange={e=>setPassword(e.target.value)} required />
                    <button className='formLButton' type="submit">Login</button>
                    <Link to="/register" className='lLink'>Create a new account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login