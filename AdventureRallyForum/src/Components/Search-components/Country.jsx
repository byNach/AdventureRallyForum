import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CountryList = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 160, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">País</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="País"
          onChange={handleChange}
        >
          <MenuItem value={1}>España</MenuItem>
          <MenuItem value={2}>Portugal</MenuItem>
          <MenuItem value={3}>Marruecos</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CountryList;
