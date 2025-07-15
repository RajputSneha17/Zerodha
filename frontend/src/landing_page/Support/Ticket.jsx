import React from "react";

const Ticket = () => {
  const ticketSections1 = [
    {
      title: "Account Opening",
      icon: "p-3 fa-regular fa-square-plus",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "p-3 fa-regular fa-user",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "p-3 fa-solid fa-chart-simple",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
  ];
  const ticketSections2 = [
    {
      title: "Funds",
      icon: "p-3 fa-solid fa-wallet",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: "p-3 fa-brands fa-algolia",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: "p-3 fa-solid fa-cookie",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container ">
      <h3 className="pt-5 mt-4 px-6 ps-5">To create a ticket, select a relevant topic</h3>
      <div className="row p-5">
        <div className="col-1"></div>
        {ticketSections1.map((section, index) => (
          <div className=" col-3" key={index}>
            <h5 className="fw-bold">
              <i className={section.icon}></i>
              {section.title}
            </h5>
            <ul className="list-unstyled p-3">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-primary text-decoration-none d-block mb-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="row p-5">
        <div className="col-1"></div>
        {ticketSections2.map((section, index) => (
          <div className="col-3" key={index}>
            <h5 className="fw-bold ">
              <i className={section.icon}></i>
              {section.title}
            </h5>
            <ul className="list-unstyled mt-3 p-3">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-primary text-decoration-none fs-6 d-block mb-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
