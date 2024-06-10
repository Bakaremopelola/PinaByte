import React from 'react';

const Team = () => {
  return (
    <>
      {/* Header Start */}
      <section className="header contact-header">
      
        {/* Header Banner Start */}
        <div className="container header-content ">
          <div className="row h-100">
            <div className="col-md-6 centralize">
              <div className="left-content ">
                <h2>
                  Our <span className="highlight">Team</span>
                </h2>
                <p>Home / Team</p>
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

      <section className="service-type mt-5">
        <div className="container">
          <div className="row service-type-gap">
            <div className="col-md-6 centralize">
              <img src="./asset/image/Group 1675.png" className="img-fluid mb-5" />
            </div>
            <div className="col-md-6 centralize">
              <div className="team-page-description">
                <h2>Analysis</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="row service-type-gap">
            <div className="col-md-6 centralize">
              <div className="team-page-description">
                <h2>UI/UX</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="col-md-6 centralize">
              <img src="./asset/image/Group 1752.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Start */}

      <section className="team section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading">Our Expert <span className="highlight">Team</span> </h2>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-card text-center">
                <img src="./asset/image/team1.png" alt="" className="img-fluid" />
                <h3>Latasha Hicks</h3>
                <p>UI/UX Designer</p>
                <ul>
                  <li>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-github"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Repeat the team cards with different data */}
          </div>
        </div>
      </section>

      {/* Team Section End */}

      {/* Counter Section Start */}

      <section className="achivements">
      <div className="container section-padding" style={{ background: '#FFEEBF' }}>

          <div className="row">
            {/* Counter items */}
          </div>
        </div>
      </section>

      {/* Team Call to Action Start */}

      <section className="section-padding team-counter ">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <h2 className="text-center w-100 service-heading">Are You Ready To <span className="highlight">Start A Business?</span> </h2>
            <p className="sub-heading text-center w-100">We Will Help You To Your Business From A to Z.</p>
            <button className="mt-3">
              Contact Us <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Team Call to Action End */}

     
    </>
  );
};

export default Team;
