import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CountryList = () => {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 160, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">País</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="País"
          onChange={handleChange}
        >
          <MenuItem value={null}>-Seleccionar-</MenuItem>
          <MenuItem value={"SPAIN"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/spain.png"
            ></img>
            España
          </MenuItem>
          <MenuItem value={"PORTUGAL"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/portugal.png"
            ></img>
            Portugal
          </MenuItem>
          <MenuItem value={"MOROCCO"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/morocco.png"
            ></img>
            Marruecos
          </MenuItem>
          <MenuItem value={"TUNISIA"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/tunisia.png"
            ></img>
            Tunez
          </MenuItem>
          <MenuItem value={"EMIRATES"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/emiratos.png"
            ></img>
            Emiratos
          </MenuItem>
          <MenuItem value={"SENEGAL"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/senegal.png"
            ></img>
            Senegal
          </MenuItem>
          <MenuItem value={"ALBANIA"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/albania.png"
            ></img>
            Albania
          </MenuItem>
          <MenuItem value={"ITALIA"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/italia.png"
            ></img>
            Italia
          </MenuItem>
          <MenuItem value={"GREECE"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/greece.png"
            ></img>
            Grecia
          </MenuItem>
          <MenuItem value={"ROMANIA"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/romania.png"
            ></img>
            Rumania
          </MenuItem>
          <MenuItem value={"MEXICO"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/mexico.png"
            ></img>
            Méjico
          </MenuItem>
          <MenuItem value={"FRANCE"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/france.png"
            ></img>
            Francia
          </MenuItem>
          <MenuItem value={"POLAND"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/poland.png"
            ></img>
            Polonia
          </MenuItem>
          <MenuItem value={"BOSNIA"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/bosnia.png"
            ></img>
            Bosnia
          </MenuItem>
          <MenuItem value={"CROATIA"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/croatia.png"
            ></img>
            Croacia
          </MenuItem>
          <MenuItem value={"ARGENTINA"}>
            <img
              className="searcher-icons"
              src="../../src/Assets/Images/Icons/argentina.png"
            ></img>
            Argentina
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CountryList;
