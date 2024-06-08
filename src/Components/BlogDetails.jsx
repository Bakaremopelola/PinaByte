import React from 'react';

const BlogDetail = () => {
  return (
    <div>
        {/* Header Start */}
        <section class="header">
          {/* Header Navigation Start */}
          <div class="container header-nav">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light main-menu fixed-top">
                  <div class="container">
                    <a href="#" class="navbar-brand">
                      <img src="./asset/image/Logo.png" alt="LeadsbeeLogo" />
                    </a>
                    <button
                      class="navbar-toggler"
                      data-toggle="collapse"
                      data-target="#beeToggler"
                    >
                      <span class="navbar-toggler-icon">
                        <i class="fa fa-bars"></i>
                      </span>
                    </button>
                    <div class="collapse navbar-collapse" id="beeToggler">
                      <ul class="navbar-nav ml-auto ">
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
                            <button class="nav-button">
                              Contact Us <i class="fas fa-angle-right"></i>{" "}
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
          <div class="container header-content ">
            <div class="row ">
              <div class="col-md-6 centralize">
                <div class="left-content ">
                  <h2>
                    Blog <span class="highlight">Details</span>
                  </h2>
                  Home / Blog Details
                </div>
              </div>
              <div class="col-md-6">
                <div class="right-content">
                  <img src="./asset/image/Group 1387.png" alt="" class="py-5" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Header End */}

        {/* Blog details start */}
        <section class="best-solutions">
          <div class="container" style={{ padding: "50px 0px 50px 0px" }}>
            <div class="row">
              <div class="col-md-8 col-xs-12">
                <img
                  src="./asset/image/blog-details.svg"
                  class="sample-image-service img-fluid"
                />
                <div class="blog-post">
                  <div class="blog-category">
                    <p>UI/UX DESIGNER</p>
                  </div>
                  <h2 class="blog-title">
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

                  <p style={{ background: "#FFEEBF" }} class="lead">
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
                    <div class="col-md-3">
                      <img
                        src="./asset/image/blog-details1.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="col-md-9" className="justify-content-center">
                      <h3>Donald Barnhart</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, quas
                      </p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-3">
                      <img
                        src="./asset/image/blogdetails2.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="col-md-7" className="justify-content-center">
                      <h3>Micheal Parez</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, quas
                      </p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-3">
                      <img
                        src="./asset/image/blog-details3.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="col-md-9" className="justify-content-center">
                      <h3>Donald Barnhart</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, quas
                      </p>
                    </div>
                  </div>

                  <h2>Give a Reply</h2>
                  <div class="row" style={{ marginTop: "20px" }}>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <input
                          style={{ background: "#FFEEBF" }}
                          type="name"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Your Name"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          style={{ background: "#FFEEBF" }}
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <textarea
                          style={{ background: "#FFEEBF" }}
                          class="form-control py-5"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Your Message"
                        ></textarea>
                        <button
                          type="button"
                          class="btn btn-warning btn-lg btn-block get-quote-button py-3"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xs-12">
              <h2>Most Popular</h2>
              <hr />
              <div class="container">
                <div class="row">
                  <div class="col-md-3">
                    <img
                      src="./asset/image/Images (7).svg"
                      class="img-thumbnail"
                      alt=""
                    />
                  </div>
                  <div class="col-md-9">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, ratione
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-3">
                    <img
                      src="./asset/image/website-template-design-laptop-screen.png"
                      class="img-thumbnail"
                      alt=""
                    />
                  </div>
                  <div class="col-md-9">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, ratione
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-3">
                    <img
                      src="./asset/image/service_details_sample.png"
                      class="img-thumbnail"
                      alt=""
                    />
                  </div>
                  <div class="col-md-9">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, ratione
                    </p>
                  </div>
                </div>
              </div>
              <div class="container" style={{ paddingTop: "30px" }}>
                <h2>Catagories</h2>
                <hr />
                <div class="row">
                  <div class="col-md-6">
                    <p>UI/UX DESIGN</p>
                  </div>
                  <div class="col-md-6">07 ARTICLES</div>
                </div>
                <div class="row">
                  <div class="col-md-6">ECO SUPPORT</div>
                  <div class="col-md-6">07 ARTICLES</div>
                </div>
                <div class="row">
                  <div class="col-md-6">WEB DESIGNER</div>
                  <div class="col-md-6">07 ARTICLES</div>
                </div>
                <div class="row">
                  <div class="col-md-6">ECO SUPPORT</div>
                  <div class="col-md-6">07 ARTICLES</div>
                </div>
                <div class="row">
                  <div class="col-md-6">UI/UX DESIGN</div>
                  <div class="col-md-6">08 ARTICLES</div>
                </div>
              </div>
              <div class="container">
                <h2>Popular Tags</h2>
                <hr />
                <div class="row" style={{ marginTop: "20px" }}>
                  <div class="col-md-6">
                    <button class="btn btn-outline-secondary mt-md-4">
                      UI/UX DESIGN
                    </button>
                  </div>
                  <div class="col-md-6">
                    <button class="btn btn-outline-secondary">
                      WEB DEVELOPMENT
                    </button>
                  </div>
                </div>
                <div class="row" style={{ marginTop: "20px" }}>
                  <div class="col-md-7">
                    {" "}
                    <button class="btn btn-outline-secondary ">
                      CONTENT WRITER{" "}
                    </button>
                  </div>
                  <div class="col-md-5">
                    {" "}
                    <button class="btn btn-outline-secondary">ECO EXPART</button>
                  </div>
                </div>
                <div class="row" style={{ marginTop: "20px" }}>
                  <div class="col-md-6">
                    <button class="btn btn-outline-secondary">
                      UI/UX DESIGN
                    </button>
                  </div>
                  <div class="col-md-6">
                    <button class="btn btn-outline-secondary">
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
        <section class="footer section-padding">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="footer-widget-1">
                  <img src="./asset/image/Logo.png" alt="" />
                  <p>
                    Lorem ipsum dolor sit, consectet dignissim.consectet
                    adipiscing Cras dignissim.
                  </p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="footer-widget-2">
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
              <div class="col-md-3">
                <div class="footer-widget-3">
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
              <div class="col-md-3">
                <div class="footer-widget-4">
                  <h3>contact Us</h3>
                  <p>
                    info@leadsbee.com <br /> 07/409 Jiangxi China
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer End */}

        {/* Adding Scripts */}
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
    </div>
  );
};

export default BlogDetail;
