const Checkbox = (props) => {
  const { text, state, handleCheckboxChange } = props;
  return (
    <section
      onClick={(e) => handleCheckboxChange(text, e.target.innerText)}
      className="checkbox-container"
    >
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={state}
          onChange={(e) => handleCheckboxChange(text, e.target.checked)}
        />
        {text}
      </label>
      <section
        className="checkbox-text"
      >
        <span>Create {text} Ad</span>
      </section>
    </section>
  );
};

export default Checkbox;
