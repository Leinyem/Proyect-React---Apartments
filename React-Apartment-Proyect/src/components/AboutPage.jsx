import React from "react";
import Alfonso from "../assets/foto-perfil-alfonso.png";
import Joao from "../assets/joao.png";


const AboutPage = () => {
  return (
    <div className="about-container">
      
    <div className="about-profile-card">
        <img src={Alfonso} alt="Alfonso" className="about-profile-img" />
        <h2>ALFONSO MEYNIEL</h2>
        <h5>Web Develeopment Student</h5>
        <p>https://github.com/Leinyem</p>
        
        <a href="mailto:alfonmeyniel@gmail.com" className="about-email-link">alfonmeyniel@gmail.com</a>
      </div>

      {/* Tarjeta de la segunda persona */}
      <div className="about-profile-card">
        <img src= {Joao} alt="Joao" className="about-profile-img" />
        <h2>JOÂO JACINTO</h2>
        <h5>Web Develeopment Student</h5>  
        <p>https://github.com/joaommj/</p>
    
        <a href="mailto:" className="about-email-link">emailcompañero@example.com</a>
      </div>

    </div>
  );
};

export default AboutPage;
