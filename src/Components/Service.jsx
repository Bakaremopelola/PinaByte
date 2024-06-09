import React from 'react';

const Service = () => {
  return (
    <>
      {/* Header Start */}
      <section className="header contact-header">
        {/* Header Navigation Start */}
        <div className="container header-nav">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-light main-menu fixed-top">
                <div className="container">
                  <a href="#" className="navbar-brand">
                    <img src="./asset/image/Logo.png" alt="LeadsbeeLogo" />
                  </a>
                  <button className="navbar-toggler" data-toggle="collapse" data-target="#beeToggler">
                    <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
                  </button>
                  <div className="collapse navbar-collapse" id="beeToggler">
                    <ul className="navbar-nav ml-auto ">
                      <li><a href="./Home.jsx">Home</a></li>
                      <li><a href="./Project.jsx">Project</a></li>
                      <li><a href="./Service.jsx">Service</a></li>
                      <li><a href="./Team.jsx">Team</a></li>
                      <li><a href="./blog.jsx">Blog</a></li>
                      <li>
                        <a href="./ContactUs.jsx">
                          <button className="nav-button">Contact Us <i className="fas fa-angle-right"></i> </button>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Header Navigation End */}

        {/* Header Banner Start */}
        <div className="container header-content ">
          <div className="row h-100">
            <div className="col-md-6 centralize">
              <div className="left-content ">
                <h2>Our <span className="highlight">Services</span></h2>
                <p>Home / Services</p>
              </div>
            </div>
            <div className="col-md-6 centralize">
              <div className="right-content">
                <img src="./asset/image/Group 1387.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Header End */}

      {/* Services Start */}
      <section className="services section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-5">We Provide a Platform To Easily<br /><span className="highlight">Build a Website</span></h2>
          </div>
        </div>

        <div className="container">
          <div className="row card-row-gap">

            {/* Service Cards */}
            {/* UI/UX Design */}
            <div className="col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center">
              <div className="card service-block-card" style={{ width: "18rem" }}>
                <img src="./asset/image/creative-postcard-set-blue-wall.jpg" className="card-img-top" alt="ui_design_card" />
                <div className="card-body">
                  <h5 className="card-title">UI/UX Design</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="./service_details.html" className="">Learn More <i className="fas fa-angel-right"></i></a>
                </div>
              </div>
            </div>

            {/* Website optimization */}
            <div className="col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center">
              <div className="card service-block-card" style={{ width: "18rem" }}>
                <img src="./asset/image/marketing-online-strategy-with-drawings.png" className="card-img-top" alt="ui_design_card" />
                <div className="card-body">
                  <h5 className="card-title">Website optimization</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="./service_details.html" className="">Learn More <i className="fas fa-angel-right"></i></a>
                </div>
              </div>
            </div>

            {/* Social Media Marketing */}
            <div className="col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center">
              <div className="card service-block-card" style={{ width: "18rem" }}>
                <img src="./asset/image/group-graphic-designers-discussing-laptop-their-desk.png" className="card-img-top" alt="ui_design_card" />
                <div className="card-body">
                  <h5 className="card-title">Social Media Marketing</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="./service_details.html" className="">Learn More <i className="fas fa-angel-right"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Services End */}

      {/* Why choose leadsbee */}
      <section className="service-type section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-5">Why Choose <span className="highlight">PinaByte</span></h2>
          </div>
        </div>

        <div className="container">
          <div className="row service-type-gap why-choose">
            {/* Analysis */}
            <div className="col-md-6">
              <img src="./asset/image/Group 1460.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <h2>Analysis</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="row service-type-gap why-choose">
            {/* UI/UX Design */}
            <div className="col-md-6">
              <h2>UI/UX Design</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="col-md-6">
              <img src="./asset/image/Group 1521.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="row service-type-gap why-choose">
            {/* Development */}
            <div className="col-md-6">
              <img src="./asset/image/Group 1538.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <h2>Development</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why choose leadsbee */}

      {/* Let's start */}
      <section className="lets-start section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-1">Are You Ready To <span className="highlight">Start A Business?</span></h2>
            <div className="text-center w-100 service-heading py-1" id="bottombutton">
              <h5>We will help you start your business from A to Z</h5>
              <button type="button" className="btn btn-warning">Let's Start</button>
            </div>
          </div>
        </div>
      </section>
      {/* Let's start */}

      {/* Footer Start */}
      <section className="footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-widget-1">
                <img src="./asset/image/Logo.png" alt="" />
                <p>
                  Lorem ipsum dolor sit, consectet dignissim.consectet adipiscing Cras dignissim.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-2">
                <h3>Work</h3>
                <ul>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Dribble</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-3">
                <h3>Company</h3>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Article</a></li>
                  <li><a href="#">Testimonial</a></li>
                  <li><a href="#">FAQ's</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-4">
                <h3>Contact Us</h3>
                <p>
                  info@PinaByte.com <br /> 07/409 Jiangxi China
                </p>
                <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row" style={{ borderTop: "1px solid #ddd", paddingTop: "10px" }}>
            <div className="col-md-10">
              <div className="copyright-text">
                <p>
                  Copyright © 2020 PinaByte Design Company, All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="messenger">
                <i className="fab fa-facebook-messenger"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer End */}
    </>
  );
};

export default Service;
