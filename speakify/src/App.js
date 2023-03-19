import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={< LandingPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

