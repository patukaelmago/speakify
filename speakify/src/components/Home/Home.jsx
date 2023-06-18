import React from "react";
import "./Home.css";

export default function Home(props) {
  const t = props.t;

  const handleConvertClick = () => {
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
      }
    });
  };

  const handleDownloadClick = () => {
    let texto = document.getElementById("texto").value;
    const blob = new Blob([texto], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "audio.mp3";
    link.click();
  };

  return (
    <div className="container flex flex-col p-8 items-center gap-8">
      <h1 className="title text-yellow-500 font-bold text-5xl">Speakify</h1>
      <p className="description">{}</p>
      <div className="container flex flex-col justify-center items-center min-w-max">
        <textarea
          className="textinput h-[70px] lg-4 mb-4 w-full lg:w-full m-auto block text-lg"
          id="texto"
          placeholder="Escribir texto"
        ></textarea>
        <div className="button-container grid gap-2">
          <button
            className="button w-full active:bg-yellow-500 bg-sky-500 text-black"
            onClick={handleConvertClick}
            to="/"
          >
            Escuchar 
          </button>
          <button
            className="button w-full active:bg-pink bg-pink text-black"
            onClick={handleDownloadClick}
          >
            Descargar
          </button>
        </div>
      </div>
      <div className="text-yellow-500">
              <p className="text-sm mb-md-0">&copy; {new Date().getFullYear()} - Patuka Technologies.<br/> All rights reserved.</p>
            </div>
    </div>
  );
}
