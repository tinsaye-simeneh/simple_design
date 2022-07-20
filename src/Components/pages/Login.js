import React from "react";
import Header from "../Navbar";
import AccountImg from "../../assets/images/Account/Account.jpg";

function Login() {
  return (
    <>
      <Header />
      <div className="container-fluid text-center">
        <div className="row mx-3">
          <div className="col-sm-6 HomeIllustration">
            <img
              src={AccountImg}
              alt="Home Illustration"
              width={600}
              height={500}
            />
          </div>

          <div
            className="col-sm-6 mt-4 textPadding"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form className="w-75">
              <div className="form-group mb-5">
                <h4>Login</h4>
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
                <button className="form-control">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
