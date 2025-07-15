import React from "react";

const teamMembers = [
  {
    name: "Nikhil Kamath",
    role: "Chief Investment Officer",
    image: "assets/Nikhil.jpg",
  },
  {
    name: "Dr. Kailash Nadh",
    role: "CTO",
    image: "assets/Kailash.jpg",
  },
  {
    name: "Venu Madhav",
    role: "COO",
    image: "assets/Venu.jpg",
  },
  {
    name: "Hanan Delvi",
    role: "CCO",
    image: "assets/Hanan.jpg",
  },
  {
    name: "Seema Patil",
    role: "Director",
    image: "assets/Seema.jpg",
  },
  {
    name: "Karthik Rangappa",
    role: "Chief of Education",
    image: "assets/karthik.jpg",
  },
  {
    name: "Austin Prakesh",
    role: "Director Strategy",
    image: "assets/Austin.jpg",
  },
];

const Team = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">People</h2>

      {/* Founder Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-4 text-center mb-4 mb-lg-0">
          <img
            className="rounded-circle img-fluid"
            style={{ maxWidth: "250px" }}
            src="assets/nithinKamath.jpg"
            alt="Nithin Kamath"
          />
          <h5 className="pt-4">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>

        <div className="col-lg-8">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="row">
        {teamMembers.map((member, i) => (
          <div key={i} className="col-md-6 col-lg-4 text-center mb-5">
            <img
              className="rounded-circle img-fluid"
              style={{ maxWidth: "200px" }}
              src={member.image}
              alt={member.name}
            />
            <h6 className="pt-4">{member.name}</h6>
            <p>{member.role}</p>
            <p className="text-muted">
              bio <i className="fa-solid fa-angle-down"></i>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
