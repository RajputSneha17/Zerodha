import React from "react";
import { Link } from "react-router-dom";

const Openaccount = () => {
  return (
    <div className="container mb-5 text-center">
      <div className="row p-5 justify-content-center">
        <div className="col-12 col-md-8">
          <h2 className="mt-3">Open a Zerodha account</h2>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <Link to="/signup">
            <button className="btn btn-primary btn-sm fs-6 mt-4 px-5 rounded-0">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Openaccount;
