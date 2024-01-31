import React from "react";
import LogoIcon from "../../assets/icons/LogoIcon";
import SunIcon from "../../assets/icons/SunIcon";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <LogoIcon />
      </div>
      <div className="nav-center">
        <div className="">FLIGHT</div>
        <div className="">HOTEL</div>
        <div className="">VISA</div>
        <div className="">HOLIDAYS</div>
      </div>
      <div className="nav-right">
        <div className="">
          <SunIcon />
        </div>
        <div className="">TRIPS</div>
        <div className="">
          <img src="https://www.shutterstock.com/image-photo/seattle-washington-usa-march-31-260nw-2284495463.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
