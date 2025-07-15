const Rightimg = ({ img, title, description, link1, link2, img1, img2 }) => {
  return (
    <>
      <div className="container py-5">
        <div className="mx-auto" style={{ maxWidth: "1140px" }}>
          <div className="row align-items-center">
            <div className="col-lg-6 text-center pe-lg-5">
              <img
                src={img}
                className="img-fluid"
                style={{ maxWidth: "100%" }}
                alt=""
              />
            </div>
            <div className="col-lg-6 px-4 ps-lg-4">
              <h2 className="mb-3">{title}</h2>
              <p className="mb-4">{description}</p>

              {link1 && (
                <a
                  href="#"
                  className="d-inline-block me-4 text-decoration-none"
                >
                  {link1} <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
              {link2 && (
                <a href="#" className="d-inline-block text-decoration-none">
                  {link2} <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}

              <div className="pt-4">
                {img1 && <img src={img1} alt="" className="me-3" />}
                {img2 && <img src={img2} alt="" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightimg;
