import React from "react";
import "../style/Account.css";
import AccountImg from "../../assets/images/Account/Account.jpg";
import Forgot from "../modals/Forgot";

function handleLogin(e){
    e.preventDefault();
    alert("We have been reviewing your Requests, We will email you as soon as we finished the reviewing Process.");
    window.location.href = "/Home";
}

function Login() {
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
            <form className=" formWidth" onSubmit={handleLogin}>
              <div className="form-group mb-5 mt-3 ">
                <h4 style={{ textDecoration: "underline" }}>Login</h4>
              </div>
              <div className="form-group">
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
                <button
                  type="submit"
                  href='/login'
                  className="form-control"
                  style={{ backgroundColor: "#FF8D36", color: "white" }}
                >
                  Login
                </button>
              </div>
              <div className="mt-4">
                <span>
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    style={{ color: "#04BCAA", textDecoration: "none" }}
                  >
                    Signup
                  </a>
                </span>
                <br className="newLine" />
                    <Forgot/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
