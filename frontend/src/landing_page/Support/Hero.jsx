import React from "react";

const Hero = () => {
  return (
    <div className="bg-primary text-white py-5 p-5">
      <div className="container p-5 m-5">
        <div className="d-flex justify-content-between align-items-start flex-wrap">
          {/* Left Section */}
          <div className="col-md-7">
            <h5 className="p-2">Support Portal</h5>
            <h3 className="fw-normal p-2">
              Search for an answer or browse help topics to create a ticket
            </h3>

            {/* Search Bar */}
            <div className="input-group my-4">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              />
              <span className="input-group-text bg-white">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>

            {/* Bottom Links */}
            <div className="d-flex flex-wrap gap-4">
              <a
                href="#"
                className="text-white border-bottom pb-1 text-decoration-none"
              >
                Track account opening
              </a>
              <a
                href="#"
                className="text-white border-bottom pb-1 text-decoration-none"
              >
                Track segment activation
              </a>
              <a
                href="#"
                className="text-white border-bottom pb-1 text-decoration-none"
              >
                Intraday margins
              </a>
              <a
                href="#"
                className="text-white border-bottom pb-1 text-decoration-none"
              >
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-4 mt-5 mt-md-0">
            <p className="fw-bold">Featured</p>
            <ol className="text-white-50">
              <li>
                <a href="#" className="pt-4 text-white text-decoration-underline">
                  Quarterly Settlement of Funds - July 2025
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className=" text-white text-decoration-underline">
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
