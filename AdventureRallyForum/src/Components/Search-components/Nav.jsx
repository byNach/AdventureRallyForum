import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const NavList = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Navegación</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Navegación"
          onChange={handleChange}
        >
          <MenuItem value={null}>-Seleccionar-</MenuItem>
          <MenuItem value={1}><img className="searcher-icons" src="../../src/Assets/Images/Icons/smartphone-b.png"></img>GPS</MenuItem>
          <MenuItem value={2}><img className="searcher-icons" src="../../src/Assets/Images/Icons/roadbook-b.png"></img>Roadbook</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NavList;
