import { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {FilterContext} from "../../Context/FilterContext";


const MonthList = () => {
  const {month, setMonth} = useContext(FilterContext);


  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: 1}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Mes"
          onChange={handleChange}
        >
          <MenuItem defaultValue={""}>-Seleccionar-</MenuItem>
          <MenuItem value={"ENE"}>Enero</MenuItem>
          <MenuItem value={"FEB"}>Febrero</MenuItem>
          <MenuItem value={"MAR"}>Marzo</MenuItem>
          <MenuItem value={"ABR"}>Abril</MenuItem>
          <MenuItem value={"MAY"}>Mayo</MenuItem>
          <MenuItem value={"JUN"}>Junio</MenuItem>
          <MenuItem value={"JUL"}>Julio</MenuItem>
          <MenuItem value={"AGO"}>Agosto</MenuItem>
          <MenuItem value={"SEP"}>Septiembre</MenuItem>
          <MenuItem value={"OCT"}>Octubre</MenuItem>
          <MenuItem value={"NOV"}>Noviembre</MenuItem>
          <MenuItem value={"DIC"}>Diciembre</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MonthList;
