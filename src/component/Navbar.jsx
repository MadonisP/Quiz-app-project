import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <ul>
            <li className="left"><h1>Quizle</h1></li>
            <li className='right'><h3>About</h3></li>
        </ul>
    </div>
  )
}

export default Navbar