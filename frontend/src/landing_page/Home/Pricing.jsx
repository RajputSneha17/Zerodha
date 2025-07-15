import React from "react";

const Pricing = () => {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-lg-6 col-md-12 mb-4">
          <h2 className="mb-3">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="">
            See pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="row">
            <div className="col-md-6 col-12 border p-3 text-center mb-3 mb-md-0">
              <h2>₹0</h2>
              <p>Free equity delivery and <br /> direct mutual funds</p>
            </div>
            <div className="col-md-6 col-12 border p-3 text-center">
              <h2>₹20</h2>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
