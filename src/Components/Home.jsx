import React from 'react';

const Home = () => {
  return (
    <div id='Home'>
      {/* Header Start */}
      <section className="header ">
       
        {/* Header Banner Start */}
        <div className="container header-content ">
          <div className="row ">
            <div className="col-md-6 centralize">
              <div className="left-content ">
                <h2>Help Your <span className="highlight">Business</span> Growth
                  Up To <span className="highlight">High</span> Level
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo eros, sollicitudin
                  et fringilla id, volutpat id magna.
                </p>
                <div className="call-to-action">
                  <button>Work With Us <i className="fas fa-angle-right"></i></button>
                  <a href="#">View Our Portfolio <i className="fas fa-angle-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <img src="./asset/image/Header vector.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Header Banner End */}
      </section>
      {/* Header End */}

      {/* Work Process Start */}
      <section className="work-process section-padding" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="process-block">
                <img src="./asset/image/discussion.svg" alt="Project Discussion" />
                <h3>Project Discussion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-block">
                <img src="./asset/image/web-design.svg" alt="Project Discussion" />
                <h3>Design & Deveopment</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-block">
                <img src="./asset/image/web-design.svg" alt="Project Discussion" />
                <h3>Final Delivery</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-5">
              <img src="./asset/image/meeting.jpg" alt="Client discussion" className="img img-fluid" />
            </div>
            <div className="col-md-7 centralize">
              <div className="project-discussion ">
                <h2>Let’s Talk About <span className="highlight">Your Project</span> </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam magna diam, ultricies ut ultricies eu, cursus quis libero.
                  Sed maximus ligula in purus bibendum viverra. Cras sed odio condimentum, finibus sem eu,
                  auctor nisi.
                  Fusce eget nunc tincidunt
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna diam, ultricies ut
                  ultricies eu, cursus quis libero. Sed maximus
                </p>
                <button>Let's Talk <i className="fas fa-angle-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process End */}

      {/* Services Start */}
      <section className="services section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading">We Provide a Platform To Easily
              <span className="highlight">Build a Website</span> </h2>
          </div>
        </div>

        <div className="container text-center mt-5">
          <div className="row mx-auto my-auto">
            <div id="myCarousel" className="carousel slide w-100" data-ride="carousel">
              <div className=".service-carousel carousel-inner w-100" role="listbox">
                {/* Carousel Items Here */}
              </div>
              {/* Carousel Controls */}
            </div>
          </div>
        </div>
      </section>
      {/* Services End */}

      {/* Testimonial Start */}
      <section className="testimonial section-padding">
        <div className="container">
          <div className="card col-md-12 mt-2">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="100000">
              <div className="w-100 carousel-inner mb-5" role="listbox">
                {/* Testimonial Carousel Items Here */}
              </div>
              {/* Testimonial Carousel Controls */}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial End */}

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
                {/* Portfolio Filter Buttons */}
              </div>
            </div>
          </div>
        </div>
        <div className="container myMixCont text-center" data-ref="mixitup-container">
          <div className="row d-flex justify-content-center ">
            {/* Portfolio Images */}
          </div>
        </div>
      </section>
      {/* Partner Start */}
      <section className="partners section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center partner-heading">Business Partner Trusted
                <span className="highlight"> By The World's</span></h2>
            </div>
          </div>
          <div className="row mt-5">
            {/* Partner Images */}
          </div>
        </div>
      </section>
      {/* Partner End */}


      
    </div>
  );
}

export default Home;




