
import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';

function App() {

 
 
  
  return (
    <div className='flex flex-col items-center'>
    
         
        <Routes>
          
          
          <Route exact path="/" element={< Home  />} />
        </Routes>
    </div>
  );
}

export default App;

