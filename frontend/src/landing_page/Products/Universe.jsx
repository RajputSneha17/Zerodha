import React from "react";

const teamMembers = [
  {
    image: "assets/zerodhaFundhouse.png",
    text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    image: "assets/sensibullLogo.svg",
    text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    image: "assets/goldenpiLogo.png",
    text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more ",
  },
  {
    image: "assets/streakLogo.png",
    text: "Systematic trading platform that allows you to create and backtest strategies without coding ",
  },
  {
    image: "assets/smallcaseLogo.png",
    text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs ",
  },
  {
    image: "assets/dittoLogo.png",
    text: "Personalized advice on life and health insurance. No spam and no mis-selling ",
  },
];

const Universe = () => {
  return (
    <div className="container text-center p-5">
      <h5 className="p-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </h5>
      <h1 className="pt-5">The Zerodha Universe</h1>
      <p className="p-3 mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="p-5">
        {teamMembers.map((member, index) => {
          if (index % 3 === 0) {
            const group = teamMembers.slice(index, index + 3);
            return (
              <div className="row justify-content-center mb-5" key={index}>
                {group.map((person, i) => (
                  <React.Fragment key={i}>
                    {/* Space between cards only on md and up */}
                    {i > 0 && (
                      <div className="d-none d-md-block col-md-1"></div>
                    )}
                    <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
                      <img
                        style={{ width: "100%", maxWidth: "200px" }}
                        src={person.image}
                        alt={person.name}
                      />
                      <p style={{ fontSize: "10px" }}>{person.text}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Universe;
