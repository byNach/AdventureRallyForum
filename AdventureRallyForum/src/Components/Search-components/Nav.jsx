import { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {FilterContext} from "../../Context/FilterContext";


const NavList = () => {
  const {nav, setNav} = useContext(FilterContext);

  const handleChange = (event) => {
    setNav(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Navegación</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nav}
          label="Navegación"
          onChange={handleChange}
        >
          <MenuItem defaultValue={""}>-Seleccionar-</MenuItem>
          <MenuItem value={"GPS"}><img className="searcher-icons" src="../../src/Assets/Images/Icons/smartphone-b.png"></img>GPS</MenuItem>
          <MenuItem value={"ROADBOOK"}><img className="searcher-icons" src="../../src/Assets/Images/Icons/roadbook-b.png"></img>Roadbook</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NavList;
