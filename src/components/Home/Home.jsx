import React from "react";
import "./Home.css";
import '../../Languagues/en.json';
import '../../Languagues/es.json';

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
    <div>
      <h1>{t('h1Text')}</h1>
      <p>{t('textConvert')}</p>
      <div className="container">
        <textarea id="texto" rows="4" cols="50"></textarea>
      </div>

      <button onClick={handleClick} to="/home">
        {t('talkButton')}
      </button>
    </div>
  );
}
