import { createContext, useContext, useState } from "react";

export const FilterContext = createContext();

export function FilterContextProvider(props){

  const [country, setCountry] = useState("");
  const [month, setMonth] = useState("");
  const [nav, setNav] = useState("");
  const [state, setState] = useState("");
  const [vehicle, setVehicle] = useState("");

   const selectionStates = {country, month, nav, state, vehicle, setCountry, setMonth, setNav, setState, setVehicle};
   console.log((selectionStates));

  return (
    <FilterContext.Provider value={selectionStates}>
      {props.children}
    </FilterContext.Provider>
  )
}
