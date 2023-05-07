import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StateList = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
          value={age}
          label="Comunidad autónoma"
          onChange={handleChange}
        >
          <MenuItem value={1}>Andalucía</MenuItem>
          <MenuItem value={2}>Aragón</MenuItem>
          <MenuItem value={3}>Asturias</MenuItem>
          <MenuItem value={4}>Baleares</MenuItem>
          <MenuItem value={5}>Canarias</MenuItem>
          <MenuItem value={6}>Cantabria</MenuItem>
          <MenuItem value={7}>Castilla-La Mancha</MenuItem>
          <MenuItem value={8}>Castilla y León</MenuItem>
          <MenuItem value={9}>Cataluña</MenuItem>
          <MenuItem value={10}>Ceuta</MenuItem>
          <MenuItem value={11}>Comunidad Valenciana</MenuItem>
          <MenuItem value={12}>Extremadura</MenuItem>
          <MenuItem value={13}>Galicia</MenuItem>
          <MenuItem value={14}>La Rioja</MenuItem>
          <MenuItem value={15}>Madrid</MenuItem>
          <MenuItem value={16}>Melilla</MenuItem>
          <MenuItem value={17}>Murcia</MenuItem>
          <MenuItem value={18}>Navarra</MenuItem>
          <MenuItem value={19}>País Vasco</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default StateList;
