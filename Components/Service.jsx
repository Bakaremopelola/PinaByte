import React from 'react';

const Service = () => {
  return (
    <>
      {/* Header Start */}
      <section className="header contact-header">
       

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
      

     
    </>
  );
};

export default Service;
