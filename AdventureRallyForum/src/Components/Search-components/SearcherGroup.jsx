import * as React from "react";
import MonthList from "./Month";
import CountryList from "./Country";
import StateList from "./State";
import VehicleList from "./Vehicle";
import NavList from "./Nav";
import "../../assets/Styles/Styled-components/Searcher-style.css";

const SearcherGroup = () => {
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
        <button className="Filter-button">Filtrar</button>
      </div>
    </div>
  );
};

export default SearcherGroup;
