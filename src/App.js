import { useState } from "react";
import "./App.css";
import LetrasPalabras from "./componentes/LetrasPalabras/LetrasPalabras";
import Boton from "./componentes/Boton/Boton";
import Imput from "./componentes/Imput/Imput";
import Ahorcado from "./componentes/Ahorcado/Ahorcado";
import MostrarLetra from "./componentes/MostrarLetra/MostrarLetra";

function App() {
  // const [letrasFalladas, setletrasFalladas] = useState(["a", "b", "c"]);
  // const [letraInput, setletraInput] = useState("");
  // function cogerValor() {
  //   setletraInput(document.querySelector(".input-letra").value);
  //   return letraInput;
  //   // console.log(letraInput);
  // }
  const palabra = "perro";

  const [palabraObject, setpalabraObject] = useState(
    palabra.split("").map((letra, index) => {
      return {
        id: index,
        letra: letra,
        state: false,
      };
    })
  );

  const [letrasErrones, setletrasErrones] = useState([]);

  const [numeroFallos, setNumeroFallos] = useState(0);

  const introducirLetra = () => {
    const letraIntroducida = document.querySelector(".input-letra").value;
    let encontrado = false;
    const actualizarPalabra = palabraObject.map((letra, index) => {
      if (letra.letra === letraIntroducida) {
        encontrado = true;
        return {
          id: index,
          letra: letra.letra,
          state: true,
        };
      } else {
        return letra;
      }
    });

    if (encontrado === false) {
      letrasErrones.push({
        id: `Errones${letrasErrones.length}`,
        letra: letraIntroducida,
        state: true,
      });
      setletrasErrones(letrasErrones);
      setNumeroFallos(numeroFallos + 1);
    }

    setpalabraObject(actualizarPalabra);
  };

  return (
    <div className="App">
      <LetrasPalabras palabra={palabraObject} className="letrasPalabras" />
      <div>
        <Imput />
        <Boton textoBoton="Ingresar letra" eventoClick={introducirLetra} />
      </div>
      <div></div>
      <div>{<Ahorcado numeroFallos={numeroFallos} />}</div>
      <div>
        <LetrasPalabras palabra={letrasErrones} className="letrasPalabras" />
      </div>
    </div>
  );
}

export default App;
