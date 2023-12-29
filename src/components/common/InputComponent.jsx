const Input = (props) => {
  const { heading, placeholder } = props;
  return (
    <section className="form__input">
      <section className="form__input-heading">{heading}</section>
      <input
        className="form__input-field"
        type="text"
        placeholder={placeholder}
      />
    </section>
  );
};

export default Input;
