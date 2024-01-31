import React from "react";
import FligtCard from "./FligtCard";
import InfoIcon from "../../assets/icons/InfoIcon";
import { useSelector } from "react-redux";

const FlightResult = () => {
  const flightDataResult = useSelector((state) => state.flightResults);
  return (
    <div className="flight-result-container">
      <div className="flight-count-sc">
        <div className="flight-count">
          <span>{flightDataResult?.j?.length}</span>
          <span>of</span>
          <span>{flightDataResult?.j_count} flights</span>
        </div>
        <div className="smart-choice-label">
          <span>smart choice</span>
          <InfoIcon />
        </div>
      </div>
      <div className="fligt-list-container">
        {flightDataResult &&
          flightDataResult?.j?.length &&
          flightDataResult?.j.map((flightData, index) => (
            <FligtCard key={index} flightData={flightData} />
          ))}
      </div>
    </div>
  );
};

export default FlightResult;
