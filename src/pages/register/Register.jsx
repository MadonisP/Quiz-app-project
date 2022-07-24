import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import { auth, db } from "../../firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'

const Register = () => {

  const { currentUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");//google firebase otomatik bir şekilde şifrelediği için bir şifreleme kullanmadım passworda
  const [name, setName] = useState("");
  const [lName, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [cPassword, setCPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {

    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        id: res.user.uid,
        first: name,
        last: lName,
        username: username,
        email: email,
        timeStamp: serverTimestamp(),
      });
      navigate("/login");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <div className='register'>
      <div className='wrapperR'>
        <h1>Create An Account</h1>
        <form className='formRegister' onSubmit={handleRegister}>
          <input className='inputFR1' type="text" placeholder='name' onChange={e => setName(e.target.value)} required />
          <input className='inputFR1' type="text" placeholder='last name' onChange={e => setLName(e.target.value)} required />
          <input className='inputFR1' type="text" placeholder='username' onChange={e => setUsername(e.target.value)} required />
          <input className='inputFR1' type="email" placeholder='email' onChange={e => setEmail(e.target.value)} required />
          <input className='inputFR1' type="password" placeholder='password' onChange={e => setPassword(e.target.value)} required />
          <input className='inputFR1' type="password" placeholder='confirm password' onChange={e => setCPassword(e.target.value)} required />
          {password == cPassword ? (
            <>
              <button className='formRButton' type='submit'>Create</button>
            </>
          ) : (
            <>
              <button className='formRButton' disabled={true} style={{ cursor: "default" }}>Check your password</button>
            </>
          )}
          <p>Do you have an account? <Link to="/login" className='rLink'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register