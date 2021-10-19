import "./App.css";
import Ahorcado from "./componente/Ahorcado/Ahorcado";

function App() {
  return (
    <div className="App">
      Challenge2 Hangman - Sandra - Sergio
      <Ahorcado numeroFallos={3} />
    </div>
  );
}

export default App;
