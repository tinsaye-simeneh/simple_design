import React from "react";
import "../style/Login.css";
import AccountImg from "../../assets/images/Account/Account.jpg";

function Login() {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row mx-3 mt-5">
          <div className="col-sm-6">
            <img
              className="ImgWidth"
              src={AccountImg}
              alt="Login Illustration"
            />
          </div>

          <div
            className="col-sm-6 mt-4"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form className=" formWidth">
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
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="passwordHelp"
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group mt-4">
                <button
                  className="form-control"
                  style={{ backgroundColor: "#FF8D36", color: "white" }}
                >
                  Login
                </button>
              </div>
              <div className="mt-4">
                <span>
                  Don't have an account? <a href="/Signup">Signup</a>
                  </span>
                  <br className="newLine"/>
                  <span className="linkStyle">forgot password?</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
