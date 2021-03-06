import React from "react";
import HomeIllustration from "../../assets/images/Home/HomeIllustration.png";
import HomeText from "./HomeText";
import "../style/Home.css";

function Home() {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row mx-3">
        <div className="col-sm-6 ImgDiv">
            <img
              className="ImgWidth"
              src={HomeIllustration}
              alt="Home Illustration"
            />
          </div>

          <div className="col-sm-6 textPadding">
            <h1>We Train</h1>
            <h1>Best Standards of</h1>
            <h1>Responsive Websites</h1>
            <h1>And Apps</h1>
            <p className="mt-3">{HomeText}</p>
            <span>
              Register Here:{" "}
              <a href="/signup">
              <button
              type="submit"
                className="btn"
                style={{ backgroundColor: "#FF8D36", color: "white" }}
              >
                Signup
              </button>
              </a>
            </span>
          </div>
          <div className="col-sm-6 HomeIllustration">
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
