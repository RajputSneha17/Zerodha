import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container p-5 mb-4 border-bottom">
        <h2 className="text-center mt-5">Pricing</h2>
        <p className="fs-6 p-2 text-center">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="container p-5">
        <div className="row justify-content-center text-center">
          <div className="col-md-4 p-4">
            <img src="assets/pricingMF.svg" className="img-fluid mb-3" alt="" />
            <h3>Free equity delivery</h3>
            <p className="fs-6">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-md-4 p-4">
            <img
              src="assets/intradayTrades.svg"
              className="img-fluid mb-3"
              alt=""
            />
            <h3>Intraday and F&O trades</h3>
            <p className="fs-6">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-md-4 p-4">
            <img src="assets/pricingMF.svg" className="img-fluid mb-3" alt="" />
            <h3>Free direct MF</h3>
            <p className="fs-6">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
