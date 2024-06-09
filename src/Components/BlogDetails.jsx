import React from 'react';

const BlogDetail = () => {
    return (
        <>
            {/* Header Start */}
            <section className="header ">
                {/* Header Navigation Start */}
                <div className="container header-nav">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
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
                                            <li><a href="./blog.jsx">Blog</a></li>
                                            &nbsp;
                                            <li><a href="ContactUs.jsx"><button className="nav-button">Contact Us <i className="fas fa-angle-right"></i> </button></a></li>
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
                                <h2>Blog <span className="highlight">Details</span> </h2>
                                <p>Home / Blog Details</p>
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
            <section className="best-solutions" >
                <div className="container" style={{ padding: "50px 0px 50px 0px" }}>
                    <div className="row">
                        <div className="col-md-8 col-xs-12">
                            <img src="./asset/image/blog-details.svg" className="sample-image-service img-fluid" />
                            <div className="blog-post"> 
                                <div className="blog-category">
                                    <p>UI/UX DESIGNER</p>
                                </div>
                                <h2 className="blog-title">Business contents insuranc is a type of business.</h2>  
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto quasi esse eum quibusdam maxime ipsam laudantium non sed cum odit earum minima, labore inventore, quaerat consequatur eius, quae temporibus The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>     
                                <p style={{ background: "#FFEEBF" }} className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum voluptatibus hic od it asperiores consequatur. Aliquam voluptates doloribus dignissimos? Tenetur, officiis?</p>
                                {/* Additional content */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Additional content */}
            </section>
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

export default BlogDetail;

