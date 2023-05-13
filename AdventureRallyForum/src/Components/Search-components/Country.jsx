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
          <MenuItem value={null}>-Seleccionar-</MenuItem>
          <MenuItem value={1}><img className="searcher-icons" src="../../src/Assets/Images/Icons/spain.png"></img>España</MenuItem>
          <MenuItem value={2}><img className="searcher-icons" src="../../src/Assets/Images/Icons/portugal.png"></img>Portugal</MenuItem>
          <MenuItem value={3}><img className="searcher-icons" src="../../src/Assets/Images/Icons/morocco.png"></img>Marruecos</MenuItem>
          <MenuItem value={4}><img className="searcher-icons" src="../../src/Assets/Images/Icons/tunisia.png"></img>Tunez</MenuItem>
          <MenuItem value={5}><img className="searcher-icons" src="../../src/Assets/Images/Icons/emiratos.png"></img>Emiratos</MenuItem>
          <MenuItem value={6}><img className="searcher-icons" src="../../src/Assets/Images/Icons/senegal.png"></img>Senegal</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CountryList;
