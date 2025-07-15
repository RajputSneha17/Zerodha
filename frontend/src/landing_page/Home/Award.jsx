import React from "react";

const Award = () => {
  return (
    <div className="container">
      <div className="row p-4 align-items-center">
        {/* Left Side Image */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
          <img
            src="assets/largestBroker.svg"
            alt=""
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-12 col-lg-6">
          <h2 className="mt-3">Largest stock broker in India</h2>
          <p className="mt-3">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          {/* Two-column List */}
          <div className="row">
            <div className="col-6">
              <ul className="mb-4 ps-3">
                <li className="m-2">Future and Options</li>
                <li className="m-2">Commodity derivatives</li>
                <li className="m-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="mb-4 ps-3">
                <li className="m-2">Stocks & IPOs</li>
                <li className="m-2">Direct mutual funds</li>
                <li className="m-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="text-center text-lg-start mt-3">
            <img
              src="assets/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
