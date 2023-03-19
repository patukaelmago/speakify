
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Síntesis de Voz en Texto (TTS) con JavaScript</h1>
	<p>Escribe el texto que deseas convertir en audio:</p>
	<textarea id="texto" rows="4" cols="50"></textarea>
	<button onclick="hablar()">Hablar</button>
    </div>
  );
}

export default App;
