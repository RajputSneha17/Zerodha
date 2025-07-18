import React from "react";

const Profile = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: "800px" }}>
      <h3 className="mb-4 text-center p-5">Upload Your Profile Picture</h3>
      <div
        className="row p-3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left side - Image */}
        <div className="col-md-6 text-center">
          <img
            src="assets/profile.png"
            alt="Profile Preview"
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            className="img-fluid profile-img"
          />
        </div>

        {/* Right side - Upload + Submit */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Choose File
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <button className="btn btn-primary mt-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
