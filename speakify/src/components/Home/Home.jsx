import React from "react";
import "./Home.css";

export default function Home(props) {
  const t = props.t;
  
  const handleClick = () => {
    let synthesis = window.speechSynthesis;
    let texto = document.getElementById("texto").value;
    let habla = new SpeechSynthesisUtterance(texto);
    habla.lang = "es-ES";
    habla.volume = 1;
    let timer = setInterval(function () {
      let voices = speechSynthesis.getVoices();
      if (voices.length !== 0) {
        habla.voice = voices[0];
        habla.voiceURI = voices[0].voiceURI;
        clearInterval(timer);
        synthesis.speak(habla);
        
        // Crear enlace de descarga del audio
        const blob = new Blob([texto], { type: "audio/mpeg" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "audio.mp3";
        link.click();
      }
    });
  };

  return (
    <div className="container flex flex-col p-8 items-center gap-8">
      <h1 className="title text-yellow-500 font-bold text-5xl">Speakify</h1>
      <p className="description">{}</p>
      <div className="container flex flex-col justify-center items-center">
        <textarea
          className="textinput h-1/2 lg-4 mb-4 w-full lg:w-1/2 m-auto block"
          id="texto"
          placeholder="Escribir texto"
        ></textarea>
        <button className="button w-full w-auto" onClick={handleClick} to="/">
          Convertir a Audio
        </button>
      </div>
    </div>
  );
}
