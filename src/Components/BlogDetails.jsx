import React from 'react';

const BlogDetail = () => {
  return (
    <div>
        {/* Header Start */}
        <section className="header">
          {/* Header Navigation Start */}
          <div className="container header-nav">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light main-menu fixed-top">
                  <div className="container">
                    <a href="#" className="navbar-brand">
                      {/* <img src="./asset/image/Logo.png" alt="LeadsbeeLogo" /> */}
                    </a>
                    <button
                      className="navbar-toggler"
                      data-toggle="collapse"
                      data-target="#beeToggler"
                    >
                      <span className="navbar-toggler-icon">
                        <i className="fa fa-bars"></i>
                      </span>
                    </button>
                    <div className="collapse navbar-collapse" id="beeToggler">
                      <ul className="navbar-nav ml-auto ">
                        <li>
                          <a href="./index.html">Home</a>
                        </li>
                        &nbsp;
                        <li>
                          <a href="./project.html">Project</a>
                        </li>
                        &nbsp;
                        <li>
                          <a href="./service.html">Service</a>
                        </li>
                        &nbsp;
                        <li>
                          <a href="./team.html">Team</a>
                        </li>
                        &nbsp;
                        <li>
                          <a href="./blog.html">Blog</a>
                        </li>
                        &nbsp;
                        <li>
                          <a href="contact-us.html">
                            <button className="nav-button">
                              Contact Us <i className="fas fa-angle-right"></i>{" "}
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
          {/* Header Navigation End */}

          {/* Header Banner Start */}
          <div className="container header-content ">
            <div className="row ">
              <div className="col-md-6 centralize">
                <div className="left-content ">
                  <h2>
                    Blog <span className="highlight">Details</span>
                  </h2>
                  Home / Blog Details
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-content">
                  <img src="./asset/image/Group 1387.png" alt="" className="py-5" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Header End */}

        {/* Blog details start */}
        <section className="best-solutions">
          <div className="container" style={{ padding: "50px 0px 50px 0px" }}>
            <div className="row">
              <div className="col-md-8 col-xs-12">
                <img
                  src="./asset/image/blog-details.svg"
                  className="sample-image-service img-fluid"
                />
                <div className="blog-post">
                  <div className="blog-category">
                    <p>UI/UX DESIGNER</p>
                  </div>
                  <h2 className="blog-title">
                    {" "}
                    Business contents insuranc is a type of business.
                  </h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam architecto quasi esse eum quibusdam maxime ipsam
                    laudantium non sed cum odit earum minima, labore inventore,
                    quaerat consequatur eius, quae temporibus The standard chunk
                    of Lorem Ipsum used since the 1500s is reproduced below for
                    those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in
                    their exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham.
                    .
                  </p>

                  <p style={{ background: "#FFEEBF" }} className="lead">
                    This is a modified jumbotron that occupies the entire
                    horizontal space of its parent. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Voluptatum voluptatibus hic od
                    it asperiores consequatur. Aliquam voluptates doloribus
                    dignissimos? Tenetur, officiis?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, voluptates odit deserunt quaerat ad laudantium earum
                    dicta, ipsum possimus rerum accusamus vitae saepe aliquid
                    voluptate explicabo! Cumque porro maxime id corporis. Natus
                    repellendus hic minus cumque illum enim. Molestiae, harum.
                  </p>

                  <h2>Comments(03)</h2>
                  <hr />

                  <div className="row" class="centralize">
                    <div className="col-md-3">
                      <img
                        src="./asset/image/blog-details1.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9" class="justify-content-center">
                      <h3>Donald Barnhart</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, quas
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">
                      <img
                        src="./asset/image/blogdetails2.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div id="col-md-7" className="justify-content-center">
                      <h3>Micheal Parez</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, quas
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src="./asset/image/blog-details3.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div id="col-md-9" className="justify-content-center">
                      <h3>Donald Barnhart</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, quas
                      </p>
                    </div>
                  </div>

                  <h2>Give a Reply</h2>
                  <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          style={{ background: "#FFEEBF" }}
                          type="name"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          style={{ background: "#FFEEBF" }}
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <textarea
                          style={{ background: "#FFEEBF" }}
                          className="form-control py-5"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Your Message"
                        ></textarea>
                        <button
                          type="button"
                          className="btn btn-warning btn-lg btn-block get-quote-button py-3"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-12">
              <h2>Most Popular</h2>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src="./asset/image/Images (7).svg"
                      className="img-thumbnail"
                      alt=""
                    />
                  </div>
                  <div className="col-md-9">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, ratione
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <img
                      src="./asset/image/website-template-design-laptop-screen.png"
                      className="img-thumbnail"
                      alt=""
                    />
                  </div>
                  <div className="col-md-9">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, ratione
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <img
                      src="./asset/image/service_details_sample.png"
                      className="img-thumbnail"
                      alt=""
                    />
                  </div>
                  <div className="col-md-9">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, ratione
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" style={{ paddingTop: "30px" }}>
                <h2>Catagories</h2>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <p>UI/UX DESIGN</p>
                  </div>
                  <div className="col-md-6">07 ARTICLES</div>
                </div>
                <div className="row">
                  <div className="col-md-6">ECO SUPPORT</div>
                  <div className="col-md-6">07 ARTICLES</div>
                </div>
                <div className="row">
                  <div className="col-md-6">WEB DESIGNER</div>
                  <div className="col-md-6">07 ARTICLES</div>
                </div>
                <div className="row">
                  <div className="col-md-6">ECO SUPPORT</div>
                  <div className="col-md-6">07 ARTICLES</div>
                </div>
                <div className="row">
                  <div className="col-md-6">UI/UX DESIGN</div>
                  <div className="col-md-6">08 ARTICLES</div>
                </div>
              </div>
              <div className="container">
                <h2>Popular Tags</h2>
                <hr />
                <div className="row" style={{ marginTop: "20px" }}>
                  <div className="col-md-6">
                    <button className="btn btn-outline-secondary mt-md-4">
                      UI/UX DESIGN
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-outline-secondary">
                      WEB DEVELOPMENT
                    </button>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "20px" }}>
                  <div className="col-md-7">
                    {" "}
                    <button className="btn btn-outline-secondary ">
                      CONTENT WRITER{" "}
                    </button>
                  </div>
                  <div className="col-md-5">
                    {" "}
                    <button className="btn btn-outline-secondary">ECO EXPART</button>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "20px" }}>
                  <div className="col-md-6">
                    <button className="btn btn-outline-secondary">
                      UI/UX DESIGN
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-outline-secondary">
                      WEB DEVELOPMENT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog-details- finish */}

        {/* Footer Start */}
        <section className="footer section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-widget-1">
                  <img src="./asset/image/Logo.png" alt="" />
                  <p>
                    Lorem ipsum dolor sit, consectet dignissim.consectet
                    adipiscing Cras dignissim.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-widget-2">
                  <h3>Work</h3>
                  <ul>
                    <li>
                      <a href="#">Case Studies</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                    <li>
                      <a href="#">Dribble</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-widget-3">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Article</a>
                    </li>
                    <li>
                      <a href="#">Testimonial</a>
                    </li>
                    <li>
                      <a href="#">FAQ's</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-widget-4">
                  <h3>contact Us</h3>
                  <p>
                    info@Pinabyte.com <br /> 07/409 
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer End */}

     
    </div>
  );
};

export default BlogDetail;
