import "./App.css";
import { useState } from "react";
import MensajeFinDelJuego from "./componentes/MensajeFinDelJuego/MensajeFinDelJuego";
import LetraFallida from "./componentes/LetraFallida/LetraFallida";
import Ahorcado from "./componentes/Ahorcado/Ahorcado";
import LetraPalabra from "./componentes/LetrasPalabras/LetrasPalabras";
import Boton from "./componentes/Boton/Boton";
import Imput from "./componentes/Imput/Imput";

function App() {
  const [letrasFalladas, setletrasFalladas] = useState(["a", "b", "c"]);
  const [letraInput, setletraInput] = useState("");
  const [mensajeFin, setmensajeFin] = useState("Has perdido");

  // const prueba = ["h", "o", "l", "a"];

  // const palabra = "Hola".split("");
  // console.log(palabra);
  // const [palabraArray, setpalabraArray] = useState(palabra.split(""));

  //   setpalabraArray(
  //     palabraArray.map((letra, indice) => {
  //       return {
  //         id: indice,
  //         letra: letra,
  //         estado: false,
  //       };
  //     })
  //   );
  //   console.log(palabraArray);

  function cogerValor() {
    setletraInput(document.querySelector(".input-letra").value);
    return letraInput;
    // console.log(letraInput);
  }

  return (
    <>
      <header className="header-principal">
        <h1 className="header-principal__titular">Ahorcado</h1>
      </header>
      <section className="contenedor-ahorcado">
        <article className="contenedor-ahorcado__dibujo">
          <Ahorcado numeroFallos={"FALTA"} />
        </article>
        <article className="contenedor-ahorcado__palabra">
          <div>
            {/* {palabraArray.map((letra, index) => (
              <LetraPalabra letraPalabra={letra} key={index} />
            ))} */}
            {/* falta */}
            <Imput />
            <Boton textoBoton={"Enviar"} eventoClick={cogerValor} />
          </div>
        </article>
        <article className="contenedor-ahorcado__letrasFalladas">
          <LetraFallida letra={letrasFalladas} />
        </article>
      </section>
      <Ahorcado numeroFallos={3} />

      <MensajeFinDelJuego mensaje={mensajeFin} />
    </>
  );
}

export default App;
