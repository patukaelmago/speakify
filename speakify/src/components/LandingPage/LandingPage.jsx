import React from 'react';
import './LandingPage.css';
import { Link } from "react-router-dom"; 

function LandingPage() {
  return (
    <div className="container">
      <h1 className="title">Mi sitio web</h1>
      <p className="description">¡Bienvenido a mi sitio web!</p>
      <Link to="/home">
        <button className="button" >Ver más</button>
      </Link>
      
    </div>
  );
}

export default LandingPage;