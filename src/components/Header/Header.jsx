import React from "react";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import "./HeaderCommon.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <SearchBox />
    </div>
  );
};

export default Header;
