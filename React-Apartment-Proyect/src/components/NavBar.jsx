import React from 'react'
import '../App.css'
import logo from "../assets/zylo-logo.png"
const NavBar = () => {
  return (
    <div className="app">    
        <div className='navbar'>   
            <img id ="logo" src={logo}/>
            <nav>
             <div className='sidebar'> 
                <a href="#">Home</a>
                <a href="#">About Us</a>
            </div>
            </nav>
        </div> 
    </div>
  )
}

export default NavBar


