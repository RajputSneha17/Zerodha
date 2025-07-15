const Leftimg = ({ img, title, description, link }) => {
  return (
    <>
      <div className="container py-5">
        <div className="mx-auto" style={{ maxWidth: "1140px" }}>
          <div className="row align-items-center">
            <div className="col-lg-6 px-4 pe-lg-5">
              <h2 className="mb-3">{title}</h2>
              <p className="mb-4">{description}</p>
              {link && (
                <a href="#" className="text-decoration-none">
                  {link} <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
            </div>
            <div className="col-lg-6 ps-lg-4 text-center">
              <img src={img} className="img-fluid" style={{ maxWidth: "100%" }} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftimg;
