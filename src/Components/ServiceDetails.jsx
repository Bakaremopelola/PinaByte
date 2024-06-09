import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Logo from './asset/image/Logo.png'; // Adjust the import path as needed
// import HeaderImage from './asset/image/Group 1387.png'; // Adjust the import path as needed
// import ServiceImage from './asset/image/service_details_sample.png'; // Adjust the import path as needed
// import DiscussionIcon from './asset/image/discussion.svg'; // Adjust the import path as needed

const ServiceDetails = () => {
  return (
    <div>
      <section className="header contact-header">
        <div className="container header-nav">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-light main-menu fixed-top">
                <div className="container">
                  <a href="#" className="navbar-brand">
                    {/* <img src={Logo} alt="Leadsbee Logo" /> */}
                  </a>
                  <button className="navbar-toggler" data-toggle="collapse" data-target="#beeToggler">
                    <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
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
                          <button className="nav-button">Contact Us <i className="fas fa-angle-right"></i></button>
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
                <h2>Our <span className="highlight">Service Details</span></h2>
                <p>Home / Service Details</p>
              </div>
            </div>
            <div className="col-md-6 centralize">
              <div className="right-content">
                {/* <img src={HeaderImage} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="best-solutions">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-5">Best Solutions For <span className="highlight">Your Business</span></h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {/* <img src={ServiceImage} className="img-fluid" alt="Service details sample" /> */}
              <h4 className="great-websites text-center py-5">Great websites add great value to your business</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text...
              </p>
              <ul className="feature">
                <li>One design for your Desktop, Tab and Mobile.</li>
                <li>Beautiful and modern design that makes a difference.</li>
                <li>Boost your sales with strategically built user experience.</li>
                <li>One design for Desktop Tab and Mobile.</li>
              </ul>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s...
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="get-quote">Get a Free Quote</h4>
              <div className="mb-3">
                <input type="name" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <select className="form-control" placeholder="Your Project">
                  <option>Your Project</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea className="form-control py-5" rows="3" placeholder="Your Message"></textarea>
                <button type="button" className="btn btn-warning btn-lg btn-block get-quote-button py-3">Submit Project Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-process section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-5">Our Work <span className="highlight">Process</span></h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="process-block">
                <div className="card">
                  <div className="card-body">
                    {/* <img src={DiscussionIcon} alt="Project Discussion" /> */}
                    <h3>Project Discussion</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-block">
                <div className="card">
                  <div className="card-body">
                    {/* <img src={DiscussionIcon} alt="Design & Development" /> */}
                    <h3>Design & Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-block">
                <div className="card">
                  <div className="card-body">
                    {/* <img src={DiscussionIcon} alt="Final Delivery" /> */}
                    <h3>Final Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-designs section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-left w-100 service-heading py-5">Featured <span className="highlight">Designs</span></h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 feature-design-image">
              <img src="./asset/image/asian business.png" alt="Asian Business" className="img-fluid" />
            </div>
            <div className="col-md-4 feature-design-image">
              <img src="./asset/image/marketing-online-strategy-with-drawings.png" alt="Marketing Strategy" className="img-fluid" />
            </div>
            <div className="col-md-4 feature-design-image">
              <img src="./asset/image/group-graphic-designers-discussing-laptop-their-desk.png" alt="Graphic Designers" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-widget-1">
                {/* <img src={Logo} alt="" /> */}
                <p>Lorem ipsum dolor sit, consectet dignissim.consectet adipiscing Cras dignissim.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-2">
                <h3>Work</h3>
                <ul>
                  <li><Link to="/case-studies">Case Studies</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                   <li><Link to="/dribble">Dribble</Link></li>
                    <li><Link to="/instagram">Instagram</Link></li>
                  </ul>

              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-3">
                <h3>Company</h3>
                <ul>
                <li><Link to="#">Company</Link></li>
                <li><Link to="#">Article</Link></li>
                <li><Link to="#">Testimonials</Link></li>
                <li><Link to="#">FAQ's</Link></li>
                </ul>

              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-4">
                <h3>Contact Us</h3>
                <p>info@leadsbee.com <br /> 07/409 Jiangxi China</p>
                <ul>
                  <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                  </a>
                  </li>
                 <li>
                 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                 <i className="fab fa-twitter"></i>
                 </a>
                 </li>
                 <li>
                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                 </a>
                 </li>
                 <li>
                  <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-dribbble"></i>
                 </a>
                </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row" style={{ borderTop: '1px solid #ddd', paddingTop: '10px' }}>
            <div className="col-md-10">
              <div className="copyright-text">
                <p>Copyright © 2020 Pinabyte Design Company, All Rights Reserved.</p>
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
    </div>
  );
};

export default ServiceDetails;
