import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const verifyOTP = async () => {
    try {
      const res = await axios.post("http://localhost:8000/verify-otp", { otp });
      navigate("/form");
    } catch (err) {
      toast.error("Invalid OTP");
    }
  };
  return (
    <div className="container m-5 " style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="p-2">Enter OTP</h2>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span> &nbsp; </span>}
        renderInput={(props) => (
          <input {...props} className="p-2" style={{width: "30px" }} />
        )}
      />
      <br />
      <div>
        <button className="btn btn-primary mt-3" onClick={verifyOTP}>Verify OTP</button>
      <Link to="/form">
        <button className="btn btn-secondary mt-3 ms-2">Skip</button>
      </Link></div>
    </div>
  );
};

export default Otp;
