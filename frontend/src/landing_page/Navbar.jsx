import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, SetActive] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top py-3">
        <div className="container px-3 px-md-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              SetActive("logo");
              setShowMenu(false);
            }}
            className="navbar-brand"
          >
            <img
              src="assets/logo.svg"
              alt="Zerodha"
              style={{ width: "120px" }} // Slightly reduced width for tighter spacing
            />
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler me-4"
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div
            className={`me-4 collapse navbar-collapse justify-content-end ${
              showMenu ? "show" : ""
            }`}
            id="navbarNav"
          >
            <div className="navbar-nav gap-lg-2 gap-1">
              <Link
                onClick={() => {
                  SetActive("signup");
                  setShowMenu(false);
                }}
                to="/signup"
                className={`nav-link px-2 ${
                  active === "signup" ? "text-primary" : "text-secondary"
                }`}
              >
                Signup
              </Link>
              <Link
                onClick={() => {
                  SetActive("about");
                  setShowMenu(false);
                }}
                to="/about"
                className={`nav-link px-2 ${
                  active === "about" ? "text-primary" : "text-secondary"
                }`}
              >
                About
              </Link>
              <Link
                onClick={() => {
                  SetActive("product");
                  setShowMenu(false);
                }}
                to="/product"
                className={`nav-link px-2 ${
                  active === "product" ? "text-primary" : "text-secondary"
                }`}
              >
                Products
              </Link>
              <Link
                onClick={() => {
                  SetActive("pricing");
                  setShowMenu(false);
                }}
                to="/pricing"
                className={`nav-link px-2 ${
                  active === "pricing" ? "text-primary" : "text-secondary"
                }`}
              >
                Pricing
              </Link>
              <Link
                onClick={() => {
                  SetActive("support");
                  setShowMenu(false);
                }}
                to="/support"
                className={`nav-link px-2 ${
                  active === "support" ? "text-primary" : "text-secondary"
                }`}
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer below fixed navbar */}
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default Navbar;
