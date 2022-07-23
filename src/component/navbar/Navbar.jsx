import React from 'react'
import './navbar.css'
import { Link,Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  const { dispatch } = useContext(AuthContext)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }


  const RequireAuth = ({ children }) => {
    return !currentUser ? (children) : <Navigate to="/page404" />
  }

  return (
    <div className="navbar">
      <ul>
        <li><Link to="/" className='left'>Quizle</Link></li>
        {!currentUser ? (
          <>
            <RequireAuth><li><Link to="/login" className='right'>Login</Link></li></RequireAuth>
          </>
        ) : (
          <>
            <li><Link to="/" className="right" onClick={handleLogout}>Quit</Link></li>
            <li><Link to="/table" className='right2'>Table</Link></li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Navbar