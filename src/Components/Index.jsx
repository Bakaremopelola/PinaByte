import React from 'react';

function Index() {
    return (
        <>
            {/* Header Start */}
            <section className="header">
                {/* Header Navigation Start */}
                <div className="container header-nav">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light main-menu fixed-top">
                                <div className="container">
                                    <a href="#" className="navbar-brand">
                                        <img src="./asset/image/Logo.png" alt="Pinabyte" />
                                    </a>
                                    <button className="navbar-toggler" data-toggle="collapse" data-target="#beeToggler">
                                        <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="beeToggler">
                                        <ul className="navbar-nav ml-auto">
                                            <li><a href="#">Home</a></li>
                                            &nbsp;
                                            <li><a href="./project.html">Project</a></li>
                                            &nbsp;
                                            <li><a href="./service.html">Service</a></li>
                                            &nbsp;
                                            <li><a href="./team.html">Team</a></li>
                                            &nbsp;
                                            <li><a href="./blog.html">Blog</a></li>
                                            &nbsp;
                                            <li>
                                                <a href="contact-us.html">
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
                <div className="container header-content">
                    <div className="row">
                        <div className="col-md-6 centralize">
                            <div className="left-content">
                                <h2>Help Your <span className="highlight">Business</span> Growth Up To <span className="highlight">High</span> Level</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo eros, sollicitudin et fringilla id, volutpat id magna.
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
            <section className="work-process section-padding" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="process-block">
                                <img src="./asset/image/discussion.svg" alt="Projec Discussion" />
                                <h3>Project Discussion</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="process-block">
                                <img src="./asset/image/web-design.svg" alt="Projec Discussion" />
                                <h3>Design & Deveopment</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="process-block">
                                <img src="./asset/image/web-design.svg" alt="Projec Discussion" />
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
                            <div className="project-discussion">
                                <h2>Let’s Talk About <span className="highlight">Your Project</span></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna diam, ultricies ut ultricies eu, cursus quis libero. Sed maximus ligula in purus bibendum viverra. Cras sed odio condimentum, finibus sem eu, auctor nisi. Fusce eget nunc tincidunt
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna diam, ultricies ut ultricies eu, cursus quis libero. Sed maximus
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
                        <h2 className="text-center w-100 service-heading">We Provide a Platform To Easily <span className="highlight">Build a Website</span></h2>
                    </div>
                </div>

                <div className="container text-center mt-5">
                    {/* Carousel content goes here */}
                </div>
            </section>
            {/* Services End */}

            {/* Testimonial Start */}
            <section className="testimonial section-padding">
                <div className="container">
                    {/* Testimonial content goes here */}
                </div>
            </section>
            {/* Testimonial End */}

            {/* Portfolio Start */}
            <section className="portfolio section-padding">
                <div className="container">
                    {/* Portfolio content goes here */}
                </div>
            </section>
            {/* Portfolio End */}

            {/* Partner Start */}
            <section className="partners section-padding">
                <div className="container">
                    {/* Partner content goes here */}
                </div>
            </section>
            {/* Partner End */}

            {/* Footer Start */}
            <section className="footer section-padding">
                <div className="container">
                    {/* Footer content goes here */}
                </div>
            </section>
            {/* Footer End */}
            
        </>
    );
}

export default Index;
