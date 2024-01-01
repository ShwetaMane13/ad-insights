import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown(props) {
  const { options, selected, setSelected } = props;

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 95 }}>
      <FormControl fullWidth>
        <Select
          style={{fontSize: "1.2rem"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((item) => {
            return <MenuItem key={item} value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
