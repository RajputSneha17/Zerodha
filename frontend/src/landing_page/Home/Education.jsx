import React from "react";

const Education = () => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-lg-6 mb-5">
          <img
            src="assets/education.svg"
            alt=""
            className="img-fluid "
            style={{ marginTop: "-30px" }}
          />
        </div>
        <div className="col-lg-6 mb-5">
          <h2 className="mb-4">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="mb-5">
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="">
            TradingQ&A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
