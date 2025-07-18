import React, { useState } from "react";

const Form = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
          <h3 className="mb-4 text-center">Sign-Up Form</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Create Password
              </label>
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Enter your Password"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          <div className="d-flex p-2">
            <p>already have an account?&nbsp;</p>
            <a onClick={() => setShow(false)} style={{ cursor: "pointer" }}>
              Login Account
            </a>
          </div>
        </div>
      ) : (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
          <h3 className="mb-4 text-center">Log-In Form</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Enter your Password"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          <div className="d-flex p-2">
            <p>not have an account?&nbsp;</p>
            <a onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
              Signup
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
