import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={< LandingPage />} />
          <Route exact path="/home" element={< Home />} />
          
        </Routes>
    </div>
  );
}

export default App;

