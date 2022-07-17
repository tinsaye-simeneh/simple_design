import React from "react";
import logo from "../assets/images/Logo/Logo.png";
const navLeftElements = ["Home", "Source Code"];
const navRightElements = ["Login", "Signup"];

function Navbar() {
  return (
    <>
      <div className="container" style={{backgroundColor:'yellow'}}>
        <img src={logo} alt="logo" />
      </div>
    </>
  );
}

export default Navbar;
