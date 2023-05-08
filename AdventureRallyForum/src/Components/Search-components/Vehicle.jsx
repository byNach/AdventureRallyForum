import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const VehicleList = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo de vehículo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Tipo de vehículo"
          onChange={handleChange}
        >
          <MenuItem value={null}>-Seleccionar-</MenuItem>
          <MenuItem value={1}>Trail</MenuItem>
          <MenuItem value={2}>Enduro</MenuItem>
          <MenuItem value={3}>ATV</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default VehicleList;
