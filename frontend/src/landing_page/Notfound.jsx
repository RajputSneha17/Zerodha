import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-6 p-5">
            <h3 className="pt-5">404</h3>
            <h1 className="pt-2">
              Kiaan couldn’t find <br /> that page
            </h1>
            <p className="pt-2 fs-4">
              We couldn’t find the page you were looking <br /> for. Visit{" "}
              <Link to="/">Zerodha’s home page</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
