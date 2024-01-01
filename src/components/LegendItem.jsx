const LegendItem = (props) => {
  const { color, label } = props;
  return (
    <div className="legend-item">
      <div
        className="legend-item__color-box"
        style={{ backgroundColor: color }}
      ></div>
      <label>{label}</label>
    </div>
  );
};

export default LegendItem;
