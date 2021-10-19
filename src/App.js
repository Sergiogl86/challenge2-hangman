import "./App.css";
import MensajeFinDelJuego from "./componentes/MensajeFinDelJuego/MensajeFinDelJuego";
import LetraFallida from "./componentes/LetraFallida/LetraFallida";
import { useState } from "react";

function App() {
  const [letrasFalladas, setletrasFalladas] = useState(["a", "b", "c"]);
  return (
    <div className="App">
      <LetraFallida letra={letrasFalladas} />

      {/* <MensajeFinDelJuego mensaje={"hola"} /> */}
    </div>
  );
}

export default App;
