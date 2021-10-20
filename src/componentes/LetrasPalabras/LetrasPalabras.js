import MostrarLetra from "../MostrarLetra/MostrarLetra";

function LetrasPalabras({ palabra }) {
  console.log("LetrasPalabras");
  console.log(palabra);
  return (
    <div className="letrasPalabras">
      {palabra.map((letra) => (
        <MostrarLetra letra={letra} key={letra.id} />
      ))}
    </div>
  );
}

export default LetrasPalabras;
