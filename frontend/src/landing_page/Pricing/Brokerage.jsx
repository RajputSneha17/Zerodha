import React from "react";

const Brokerage = () => {
  return (
    <div className="container border-top py-5">
      <div className="row">
        {/* Left Side: Bullet Points */}
        <div className="col-lg-1"></div>
        <div className="col-md-8">
          <h3 className="text-center">
            <a href="#" className="text-primary text-decoration-none">
              Brokerage calculator
            </a>
          </h3>
          <ul className=" p-4" style={{fontSize: "15px"}}>
            <li >
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
