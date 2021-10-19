const Imput = () => {
  return (
    <input
      className="input-letra"
      type="text"
      maxLength="1"
      pattern="[A-Za-z]"
      required
    />
  );
};

export default Imput;
