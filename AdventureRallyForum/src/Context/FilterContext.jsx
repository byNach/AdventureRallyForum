import { createContext, useState } from "react";
import { useAuth } from "../Context/AuthContext";

export const FilterContext = createContext();

export function FilterContextProvider(props) {
  const auth = useAuth();
  
  const [month, setMonth] = useState("");
  const [country, setCountry] = useState("");
  const [nav, setNav] = useState("");
  const [state, setState] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [onlyFilteredEvents, setOnlyFilteredEvents] = useState("");

  const Filtra = () => {
   
    const filteredEvents = auth.dataFromApi.record.filter((event) => {
      const monthMatch = !month || (event["START-MONTH"] === month || event["END-MONTH"] ===month);
      const countryMatch = !country || event["COUNTRY2"] === country || event["COUNTRY"] === country;
      const stateMatch = !state || event["STATE"] === state;
      const vehicleMatch =
        !vehicle ||
        event["ENDURO"] === vehicle ||
        event["TRAIL"] === vehicle ||
        event["ATV"] === vehicle;
      const navMatch = !nav || event["ROADBOOK"] === nav || event["GPS"] === nav;
  
      return monthMatch && countryMatch && stateMatch && vehicleMatch && navMatch;
    });
  
    if (filteredEvents.length === 0){
      console.log("No hay eventos");
    }
    setOnlyFilteredEvents(filteredEvents)
  };
  
  const selectionStates = {
    country,
    month,
    nav,
    state,
    vehicle,
    setCountry,
    setMonth,
    setNav,
    setState,
    setVehicle,
  };

  const eventsFilterPassed = onlyFilteredEvents;

  console.log(eventsFilterPassed);

  return (
    <FilterContext.Provider value={{ ...selectionStates, Filtra, eventsFilterPassed }}>
      {props.children}
    </FilterContext.Provider>
  );
}
