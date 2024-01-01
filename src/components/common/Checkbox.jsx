import image from "../../assets/titles-lhs.png";
const Checkbox = (props) => {
  const { text, state, handleCheckboxChange } = props;
  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        type="checkbox"
        checked={state}
        onChange={() => handleCheckboxChange(text)}
      />

      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="checkbox-text">
        <label>Create</label>
        <label className="checkbox-text__option">{text} Ad</label>
      </div>
    </div>
  );
};

export default Checkbox;
