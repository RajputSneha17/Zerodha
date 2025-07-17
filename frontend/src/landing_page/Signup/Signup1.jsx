import React, { useState } from "react";

const Signup1 = () => {
  const [number, SetNumber] = useState("");
  console.log(number);
  return (
    <div>
      <div className="container">
        <div className="center">
          <h1 className="text-center pt-5 mt-5" style={{ fontSize: "45px" }}>
            Open a free demat and trading account online
          </h1>
          <p className="text-center p-3 pb-5 mb-3" style={{ fontSize: "20px" }}>
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>
        <div className="row">
          <div className="col-1"></div>

          <div className="col-md-5 text-center">
            <img src="assets/account_open.svg" alt="" className="img-fluid" />
          </div>

          <div className="col-md-5 p-5">
            <h1>Signup now</h1>
            <p className="p-2">Or track your existing application</p>

            <form action="">
            <div
              className="input-group custom-input-group w-100"
              style={{ maxWidth: "400px" }}
            >
              <span className="p-2 px-3 input-group-text fs-6">
                <img
                  src="assets/india-svgrepo-com.svg"
                  style={{ width: "30px" }}
                  alt="flag"
                />{" "}
                &nbsp;+91
              </span>
              <input
                type="number"
                className="form-control ps-4 py-3"
                placeholder="Enter your mobile number"
                onChange={(e) => SetNumber(Number(e.target.value))}
              />

            </div>
            <button type="submit"
              className="mt-4 btn btn-primary btn-lg"
              style={{ width: "250px" }}
            >
              Get OTP
            </button>
            </form>

            <p className="fs-6 pt-2">
              By proceeding, you agree to the Zerodha <a href="#">terms</a> &{" "}
              <a href="#">privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup1;
