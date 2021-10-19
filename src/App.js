import "./App.css";
// import MensajeFinDelJuego from "./componentes/MensajeFinDelJuego/MensajeFinDelJuego";
// import LetraFallida from "./componentes/LetraFallida/LetraFallida";
import Ahorcado from "./componente/Ahorcado/Ahorcado";
import MensajeFinDelJuego from "./componentes/MensajeFinDelJuego/MensajeFinDelJuego";
import LetraFallida from "./componentes/LetraFallida/LetraFallida";
import { useState } from "react";
import Boton from "./componentes/Boton/Boton";
import Imput from "./componentes/Imput/Imput";

function App() {
  // const [letrasFalladas, setletrasFalladas] = useState(["a", "b", "c"]);
  const [letraInput, setletraInput] = useState("");
  function cogerValor() {
    setletraInput(document.querySelector(".input-letra").value);
    return letraInput;
    // console.log(letraInput);
  }

  return (
    <div className="App">
      <section>
        <article>{/* Dibujos */}</article>
        <article>
          {/* Componente palabra oculta */}
          <div>
            <Imput />
            <Boton textoBoton={"hola"} eventoClick={cogerValor} />
            {/* Componente Boton */}
          </div>
        </article>
        <article>{/* Componente letras Falladas */}</article>
      </section>
    <Ahorcado numeroFallos={3} />
      {/* <LetraFallida letra={letrasFalladas} /> */}

      {/* <MensajeFinDelJuego mensaje={"hola"} /> */}
    </div>
  );
}

export default App;
