import React from "react";
import FlightIcon from "../../assets/icons/FlightIcon";
import MoreIcon from "../../assets/icons/MoreIcon";
import BagIcon from "../../assets/icons/BagIcon";
import ScoreIcon from "../../assets/icons/ScoreIcon";
import SeatIcon from "../../assets/icons/SeatIcon";
import { secondsToHms } from "../../helper/misc";

const FligtCard = ({ flightData }) => {
  return (
    <div className="fiight-card-box">
      <div className="card-header">
        <div className="card-heder-left">
          <FlightIcon />
          <span>{flightData.leg[0].flights[0].al}</span>
        </div>
        <div className="card-heder-center">
          <div className="top">
            <span>{flightData.leg[0].flights[0].dt}</span>
            <span>{secondsToHms(flightData.leg[0].flights[0].ft)}</span>
            <span>{flightData.leg[0].flights[0].at}</span>
          </div>
          <div className="bottom">
            <span>
              {flightData.leg[0].flights[0].fr} <span>T1</span>
            </span>
            <span></span>
            <span>
              {flightData.leg[0].flights[0].to} <span>T2</span>
            </span>
          </div>
        </div>
        <div className="card-heder-right">
          <div className="left">
            <span>₹</span> {flightData.farepr}
          </div>
          <div className="center">View Fires</div>
          <div className="right">
            <MoreIcon />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="score-bag-icon">
          <span>
            <ScoreIcon />
            10.0
          </span>
          <span>
            <BagIcon />
            <span>1pc</span>
          </span>
        </div>
        <div className="seat-icon">
          {flightData.seats}
          <SeatIcon />
        </div>
      </div>
    </div>
  );
};

export default FligtCard;
