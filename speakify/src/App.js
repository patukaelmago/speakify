
import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import * as languages from './Languagues';
function App() {

  const [lang, setLang] = useState(navigator.language.startsWith('es') ? 'es' : 'en');
  const t = (key) => lang === 'es' ? languages.es[key] : languages.en[key];
  
  return (
    <div>
      <button className="language" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
            {lang === 'es' ? 'English' : 'Español'}
          </button>
          <div>{t('landing.description')}</div>
        <Routes>
          
          <Route exact path="/" element={< LandingPage t={t} />} />
          <Route exact path="/home" element={< Home t={t} />} />
        </Routes>
    </div>
  );
}

export default App;

