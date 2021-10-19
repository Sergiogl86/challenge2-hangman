import "./App.css";
import MensajeFinDelJuego from "./componentes/MensajeFinDelJuego/MensajeFinDelJuego";
import LetraFallida from "./componentes/LetraFallida/LetraFallida";
import { useState } from "react";
import Boton from "./componentes/Boton/Boton";

function App() {
  // const [letrasFalladas, setletrasFalladas] = useState(["a", "b", "c"]);
  return (
    <div className="App">
      <Boton
        textoBoton={"Enviar"}
        eventoClick={() => {
          console.log("hola");
        }}
      />

      {/* <LetraFallida letra={letrasFalladas} /> */}

      {/* <MensajeFinDelJuego mensaje={"hola"} /> */}
    </div>
  );
}

export default App;
