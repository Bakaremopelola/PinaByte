import React from 'react';
// Uncomment these imports when assets are available
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import logo from './asset/image/Logo.png';
// import clientImage1 from './asset/image/client.png';
// import clientImage2 from './asset/image/client 2.png';
// import bannerImage from './asset/image/Group 1387.png';
// import portfolioImage from './asset/image/Portfolio 1.svg';
// import comaImage from './asset/image/coma.svg';

const Project = () => {
  return (
    <>
      {/* Header Section */}
      <section className="header contact-header">
        <div className="container header-nav">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-light main-menu fixed-top">
                <div className="container">
                  <a href="#" className="navbar-brand">
                    {/* <img src={logo} alt="Leadsbee Logo" /> */}
                  </a>
                  <button className="navbar-toggler" data-toggle="collapse" data-target="#beeToggler">
                    <span className="navbar-toggler-icon">
                      <i className="fa fa-bars"></i>
                    </span>
                  </button>
                  <div className="collapse navbar-collapse" id="beeToggler">
                    <ul className="navbar-nav ml-auto">
                      <li><a href="./index.html">Home</a></li>
                      <li><a href="./project.html">Project</a></li>
                      <li><a href="./service.html">Service</a></li>
                      <li><a href="./team.html">Team</a></li>
                      <li><a href="./blog.html">Blog</a></li>
                      <li>
                        <a href="./contact-us.html">
                          <button className="nav-button">
                            Contact Us <i className="fas fa-angle-right"></i>
                          </button>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="container header-content">
          <div className="row h-100">
            <div className="col-md-6 centralize">
              <div className="left-content">
                <h2>Our <span className="highlight">Project</span></h2>
                <p>Home / Project</p>
              </div>
            </div>
            <div className="col-md-6 centralize">
              <div className="right-content">
                {/* <img src={bannerImage} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center portfolio-heading">My Company <span className="highlight">Work</span></h2>
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
          <div className="row d-flex justify-content-center">
            {[...Array(3)].map((_, colIdx) => (
              <div key={colIdx} className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                {[...Array(3)].map((_, rowIdx) => (
                  <div key={rowIdx} className={`portfolio-block ${['design', 'development', 'case'][rowIdx % 3]}`} data-ref="mixitup-target">
                    {/* <img src={portfolioImage} className="img-fluid" alt="Portfolio" /> */}
                    <div className="portfolio-overlay">
                      <a href="#"><h3>Project Title</h3></a>
                      <a href="#"><p>Category</p></a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Call to Action */}
      <section className="section-padding portfolio-call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                Any Consultation For Made Creative <br />
                <span className="highlight">Web Design & Development</span>
              </h2>
              <button className="project-button-1">Let's Talk <i className="fas fa-angle-right"></i></button>
              <button className="project-button-2">Explore More <i className="fas fa-angle-right"></i></button>
            </div>
          </div>
        </div>
      </section>

      {/* Client's Testimonial */}
      <section className="testimonial section-padding">
        <div className="container">
          <div className="card col-md-12 mt-2">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="100000">
              <div className="w-100 carousel-inner mb-5" role="listbox">
                {[/*clientImage1, clientImage2*/].map((clientImage, idx) => (
                  <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                    <div className="row">
                      <div className="col-md-7 d-flex flex-column justify-content-center">
                        <div className="testimonial-description">
                          <h3> Clients’ Love To Work With Us </h3>
                          <div className="client-meta-data">
                            <h5>John Doe</h5>
                            <p>UI/UX Designer</p>
                            <p className="client-says">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris, et congue magna pretium n.
                              Maecenas ac luctus odio, In ut fermentum lorem. In nulla velit, mauris, et congue magna pretium magna pretium n.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 centralize justify-content-center">
                        <div className="client-picture">
                          {/* <img src={clientImage} alt="" className="img-fluid" /> */}
                          <img src={comaImage} alt="" className="coma" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev testimonial-control" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon testimonial-control-icon" aria-hidden="true">
                  <i className="fas fa-chevron-left"></i>
                </span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next testimonial-control" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon testimonial-control-icon" aria-hidden="true">
                  <i className="fas fa-chevron-right"></i>
                </span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-widget-1">
                {/* <img src={logo} alt="" /> */}
                <p>Lorem ipsum dolor sit, consectet dignissim. consectet adipiscing Cras dignissim.</p>
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
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">Case Study</a></li>
                  <li><a href="#">Graphics</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-4">
                <h3>About</h3>
                <ul>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
