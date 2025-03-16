import React from 'react';
import logo from "../assets/zylo7.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="app">

      <div className="navbar">

        <img id="logo" src={logo} alt="Logo" />
        
        <nav className="sidebar">
          <Link to="/">  Home </Link>
          <Link to="/AboutPage"> About Us </Link>
          <Link to="/form">  Add </Link>  
        </nav>

      </div>

    </div>

  );
};

export default NavBar;
