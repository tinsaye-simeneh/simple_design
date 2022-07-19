import React from "react";
import "../Components/navBar.css";
import logo from "../assets/images/Logo/Logo.png";
const navElements = ["Home", "SourceCode", "Login", "Signup"];

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container mt-3">
        <div className="col-sm-8">
              <img src={logo} alt="logo" />
            </div>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            onClick={console.log("clicked")}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">

            <div className="col-sm-4">
              {navElements.map((element, index) => {
                return (
                  <>
                    <a
                      key={index}
                      className="linkStyle px-3 mx-2"
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
      </nav>
    </>
  );
}

export default Navbar;
