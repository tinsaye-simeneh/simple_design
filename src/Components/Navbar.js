import React from "react";
import "../Components/navBar.css";
import logo from "../assets/images/Logo/Logo.png";
const navLeftElements = ["Home", "SourceCode"];
const navRightElements = ["Login", "Signup"];

function Navbar() {
  return (
    <>
      <div className="container mt-4 text-center main">
        <div className="row align-items-center" style={{display: { sm: "none", md: "none" }}}>
          <div className="col-sm-4">
            {navLeftElements.map((element, index) => {
              return (
                <>
                  <a key={index} className="linkStyle px-3 mx-5" href={element}>
                    {element}
                  </a>
                </>
              );
            })}
          </div>
          <div className="col-sm-4 ps-5">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-sm-4">
            {navRightElements.map((element, index) => {
              return (
                <>
                  <a key={index} className="linkStyle pe-4 mx-5" href={element}>
                    {element}
                  </a>
                </>
              );
            })}
          </div>
        </div>
        <div className="row mt-3">
            <hr/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
