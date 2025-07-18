import React from "react";

const Investment = () => {
  return (
    <div className="container text-center my-3 pb-5 pt-5">
      <h2 className="fw-semibold mb-5">
        Investment options with Zerodha demat account
      </h2>

      <div className="p-5 row g-5 justify-content-center">
        {/* Stocks */}
        <div className="col-md-4 d-flex align-items-start gap-3">
          <img src="assets/investmentImg1.svg" alt="Stocks" width={120} />
          <div className="text-start">
            <h3 className="fw-semibold">Stocks</h3>
            <p className="text-muted mb-0 fs-6 ">
              Invest in all exchange-listed securities
            </p>
          </div>
        </div>
        <div className="col-1"></div>

        {/* Mutual Funds */}
        <div className="col-md-4 d-flex align-items-start gap-3">
          <img src="assets/investmentImg2.svg" alt="Mutual funds" width={120} />
          <div className="text-start">
            <h3 className="fw-semibold">Mutual funds</h3>
            <p className="text-muted mb-0 fs-6">
              Invest in commission-free direct mutual funds
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 row g-5 justify-content-center">
        {/* IPO */}
        <div className="col-md-4 d-flex align-items-start gap-3">
          <img src="assets/investmentImg3.svg" alt="IPO" width={120} />
          <div className="text-start">
            <h3 className="fw-semibold">IPO</h3>
            <p className="text-muted mb-0 fs-6">
              Apply to the latest IPOs instantly via UPI
            </p>
          </div>
        </div>
        <div className="col-1"></div>

        {/* Futures & Options */}
        <div className="col-md-4 d-flex align-items-start gap-3">
          <img
            src="assets/investmentImg4.svg"
            alt="Futures & Options"
            width={120}
          />
          <div className="text-start">
            <h3 className="fw-semibold">Futures & options</h3>
            <p className="text-muted mb-0 fs-6">
              Hedge and mitigate market risk through simplified F&O trading
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Investment;
