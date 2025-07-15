import "./Hero.css";

const Hero = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center text-center p-5 ">
      <div className="row">
        <div className="col">
          <img
            src="assets/homeHero.png"
            alt="hero-img"
            className="mb-5 img-fluid"
            style={{ width: "100%", maxWidth: "50rem", minWidth: "25rem" }}
          />
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary btn-sm fs-6 mt-4 px-5 rounded-0">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
