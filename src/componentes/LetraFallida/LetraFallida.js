import PropTypes from "prop-types";
import "./LetraFallida.css";

const LetraFallida = ({ letra }) => {
  return (
    <div className="letras-falladas">
      <p>{letra}</p>
    </div>
  );
};
LetraFallida.propTypes = {
  letra: PropTypes.array.isRequired,
};

export default LetraFallida;
