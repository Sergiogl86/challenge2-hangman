function MostrarLetra({ letra }) {
  let valor = "#";
  console.log("MostrarLetra");
  console.log(letra);

  if (letra.state === false) {
    valor = "#";
  } else {
    valor = letra.letra;
  }

  return <div className="MostrarLetra">{valor}</div>;
}

export default MostrarLetra;
