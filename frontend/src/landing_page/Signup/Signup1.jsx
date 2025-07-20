import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInWithPhone = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const sendOTP = async () => {
    try {
      await axios.post("http://localhost:8000/send-otp", { email });
    } catch (err) {
      alert(
        "The email you entered seems incorrect. If you don't want to receive an OTP, you can skip. Otherwise, please try again."
      );
    }
  };

  const emailSender = async () => {
  try {
    const res = await axios.post("http://localhost:8000/email", {
      email: email,
    });

    const token = res.data.token;
    localStorage.setItem("signup_token", token);

    await sendOTP();

    navigate("/otp");

  } catch (error) {
    console.log(error);

    if (error.response?.status === 409) {
      alert("Email already exists ❌");
    } else {
      alert(
        "The email you entered seems incorrect. If you don't want to receive an OTP, you can skip. Otherwise, please try again."
      );
    }
  }
};


  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
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

            <div
              className="input-group custom-input-group w-100"
              style={{ maxWidth: "400px" }}
            >
              <span className="p-2 px-3 input-group-text fs-6">
                <i className="fa-regular fa-envelope fs-2"></i>
                &nbsp;
              </span>
              <input
                type="email"
                className="form-control ps-4 py-3"
                placeholder="Enter your Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="mt-4 btn btn-primary btn-lg"
              style={{ width: "250px" }}
              onClick={emailSender}
            >
              Get OTP
            </button>

            <p className="fs-6 pt-2">
              Already have an account? <Link to="/loginform">Click here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInWithPhone;
