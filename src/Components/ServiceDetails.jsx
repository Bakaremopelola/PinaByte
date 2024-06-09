import React from 'react';

const ServiceDetail = () => {
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
                    <img src="./asset/image/Logo.png" alt="PinaByteLogo" />
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
                        <a href="./ContactUs.html">
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
                <h2>Our <span className="highlight">Service Details</span></h2>
                <p>Home / Service Details</p>
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

      {/* Best solutions for your business start */}
      <section className="best-solutions">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-5">Best Solutions For <span className="highlight">Your Business</span></h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img src="./asset/image/service_details_sample.png" className="img-fluid" alt="" />
              <h4 className="great-websites text-center py-5">Great websites add great value to your business</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature, discovered the undoubtable source.
              </p>
              {/* more content */}
            </div>
            <div className="col-md-4">
              <h4 className="get-quote">Get a Free Quote</h4>
              {/* Form */}
            </div>
          </div>
        </div>
      </section>
      {/* Best solutions for your business finish */}

      {/* Work Process Start */}
      <section className="work-process section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-5">Our Work <span className="highlight">Process</span></h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* Process Blocks */}
          </div>
        </div>
      </section>
      {/* Work Process finish */}

      {/* Featured Designs Start */}
      <section className="featured-designs section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-left w-100 service-heading py-5">Featured <span className="highlight">Designs</span></h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* Featured Design Images */}
          </div>
        </div>
      </section>
      {/* Featured Design End */}

      {/* Footer Start */}
      <section className="footer section-padding">
        <div className="container">
          <div className="row">
            {/* Footer Widgets */}
          </div>
          <div className="row" style={{ borderTop: "1px solid #ddd", paddingTop: "10px" }}>
            {/* Copyright */}
          </div>
        </div>
      </section>
      {/* Footer End */}
    </>
  );
};

export default ServiceDetail;

