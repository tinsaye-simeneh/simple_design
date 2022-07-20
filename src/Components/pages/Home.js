import React from "react";
import Header from "../Navbar";
import HomeIllustration from "../../assets/images/Home/HomeIllustration.png";
import HomeText from "./HomeText";
import "../style/Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 textPadding">
            <h1>We Train</h1>
            <h1>Best Standards of</h1>
            <h1>Responsive Websites</h1>
            <h1>Best Standards of</h1>
            <p className="mt-3">{HomeText}</p>
            <span>
              Register Here:{" "}
              <button className="btn" style={{backgroundColor:'#FF8D36', color:'white'}}>Contact Us</button>
            </span>
          </div>
          <div className="col-md-6 ps-5 HomeIllustration">
            <img
              src={HomeIllustration}
              alt="Home Illustration"
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
