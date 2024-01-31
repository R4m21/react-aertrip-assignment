import React from "react";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="search-box-top">
        <div className="left">
          <div>
            Oneway <DownArrowIcon />
          </div>
          <div>
            2 Passenger <DownArrowIcon />
          </div>
          <div>
            Economy <DownArrowIcon />
          </div>
        </div>
        <div className="right">
          Recent Searches <DownArrowIcon />
        </div>
      </div>
      <div className="search-box-bottom">
        <div className="search-item">
          <div className="label">From</div>
          <div>
            <div className="input">Mumbai</div>
            <div className="input-abb">BOM</div>
          </div>
        </div>
        <div className="switch-icon-button">
          <img
            src="https://d2mccptxtk231d.cloudfront.net/v2_d_app/234/dist/96074ae900dc35f5d666.svg"
            alt="Aertrip"
          />
        </div>
        <div className="search-item">
          <div className="label">To</div>
          <div>
            <div className="input">Kolkata</div>
            <div className="input-abb">CCU</div>
          </div>
        </div>
        <div className="search-item">
          <div className="label">Depart</div>
          <div>
            <div className="input">
              30 Jan <span>Tue</span>
            </div>
            <div>
              <img
                src="https://d2mccptxtk231d.cloudfront.net/v2_d_app/234/dist/3c5ca6f04abcdd529061.svg"
                alt="Aertrip"
              />
              <img
                src="https://d2mccptxtk231d.cloudfront.net/v2_d_app/234/dist/3c5ca6f04abcdd529061.svg"
                alt="Aertrip"
              />
            </div>
          </div>
        </div>
        <div className="search-button">Search</div>
      </div>
    </div>
  );
};

export default SearchBox;
