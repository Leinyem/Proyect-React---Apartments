/*import { useState } from 'react'*/
import './App.css'
import logo from "./assets/zylo-logo1.png"
function App() {
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
    <div className="main-container">

    </div>
      <footer> <a href=" https://github.com/Leinyem/Proyect-React---Apartments"> Zylo - Apartament Management </a> 
      </footer>
    </div>
  )
}

export default App
