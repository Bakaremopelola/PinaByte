import React from 'react';

const Services = () => {
    return (
        <>
            <section className="header contact-header">
                {/* Header Navigation Start */}
                <div className="container header-nav">
                    {/* Your Header Navigation Content */}
                </div>
                {/* Header Navigation End */}

                {/* Header Banner Start */}
                <div className="container header-content ">
                    {/* Your Header Banner Content */}
                </div>
                {/* Header Banner End */}
            </section>

            {/* Services Start */}
            <section className="services section-padding">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center w-100 service-heading py-5">We Provide a Platform To Easily<br /><span className="highlight">Build a Website</span></h2>
                    </div>
                </div>

                <div className="container">
                    <div className="row card-row-gap">
                        {/* Your Services Card Content */}
                    </div>
                </div>
            </section>
            {/* Services End */}

            {/* Why Choose Leadsbee */}
            <section className="service-type section-padding">
                <div className="container">
                    {/* Your Why Choose Leadsbee Content */}
                </div>
            </section>

            {/* Let's Start */}
            <section className="lets-start section-padding">
                <div className="container">
                    {/* Your Let's Start Content */}
                </div>
            </section>

            {/* Footer Start */}
            <section className="footer section-padding">
                <div className="container">
                    {/* Your Footer Content */}
                </div>
            </section>
            {/* Footer End */}

            {/* Adding Scripts */}
            <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
            <script src="./asset/js/mixitup.min.js"></script>
            <script src="./asset/js/main.js"></script>
        </>
    );
};

export default Services;
