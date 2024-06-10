import React from 'react';

const Blog = () => {
    return (
        <>
            {/* Header Start */}
            <section className="header contact-header">

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
           
        </>
    );
}

export default Blog;

