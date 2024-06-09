import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      {/* Header Start */}
      <section className="header contact-header">
        {/* Header Navigation Start */}
        <div className="container header-nav">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-light main-menu fixed-top">
                <div className="container">
                  <Link to="/" className="navbar-brand">
                    <img src="./asset/image/Logo.png" alt="LeadsbeeLogo" />
                  </Link>
                  <button className="navbar-toggler" data-toggle="collapse" data-target="#beeToggler">
                    <span className="navbar-toggler-icon">
                      <i className="fa fa-bars"></i>
                    </span>
                  </button>
                  <div className="collapse navbar-collapse" id="beeToggler">
                    <ul className="navbar-nav ml-auto">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/project">Project</Link></li>
                      <li><Link to="/service">Service</Link></li>
                      <li><Link to="/team">Team</Link></li>
                      <li><Link to="#">Blog</Link></li>
                      <li>
                        <Link to="/contact-us">
                          <button className="nav-button">
                            Contact Us <i className="fas fa-angle-right"></i>
                          </button>
                        </Link>
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
        <div className="container header-content">
          <div className="row h-100">
            <div className="col-md-6 centralize">
              <div className="left-content">
                <h2>
                  Our <span className="highlight">Blog</span>
                </h2>
                <p>Home / Blog</p>
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

      {/* Latest Blog Start */}
      <section className="latest-blog section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading">
              Latest: <span className="highlight">Blog</span>
            </h2>
          </div>
        </div>
        <div className="container mt-5 blog-container">
          {[...Array(4)].map((_, i) => (
            <div className="row" key={i}>
              <div className="col-md-4 centralize">
                <img src="./asset/image/meeting.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8 centralize mt-4">
                <div className="blog-post">
                  <div className="blog-category">
                    <p>Web Design</p>
                  </div>
                  <div className="blog-content">
                    <Link to="/service_details">
                      <h2 className="blog-title">Business contents insurance is a type of business.</h2>
                    </Link>
                    <p className="blog-excerpt">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus cursus fringilla. Duis non viverra arcu. Maecenas accumsan bibendum dui nec feugiat. Quisque faucibus fringilla euismod.
                    </p>
                  </div>
                  <div className="blog-meta">
                    <h3>Donald Barnhart</h3>
                    <p className="date">22, November 2020</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="row mt-5 justify-content-center">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="pagination">
                <ul>
                  <li className="previous"><Link to="#"><i className="fas fa-angle-left"></i></Link></li>
                  <li><Link to="#">01</Link></li>
                  <li><Link to="#">02</Link></li>
                  <li><Link to="#">03</Link></li>
                  <li className="next"><Link to="#"><i className="fas fa-angle-right"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <h2 className="text-center w-100 service-heading">
              Are You Ready To <span className="highlight">Start A Business?</span>
            </h2>
            <p className="sub-heading text-center w-100">
              We Will Help You To Your Business From A to Z.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12 mt-3">
              <form id="newsletter-form">
                <div className="form-group d-flex justify-content-center">
                  <input type="email" className="form-control" id="client-mail" name="client-mail" placeholder="Enter Your Email" required />
                  <button type="submit">Get Started</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Start */}
      <section className="footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-widget-1">
                <img src="./asset/image/Logo.png" alt="" />
                <p>Lorem ipsum dolor sit, consectet dignissim. Consectet adipiscing Cras dignissim.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-2">
                <h3>Work</h3>
                <ul>
                  <li><Link to="#">Case Studies</Link></li>
                  <li><Link to="#">Gallery</Link></li>
                  <li><Link to="#">Dribble</Link></li>
                  <li><Link to="#">Instagram</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-3">
                <h3>Company</h3>
                <ul>
                  <li><Link to="#">Company</Link></li>
                  <li><Link to="#">Article</Link></li>
                  <li><Link to="#">Testimonial</Link></li>
                  <li><Link to="#">FAQ's</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-4">
                <h3>Contact Us</h3>
                <p>info@leadsbee.com<br />07/409 Jiangxi China</p>
                <ul>
                  <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-dribbble"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row" style={{ borderTop: '1px solid #ddd', paddingTop: '10px' }}>
            <div className="col-md-10">
              <div className="copyright-text">
                <p>Copyright © 2020 Leadsbee Design Company, All Rights Reserved.</p>
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
    </div>
  );
};

export default Blog;
