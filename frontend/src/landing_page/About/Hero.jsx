import React from "react";

const Hero = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center pb-4">
        We pioneered the discount broking model in India. <br /> Now, we are
        breaking ground with our technology.
      </h2>
      <hr />
      <div className="row justify-content-center pt-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-5 mb-4 px-lg-3 px-2">
          <p>
            We kick-started operations on the 15th of August, 2010 <br /> with
            the goal of breaking all barriers that traders and <br /> investors
            face in India in terms of cost, support, and <br /> technology. We
            named the company Zerodha, a <br /> combination of Zero and "Rodha",
            the Sanskrit word for <br />
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house <br /> technology
            have made us the biggest stock broker in <br /> India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year <br />{" "}
            through our powerful ecosystem of investment <br /> platforms,
            contributing over 15% of all Indian retail <br /> trading volumes.
          </p>
        </div>
        <div className="col-lg-5 px-lg-3 px-2">
          <p className="fs-6">
            In addition, we run a number of popular open online <br />{" "}
            educational and community initiatives to empower retail <br />{" "}
            traders and investors.
          </p>
          <p>
            <span style={{ color: "#1a73e8" }}>Rainmatter</span>, our fintech
            fund and incubator, has invested <br /> in several fintech startups
            with the goal of growing the <br /> Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. <br /> Catch
            up on the latest updates on our{" "}
            <span style={{ color: "#1a73e8" }}>blog</span> or see what <br /> the
            media is <span style={{ color: "#1a73e8" }}>saying about us</span>{" "}
            or learn more about our <br /> business and product{" "}
            <span style={{ color: "#1a73e8" }}>philosophies</span>.
          </p>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Hero;
