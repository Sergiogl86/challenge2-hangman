import PropTypes from "prop-types";

const Boton = ({ textoBoton, eventoClick }) => {
  return <button onClick={eventoClick}>{textoBoton}</button>;
};

Boton.propTypes = {
  textoBoton: PropTypes.string.isRequired,
  eventoClick: PropTypes.func.isRequired,
};

export default Boton;
