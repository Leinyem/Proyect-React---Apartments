import React from "react";
import Alfonso from "../assets/foto-perfil-alfonso.png";
import Joao from "../assets/escudo-portugal.png";


const AboutPage = () => {
  return (
    <div className="about-container">
      
    <div className="about-profile-card">
        <img src={Alfonso} alt="Alfonso" className="about-profile-img" />
        <h2>ALFONSO MEYNIEL</h2>
        <p>Descritption</p>
        <a href="mailto:alfonmeyniel@gmail.com" className="about-email-link">alfonmeyniel@gmail.com</a>
      </div>

      {/* Tarjeta de la segunda persona */}
      <div className="about-profile-card">
        <img src= {Joao} alt="Joao" className="about-profile-img" />
        <h2>JOAO</h2>
        <p>Descritption</p>
        <a href="mailto:" className="about-email-link">emailcompañero@example.com</a>
      </div>

    </div>
  );
};

export default AboutPage;
