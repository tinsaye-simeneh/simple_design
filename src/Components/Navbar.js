import React from "react";
import '../Components/navBar.css';
import logo from "../assets/images/Logo/Logo.png";
const navLeftElements = ["Home", "Source Code"];
const navRightElements = ["Login", "Signup"];


function Navbar() {
  return (
    <>
      <div className="container mt-4 text-center">
        <div className="row align-items-center">
          <div className="col-sm-4">
            {navLeftElements.map((element, index) => {
              return (
                <>
                  <a
                    key={index}
                    className="linkStyle px-3 mx-3"
                    href={element}
                  >
                    {element}
                  </a>
                </>
              );
            })}
          </div>
          <div className="col-sm-4">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-sm-4">
            {navRightElements.map((element, index) => {
              return (
                <>
                  <a
                    key={index}
                    className="linkStyle px-3 mx-3"
                    href={element}
                  >
                    {element}
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
