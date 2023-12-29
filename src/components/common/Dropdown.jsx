import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown(props) {
  const { options, selected, setSelected } = props;
  //   const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Metric</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="Metric"
          onChange={handleChange}
        >
          {options.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
