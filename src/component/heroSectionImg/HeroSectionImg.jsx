import React from 'react'
import './heroSectionImg.css'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const HeroSectionImg = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className="heroSectionImg">
       <section>
            <div className="heroContent">
                <h2 className="heroTitle">
                    We already have more then 10.000 question <br/>What are you waiting for join us!
                </h2>
                <p className="heroDesc">
                  Train your brain now!
                </p>{!currentUser ?(
                  <Link to="/register" className="myButton">Register<br/>Now!</Link>
                ):(
                  <button className='myButton' disabled={true} style={{cursor:"default"}}>Scroll down for<br/>Our products!</button>
                )}
            </div>
            <div className="heroContent">
                <h2 className="heroTitle" >
                    Worlds largest quiz web site  And yes! it is free
                </h2>
                <p className="heroDesc">
                    If you bored come and try some of our questions
                </p>
            </div>
        </section>
        <img src={require("../../images/150.jpg")} className="heroImg" alt='education' />   
       
    </div>
  )
}

export default HeroSectionImg