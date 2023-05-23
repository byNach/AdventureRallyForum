import { useContext } from "react";
import MonthList from "./Month";
import CountryList from "./Country";
import StateList from "./State";
import VehicleList from "./Vehicle";
import NavList from "./Nav";
import { FilterContext } from "../../Context/FilterContext";
import "../../assets/Styles/Styled-components/Searcher-style.css";

const SearcherGroup = () => {
  const { Reset, Filtra } = useContext(FilterContext);

  const handleClickFiltra = () => {
    Filtra();
  };

  const handleClickReset = () => {
    Reset();
  };

  return (
    <div className="Group-base">
      <div className="Group-title">Buscador de eventos</div>
      <div className="Group-filter-box">
        <MonthList />
        <CountryList />
        <StateList />
        <VehicleList />
        <NavList />
      </div>
      <div className="Filter-button-box">
      <button className="Reset-button" onClick={handleClickReset}>
          Reset
        </button>
        <button className="Filter-button" onClick={handleClickFiltra}>
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default SearcherGroup;
