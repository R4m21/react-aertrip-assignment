import React from "react";
import FilterBox from "./FilterBox";
import FlightResult from "./FlightResult";
import "./MainContentCommon.css";

const MainContent = () => {
  return (
    <div className="main-content-container">
      <FilterBox />
      <FlightResult />
    </div>
  );
};

export default MainContent;
