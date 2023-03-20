import React from 'react';
import './LandingPage.css';
import { Link } from "react-router-dom";
import '../../Languagues/en.json';
import '../../Languagues/es.json';


function LandingPage(props) {
   const t = props.t;
  return (
    <div className="container">
      <h1 className="title">Speakify</h1>
      <p className="description">{t('description')}</p>
      <Link to="/home">
        <button className="button" Link >{t('learnMoreButton')}</button>
      </Link>
    </div>
  );
}

export default LandingPage;