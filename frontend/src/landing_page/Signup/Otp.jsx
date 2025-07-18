import { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";

const Otp = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="container m-5 " style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
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
      <div><button className="btn btn-primary mt-3">Verify OTP</button>
      <Link to="/form">
        <button className="btn btn-secondary mt-3 ms-2">Skip</button>
      </Link></div>
    </div>
  );
};

export default Otp;
