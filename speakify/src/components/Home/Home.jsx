import React, { useEffect, useState } from "react";
import "./Home.css";
import { AiFillCustomerService } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

export default function Home(props) {
  const t = props.t;
  const [audioURL, setAudioURL] = useState("");

  const handleConvertClick = () => {
    let synthesis = window.speechSynthesis;
    let texto = document.getElementById("texto").value;
    let habla = new SpeechSynthesisUtterance(texto);
    habla.lang = "es-ES";
    habla.volume = 1;
    let timer = setInterval(function () {
      let voices = synthesis.getVoices();
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
    setAudioURL(url); // Guardar la URL del audio en el estado
  };

  useEffect(() => {
    if (audioURL) {
      const link = document.createElement("a");
      link.href = audioURL;
      link.download = "audio.mp3";
      link.click();
      URL.revokeObjectURL(audioURL); // Liberar la URL del objeto
      setAudioURL(""); // Restablecer el estado de la URL del audio
    }
  }, [audioURL]);

  return (
    <div className="container flex flex-col p-8 items-center gap-8">
      <h1 className="title text-yellow-500 font-bold text-5xl">Speakify</h1>
      <p className="description"></p>
      <div className="container flex flex-col justify-center items-center min-w-max max-w-lg">
        <textarea
          className="textinput h-[70px] lg-4 mb-4 w-full lg:w-full m-auto block text-lg"
          id="texto"
          placeholder="Escribir texto"
        ></textarea>
        <div className="button-container grid gap-2">
          
            <button onClick={handleConvertClick}
            className="button w-full active:bg-yellow-500 bg-sky-500 text-black flex items-center justify-center">
  <span className="mr-2">Escuchar</span>
  <AiFillCustomerService />
</button>

            
          
          
            <button onClick={handleDownloadClick} className="button w-full active:bg-yellow-500 bg-sky-500 text-black flex items-center justify-center">
  <span className="mr-2">Descargar</span>
  <BiDownload />
</button>

          
        </div>
      </div>
      <div className="text-yellow-500">
        <p className="text-sm mb-md-0">
          &copy; {new Date().getFullYear()} - Patuka Technologies.
          <br /> Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
