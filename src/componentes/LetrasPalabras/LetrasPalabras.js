import PropTypes from "prop-types";
import "./LetraPalabra.css";

const LetraPalabra = ({ letraPalabra }) => {
  return (
    <div className="contenedor-ahorcado__contenedor-letra">
      <p lassName="contenedor-ahorcado__letra">{letraPalabra}</p>
    </div>
  );
};

// LetraPalabra.propTypes = {
//   letraPalabra: PropTypes.objectOf.isRequired,
// };

export default LetraPalabra;
