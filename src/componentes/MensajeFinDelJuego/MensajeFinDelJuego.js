import PropTypes from "prop-types";

const MensajeFinDelJuego = ({ mensaje }) => {
  return (
    <div>
      <h2>{mensaje}</h2>
    </div>
  );
};

MensajeFinDelJuego.propTypes = {
  mensaje: PropTypes.string.isRequired,
};
export default MensajeFinDelJuego;
