import { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {FilterContext} from "../../Context/FilterContext";


const VehicleList = () => {
  const {vehicle, setVehicle} = useContext(FilterContext);

  const handleChange = (event) => {
    setVehicle(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo de vehículo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vehicle}
          label="Tipo de vehículo"
          onChange={handleChange}
        >
          <MenuItem defaultValue={""}>-Seleccionar-</MenuItem>
          <MenuItem value={"ENDURO"}><img className="searcher-icons" src="../../src/Assets/Images/Icons/motocross-b.png"></img>Enduro</MenuItem>
          <MenuItem value={"TRAIL"}><img className="searcher-icons" src="../../src/Assets/Images/Icons/adv-icon-b.png"></img>Trail</MenuItem>
          <MenuItem value={"ATV"}><img className="searcher-icons" src="../../src/Assets/Images/Icons/atv-b.png"></img>ATV</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default VehicleList;
