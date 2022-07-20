import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <ul>
            <li><Link to="/" className='left'>Quizle</Link></li>
            <li><Link to="/login" className='right'>Login</Link></li>
            <li><Link to="/about" className='right2'>About</Link></li>
        </ul>
    </div>
  )
}

export default Navbar