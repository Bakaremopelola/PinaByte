import React from 'react';

const ContactUs = () => {
  return (
    <>
      {/* Header Start */}
      <section className="header contact-header">
   
        {/* Header Banner Start */}
        <div className="container header-content">
          <div className="row h-100">
            <div className="col-md-6 centralize">
              <div className="left-content">
                <h2>Our <span className="highlight">Contacts</span></h2>
                <p>Home / ContactUs</p>
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

      {/* Company Offices Start */}
      <section className="offices section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading">We Provide a Platform To Easily<span className="highlight">Build a Website</span></h2>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="office-block">
                <h3>Tokyo Japan</h3>
                <p>Phone: (048) 333-9999 Email: Support@PinaByte.com 73 Gartner Street Chaska, MN 553</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="office-block">
                <h3>Jiangxi China</h3>
                <p>Phone: (048) 333-9999 Email: Support@PinaByte.com 73 Gartner Street Chaska, MN 553</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="office-block">
                <h3>California Offices</h3>
                <p>Phone: (048) 333-9999 Email: Support@PinaByte.com 73 Gartner Street Chaska, MN 553</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Company Offices End */}

      {/* Project Contact Start */}
      <section className="project-contact section-padding">
        <div className="container">
          {/* Toast */}
         {/* { <?= $success; ?>} */}
          <div className="row mt-5">
            <h2 className="text-center w-100 service-heading">Tell Us About Your Project</h2>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <form action="" method="post" id="project-details">

                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
                  <span className="icon fa fa-user fa-lg"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Your E-mail" required />
                  <span className="icon fa fa-envelope fa-lg"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="project-type"></label>
                  <select id="project-type" name="project-type">
                    <option> Select Project Type</option>
                    <option value="website_optimization">Website Optimization</option>
                    <option value="social_media_marketing">Social Media Marketing</option>
                    <option value="ui/ux">UI/UX</option>
                    <option value="graphics">Graphics</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea rows="5" cols="30" id="msg" name="msg" placeholder="Message" style={{ width: "100%" }}></textarea>
                  <span className="icon-textarea fa fa-edit fa-lg "></span>
                </div>

                <div className=" text-center">
                  <input type="submit" name="submit" value="Submit" className="btn btn-default" />
                </div>
              </form>
            </div>

            <div className="col-md-6 centralize">
              <div className="contact-image">
                <img src="./asset/image/Group 4408.png" alt="" className="img-fluid ml-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Contact End */}

      {/* Partner Start */}
      <section className="partners section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center partner-heading">Business Partner Trusted</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
              <div className="partner">
                <img src="./asset/image/A (3).png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
              <div className="partner">
                <img src="./asset/image/A (4).png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
              <div className="partner">
                <img src="./asset/image/A (2).png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
              <div className="partner">
                <img src="./asset/image/A (1).png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partner End */}

      
    </>
  );
}

export default ContactUs;

