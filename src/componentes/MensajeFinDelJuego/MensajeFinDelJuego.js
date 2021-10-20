import PropTypes from "prop-types";
import "./MensajeFinDelJuego.css";

const MensajeFinDelJuego = ({ mensaje }) => {
  return (
    <div className="fin-juego">
      <h2>{mensaje}</h2>
    </div>
  );
};

MensajeFinDelJuego.propTypes = {
  mensaje: PropTypes.string.isRequired,
};
export default MensajeFinDelJuego;
