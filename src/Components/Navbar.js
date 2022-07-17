import React from "react";
import logo from "../assets/images/Logo/Logo.png";
const navLeftElements = ["Home", "Source Code"];
const navRightElements = ["Login", "Signup"];

function Navbar() {
    function navElementController({arrName}) {
        arrName.map((element, index) => {
            console.log(element);
            return (
              <a key={index} className="p-5" href={element} style={{textDecoration:'none', color:'black'}}>
                {element}
              </a>
            );
          })
    }
  return (
    <>
      <div
        className="container mt-3 text-center"
      >
        <div className="row">
          <div className="col-sm-4 mt-4">
            {navElementController({arrName: navLeftElements}) }
          </div>
          <div className="col-sm-4">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-sm-4 mt-4">
          {navElementController({arrName: navRightElements})}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
