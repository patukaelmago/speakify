import React from "react";
import './Home.css';

export default function Home() {
    const handleClick=()=>{
        

    }
    return (
        <div>
            <h1>Síntesis de Voz en Texto (TTS) con JavaScript</h1>
	        <p>Escribe el texto que deseas convertir en audio:</p>
            <div className="container">
                <textarea id="texto" rows="4" cols="50"></textarea>
            </div>
	        
	        <button onclick={handleClick}>Hablar</button>
        </div>
    )
}