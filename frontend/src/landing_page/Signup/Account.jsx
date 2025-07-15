import React from "react";

const Account = () => {
  return (
    <div className="p-5 bg-light">
      <h2 className="pt-2 text-center pb-5">
        Steps to open a demat account with Zerodha
      </h2>

      <div className="row align-items-center justify-content-center">
        <div className="col-md-5 text-center">
          <img
            src="assets/steps-acop.svg"
            alt=""
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        <div className="p-3  col-md-5">
          <div className="mb-4 d-flex align-items-center">
            <span className="border" style={{borderRadius:"50%", padding:"5px"}}>01</span>
            <h5 className="mb-0 ms-3 fw-bold">Enter the requested details</h5>
          </div>
          <hr />
          <div className="mb-4 d-flex align-items-center">
            <span className="border" style={{borderRadius:"50%", padding:"5px"}}>02</span>
            <h5 className="mb-0 ms-3 fw-bold">Complete e-sign & verification</h5>
          </div>
          <hr />
          <div className="mb-4 d-flex align-items-center">
            <span className="border" style={{borderRadius:"50%", padding:"5px"}}>03</span>
            <h5 className="mb-0 ms-3 fw-bold">Start investing!</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
