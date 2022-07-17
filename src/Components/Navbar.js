import React from "react";
import logo from "../assets/images/Logo/Logo.png";
const navLeftElements = ["Home", "Source Code"];
const navRightElements = ["Login", "Signup"];

function Navbar() {
  return (
    <>
      <div
        className="container mt-2 text-center"
        style={{ border: "2px solid #103037" }}
      >
        <div className="row">
          <div className="col-sm-4" style={{ backgroundColor: "yellow" }}>
            <ul className="col-6" style={{ listStyleType: "none" }}>
              <li>{navLeftElements[0]}</li>
            </ul>
          </div>
          <div className="col-sm-4" style={{ backgroundColor: "yellow" }}>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
