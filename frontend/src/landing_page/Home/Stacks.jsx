import React from "react";

const Stacks = () => {
  const heading = [
    {
      heading: "Customer-first always",
      discription:
        "That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
    },
    {
      heading: "No spam or gimmicks",
      discription:
        "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.",
    },
    {
      heading: "The Zerodha universe",
      discription:
        "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      heading: "Do better with money ",
      discription:
        "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

  return (
    <div className="container">
      <div className="row p-4 d-flex align-items-center">
        {/* Left Column (Text) */}
        <div className="col-12 col-lg-6 p-4">
          <h2 className="mt-3 mb-4">Trust with confidence</h2>
          {heading.map((item, index) => (
            <div key={index} className="mb-4">
              <h5>{item.heading}</h5>
              <p>{item.discription}</p>
            </div>
          ))}
        </div>

        {/* Right Column (Image + Links) */}
        <div className="col-12 col-lg-6 text-center p-4">
          <img
            src="assets/ecosystem.png"
            alt=""
            className="img-fluid"
            style={{ maxWidth: "500px", width: "100%" }}
          />
          <div className="mt-4">
            <a href="#" className="d-block mb-2">
              Explore our Products <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href="#" className="d-block">
              Try Kite Demo <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
