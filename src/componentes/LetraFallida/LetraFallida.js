import PropTypes from "prop-types";

const LetraFallida = ({ letra }) => {
  return (
    <div>
      <p>{letra}</p>
    </div>
  );
};
LetraFallida.propTypes = {
  letra: PropTypes.array.isRequired,
};

export default LetraFallida;
