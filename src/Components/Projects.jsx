import React from 'react';

const Projects = () => {
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
                      &nbsp;
                      <li><a href="./Project.jsx">Project</a></li>
                      &nbsp;
                      <li><a href="./Service.jsx">Service</a></li>
                      &nbsp;
                      <li><a href="./Team.jsx">Team</a></li>
                      &nbsp;
                      <li><a href="./blog.jsx">Blog</a></li>
                      &nbsp;
                      <li>
                        <a href="./ContactUs.jsx">
                          <button className="nav-button">Contact Us <i className="fas fa-angle-right"></i> </button>
                        </a>
                      </li>
                      &nbsp;
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
                <h2>Our <span className="highlight">Project</span>
                </h2>
                <p>
                  Home / Project
                </p>
              </div>
            </div>
            <div className="col-md-6 centralize">
              <div className="right-content">
                <img src="./asset/image/Group 1387.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Header Banner End */}
      </section>
      {/* Header End */}

      {/* Portfolio Start */}
      <section className="portfolio section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center portfolio-heading">My Company <span className="highlight">Work</span> </h2>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-buttons text-center">
                <button type="button" className="control" data-filter="all">All</button>
                <button type="button" className="control" data-filter=".design">Design</button>
                <button type="button" className="control" data-filter=".development">Development</button>
                <button type="button" className="control" data-filter=".case">Case Study</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container myMixCont text-center" data-ref="mixitup-container">
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">

              <div className="portfolio-block design" data-ref="mixitup-target">
                <img src="./asset/image/Portfolio 1.svg" className="img-fluid" />
                <div className="portfolio-overlay">
                  <a href="#">
                    <h3>Project Title</h3>
                  </a>
                  <a href="#">
                    <p> Category </p>
                  </a>
                </div>
              </div>

              <div className="portfolio-block development" data-ref="mixitup-target">
                <img src="./asset/image/Portfolio 1.svg" className="img-fluid" />

                <div className="portfolio-overlay">
                  <a href="#">
                    <h3>Project Title</h3>
                  </a>
                  <a href="#">
                    <p> Category </p>
                  </a>
                </div>
              </div>

              <div className="portfolio-block development" data-ref="mixitup-target">
                <img src="./asset/image/Portfolio 1.svg" className="img-fluid" />
                <div className="portfolio-overlay">
                  <a href="#">
                    <h3>Project Title</h3>
                  </a>
                  <a href="#">
                    <p> Category </p>
                  </a>
                </div>
              </div>

            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="portfolio-block design" data-ref="mixitup-target">
                <img src="./asset/image/Portfolio 1.svg" className="img-fluid" />
                <div className="portfolio-overlay">
                  <a href="#">
                    <h3>Project Title</h3>
                  </a>
                  <a href="#">
                    <p> Category </p>
                  </a>
                </div>
              </div>

              <div className="portfolio-block case" data-ref="mixitup-target">
                <img src="./asset/image/Portfolio 1.svg" className="img-fluid" />
                <div className="portfolio-overlay">
                  <a href="#">
                    <h3>Project Title</h3>
                  </a>
                  <a href="#">
                    <p> Category </p>
                  </a>
                </div>
              </div>

              <div className="portfolio-block case" data-ref="mixitup-target">
                <img src="./asset/image/Portfolio 1.svg" className="img-fluid" />
                <div className="portfolio-overlay">
                  <a href="#">
                    <h3>Project Title</h3>
                  </a>
                  <a href="#">
                    <p> Category </p>
                  </a>
                </div>
              </div>

            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="portfolio-block case" data-ref="mixitup-target">
                <img src="./asset/image/Portfolio 1.svg" className="img-fluid" />
                <div className="portfolio-overlay">
                  <a href="#">
                    <h3>Project Title</h3>
                  </a>
                  <a href="#">
                    <p> Category </p>
                  </a>
                </div>
              </div>

              <div className="portfolio-block development" data-ref="mixitup-target">
                <img src="./asset/image/Portfolio 1.svg" className="img-fluid" />
                <div className="portfolio-overlay">
                  <a href="#">
                    <h3>Project Title</h3>
                  </a>
                  <a href="#">
                    <p> Category </p>
                  </a>
                </div>
              </div>

              <div className="portfolio-block case" data-ref="mixitup-target">
                <img src="./asset/image/Portfolio 1.svg" className="img-fluid" />
                <div className="portfolio-overlay">
                  <a href="#">
                    <h3>Project Title</h3>
                  </a>
                  <a href="#">
                    <p> Category </p>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* Portfolio End */}

      {/* Portfolio Call to Action Start */}
      <section className="section-padding portfolio-call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Any Consultation For Made Creative <br />
                <span className="highlight">Web Design & Development</span>
              </h2>
              <button className="project-button-1">Let's Talk <i className="fas fa-angle-right"></i></button>
              <button className="project-button-2">Explore More <i className="fas fa-angle-right"></i></button>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Call to Action End */}

      {/* Client's Testimonial Start */}
      <section className="testimonial section-padding">
        <div className="container">
          <div className="card col-md-12 mt-2">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="100000">
              <div className="w-100 carousel-inner mb-5" role="listbox">
                <div className="carousel-item active">

                  <div className="row">
                    <div className="col-md-7 d-flex flex-column justify-content-center">
                      <div className="testimonial-description">
                        <h3> Clients’ Love To Work With Us </h3>
                        <div className="client-meta-data">
                          <h5>John Doe</h5>
                          <p> UI/UX Designer</p>
                          <p className="client-says">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            mauris, et congue magna pretium n. Maecenas ac luctus odio,
                            In ut fermentum lorem. In nulla velit, mauris, et congue magna pretium magna
                            pretium n.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 centralize justify-content-center">
                      <div className="client-picture">
                        <img src="./asset/image/client.png" alt="" className="img-fluid" />
                        <img src="./asset/image/coma.svg" alt="" className="coma" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-7 d-flex flex-column justify-content-center">
                      <div className="testimonial-description">
                        <h3> Clients’ Love To Work With Us </h3>
                        <div className="client-meta-data">
                          <h5>John Doe</h5>
                          <p> UI/UX Designer</p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                          mauris, et congue magna pretium n. Maecenas ac luctus odio,
                          In ut fermentum lorem. In nulla velit, mauris, et congue magna pretium magna
                          pretium n.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 centralize justify-content-center">
                      <div className="client-picture">
                        <img src="./asset/image/client 2.png" alt="" />
                        <img src="./asset/image/coma.svg" alt="" className="coma" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <a className="carousel-control-prev testimonial-control" href="#carouselExampleControls" role="button"
                data-slide="prev">
                <span className="carousel-control-prev-icon testimonial-control-icon" aria-hidden="true"><i
                  className="fas fa-chevron-left"></i></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next testimonial-control" href="#carouselExampleControls" role="button"
                data-slide="next">
                <span className="carousel-control-next-icon testimonial-control-icon" aria-hidden="true"><i
                  className="fas fa-chevron-right"></i></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

          </div>
        </div>


    
      </section>
      {/* Client's Testimonial End */}

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
                <h3>contact Us</h3>
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

export default Projects;

