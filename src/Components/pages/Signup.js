import React from "react";
import "../style/Account.css";
import AccountImg from "../../assets/images/Account/Account.jpg";

function handleSubmit(e){
    e.preventDefault();
    alert("Registration Successful");
    window.location.href = "/Login";
}

function Signup() {
  return (
    <>
      <div className="container-fluid text-center mb-5">
        <div className="row mx-3 mt-5">
          <div className="col-sm-6">
            <img
              className="ImgWidth"
              src={AccountImg}
              alt="Account Illustration"
            />
          </div>

          <div
            className="col-sm-6 mt-4"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form className=" formWidth" onSubmit={handleSubmit}>
              <div className="form-group mb-5 mt-3 ">
                <h4 style={{ textDecoration: "underline" }}>Signup</h4>
              </div>
              <div className="form-group">
                <input
                  type="username"
                  className="form-control"
                  id="exampleInputUsername1"
                  aria-describedby="usernameHelp"
                  placeholder="Enter Username"
                  required
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="passwordHelp"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="Confirmpassword"
                  className="form-control"
                  id="exampleInputconfirmPassword1"
                  aria-describedby="confirmpasswordHelp"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="form-group mt-4">
                <button
                  type="submit"
                  className="form-control"
                  style={{ backgroundColor: "#FF8D36", color: "white" }}
                >
                  Signup
                </button>
              </div>
              <div className="mt-4">
                <span>
                  Already have an account?{" "}
                  <a
                    href="/Login"
                    style={{ color: "#04BCAA", textDecoration: "none" }}
                  >
                    Login
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
