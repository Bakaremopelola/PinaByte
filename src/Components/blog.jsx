import React from 'react';

const Blog = () => {
    return (
        <>
            {/* Header Start */}
            <section className="header contact-header">
                {/* Header Navigation Start */}
                <div className="container header-nav">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light main-menu fixed-top">
                                <div className="container">
                                    <a href="#" className="navbar-brand">
                                        <img src="./asset/image/Logo.png" alt="LeadsbeeLogo" />
                                    </a>
                                    <button className="navbar-toggler" data-toggle="collapse" data-target="#beeToggler">
                                        <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="beeToggler">
                                        <ul className="navbar-nav ml-auto ">
                                            <li><a href="./Home.jsx">Home</a></li>
                                            &nbsp;
                                            <li><a href="./Project.jsx">Project</a></li>
                                            &nbsp;
                                            <li><a href="./Service.jsx">Service</a></li>
                                            &nbsp;
                                            <li><a href="./Team.jsx">Team</a></li>
                                            &nbsp;
                                            <li><a href="#">Blog</a></li>
                                            &nbsp;
                                            <li>
                                                <a href="./ContactUs.jsx">
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
                <div className="container header-content ">
                    <div className="row h-100">
                        <div className="col-md-6 centralize">
                            <div className="left-content ">
                                <h2>Our <span className="highlight">Blog</span></h2>
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
                        <h2 className="text-center w-100 service-heading">Latest:<span className="highlight">Blog</span></h2>
                    </div>
                </div>
                <div className="container mt-5 blog-container">
                    {/* Insert your blog post components here */}
                </div>
            </section>
            {/* Footer Start */}
            <section className="footer section-padding">
                <div className="container">
                    {/* Footer content goes here */}
                </div>
            </section>
        </>
    );
}

export default Blog;

