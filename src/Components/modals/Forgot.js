import React, { useState } from "react";
import Modal from "react-modal";
import "../style/Account.css";

function Forgot() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };


  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        data-target="#myModal"
        data-toggle="modal"
        data-backdrop="static"
        data-keyboard="false"
        style={{
          backgroundColor: "white",
          color: "#04BCAA",
          textDecoration: "none",
          border: "none",
        }}
        className="linkStyle"
      >
        Forgot Password
      </button>

      <Modal
      onClose={(_, reason) => {
        if (reason !== "backdropClick") {
          handleClose();
        }
      }}
        isOpen={isOpen}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
      >
        {" "}
        <div className="row mx-3 mt-5">
          <div className="container-fluid text-center">
            <div
              className="col-sm-12"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <form className="forgotFormWidth">
                <div className="form-group mb-4">
                  <h5 style={{ textDecoration: "underline" }}>
                    Forgot Password
                  </h5>
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
                  <button
                    type="submit"
                    className="form-control"
                    style={{ backgroundColor: "#FF8D36", color: "white" }}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <button className="btn mt-4" onClick={handleClose}>
              Close modal
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Forgot;
