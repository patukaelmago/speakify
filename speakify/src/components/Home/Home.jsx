import React from "react";
import "./Home.css";


export default function Home(props) {
     const t = props.t;
  const handleClick = () => {
    let synthesis = window.speechSynthesis;
    let texto = document.getElementById("texto").value;
    let habla = new SpeechSynthesisUtterance(texto);
    habla.lang="es-ES";
    habla.volume=1;
    let timer = setInterval(function(){
    let voices = speechSynthesis.getVoices();
    if (voices.length!=0) {
      habla.voice=voices[0];
      habla.voiceURI=voices[0].voiceURI;
      clearInterval(timer);
    synthesis.speak(habla);}
    })
  };

  return (
    <div className="container flex flex-col p-10 items-center">
  <h1 className="title text-yellow-500">Speakify</h1>
  <p className="description">{}</p>
  <div className="container relative">
    <textarea className="" id="texto" rows="4" cols="50" placeholder="escribir texto"></textarea>
  </div>
  <button className="button" onClick={handleClick} to="/">
    Convertir a Audio
  </button>
</div>

  );
}
