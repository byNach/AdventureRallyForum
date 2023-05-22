import { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {FilterContext} from "../../Context/FilterContext";


const StateList = () => {
  const {state, setState} = useContext(FilterContext);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Comunidad autónoma
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Comunidad autónoma"
          onChange={handleChange}
        >
          <MenuItem defaultValue={""}>-Seleccionar-</MenuItem>
          <MenuItem value={"ANDALUCIA"}>Andalucía</MenuItem>
          <MenuItem value={"ARAGON"}>Aragón</MenuItem>
          <MenuItem value={"ASTURIAS"}>Asturias</MenuItem>
          <MenuItem value={"BALEARES"}>Baleares</MenuItem>
          <MenuItem value={"CANARIAS"}>Canarias</MenuItem>
          <MenuItem value={"CANTABRIA"}>Cantabria</MenuItem>
          <MenuItem value={"CASTILLAMANCHA"}>Castilla-La Mancha</MenuItem>
          <MenuItem value={"CASTILLALEON"}>Castilla y León</MenuItem>
          <MenuItem value={"CATALUNYA"}>Cataluña</MenuItem>
          <MenuItem value={"CEUTA"}>Ceuta</MenuItem>
          <MenuItem value={"VALENCIA"}>Comunidad Valenciana</MenuItem>
          <MenuItem value={"EXTREMADURA"}>Extremadura</MenuItem>
          <MenuItem value={"GALICIA"}>Galicia</MenuItem>
          <MenuItem value={"RIOJA"}>La Rioja</MenuItem>
          <MenuItem value={"MADRID"}>Madrid</MenuItem>
          <MenuItem value={"MELILLA"}>Melilla</MenuItem>
          <MenuItem value={"MURCIA"}>Murcia</MenuItem>
          <MenuItem value={"NAVARRA"}>Navarra</MenuItem>
          <MenuItem value={"PAISVASCO"}>País Vasco</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default StateList;
