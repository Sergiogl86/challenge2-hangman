import PropTypes from "prop-types";
import "./Boton.css";

const Boton = ({ textoBoton, eventoClick, clase }) => {
  return (
    <button className={clase} onClick={eventoClick}>
      {textoBoton}
    </button>
  );
};

Boton.propTypes = {
  textoBoton: PropTypes.string.isRequired,
  eventoClick: PropTypes.func.isRequired,
};

export default Boton;
