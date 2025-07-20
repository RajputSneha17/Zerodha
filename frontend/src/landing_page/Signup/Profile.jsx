import axios from "axios";
import React, { useState } from "react";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const fileUpload = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("profile", profileImage);

  const token = localStorage.getItem("token"); // ✅ token uthao localStorage se

  try {
    const response = await axios.post("http://localhost:8000/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, // ✅ Add this line
      },
    });

    alert("Profile uploaded successfully ✅");
    console.log(response.data);
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
// window.location.href = "http://localhost:3001/";

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
            src={
              profileImage
                ? URL.createObjectURL(profileImage)
                : "assets/profile.png"
            }
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
            <form onSubmit={fileUpload} action="/profile" method="post" enctype="multipart/form-data">
              <label htmlFor="formFile" className="form-label">
                Choose File
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                name="profileImg"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
