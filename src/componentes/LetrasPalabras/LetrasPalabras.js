import PropTypes from "prop-types";
const LetraPalabra = ({ letraPalabra }) => {
  return <div className="letra-incognita">{letraPalabra}</div>;
};

LetraPalabra.propTypes = {
  letraPalabra: PropTypes.string.isRequired,
};

export default LetraPalabra;
