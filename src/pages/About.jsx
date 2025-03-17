import React from 'react'
import Header from '../components/header'
import { Link } from 'react-router-dom'
import CustomLine from '../assets/images/custom-line/custom-line.png'
import ExpertImgTwo from '../assets/images/experiences/expert-img-two.jpg'
import Footer from '../components/footer'

const About = () => {
    return (
        <div>
            <Header />

            <div className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner text-center">
                                <h1 className="title split-collab">About Me</h1>
                                <ul className="page-list">
                                    <li className="tmp-breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="icon"><i className="fa-solid fa-angle-right" /></li>
                                    <li className="tmp-breadcrumb-item active">About Me</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="service-area tmp-section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                                <div className="service-card-icon">
                                    <i className="fa-light fa-pen-ruler" />
                                </div>
                                <h4 className="service-title"><Link to="/service-detail">Web Design</Link></h4>
                                <p className="service-para">120 Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-2 tmp-link-animation">
                                <div className="service-card-icon">
                                    <i className="fa-light fa-bezier-curve" />
                                </div>
                                <h4 className="service-title"><Link to="/service-detail">Ui/Ux Design</Link></h4>
                                <p className="service-para">241 Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                                <div className="service-card-icon">
                                    <i className="fa-light fa-lightbulb" />
                                </div>
                                <h4 className="service-title"><Link to="/service-detail">Web Research</Link></h4>
                                <p className="service-para">240 Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-4 tmp-link-animation">
                                <div className="service-card-icon">
                                    <i className="fa-light fa-envelope" />
                                </div>
                                <h4 className="service-title"><Link to="/service-detail">Marketing</Link></h4>
                                <p className="service-para">331 Prodect</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="tmp-skill-area tmp-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="progress-wrapper">
                                <div className="content">
                                    <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                        Design Skill <span><img src={CustomLine} alt="custom-line" /></span>
                                    </h2>

                                    <div className="progress-charts">
                                        <h6 className="heading heading-h6">
                                            PHOTOSHOT</h6>
                                        <div className="progress">
                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: '100%', visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.3s', animationName: 'fadeInLeft' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="percent-label">100%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Progress Charts */}
                                    {/* Start Single Progress Charts */}
                                    <div className="progress-charts">
                                        <h6 className="heading heading-h6">
                                            FIGMA</h6>
                                        <div className="progress">
                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{ width: '95%', visibility: 'visible', animationDuration: '0.6s', animationDelay: '0.4s', animationName: 'fadeInLeft' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="percent-label">95%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Progress Charts */}
                                    {/* Start Single Progress Charts */}
                                    <div className="progress-charts">
                                        <h6 className="heading heading-h6">
                                            ADOBE XD</h6>
                                        <div className="progress">
                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: '60%', visibility: 'visible', animationDuration: '0.7s', animationDelay: '0.5s', animationName: 'fadeInLeft' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="percent-label">60%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Progress Charts */}
                                    {/* Start Single Progress Charts */}
                                    <div className="progress-charts">
                                        <h6 className="heading heading-h6">
                                            ADOBE ILLUSTRATOR</h6>
                                        <div className="progress">
                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{ width: '70%', visibility: 'visible', animationDuration: '0.8s', animationDelay: '0.6s', animationName: 'fadeInLeft' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="percent-label">70%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Progress Charts */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="progress-wrapper">
                                <div className="content">
                                    <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                        Development Skill <span><img src={CustomLine} alt="custom-line" /></span>
                                    </h2>
                                    {/* Start Single Progress Charts */}
                                    <div className="progress-charts">
                                        <h6 className="heading heading-h6">
                                            HTML</h6>
                                        <div className="progress">
                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: '100%', visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.3s', animationName: 'fadeInLeft' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="percent-label">100%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Progress Charts */}
                                    {/* Start Single Progress Charts */}
                                    <div className="progress-charts">
                                        <h6 className="heading heading-h6">
                                            CSS</h6>
                                        <div className="progress">
                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{ width: '95%', visibility: 'visible', animationDuration: '0.6s', animationDelay: '0.4s', animationName: 'fadeInLeft' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="percent-label">95%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Progress Charts */}
                                    {/* Start Single Progress Charts */}
                                    <div className="progress-charts">
                                        <h6 className="heading heading-h6">
                                            Javascript</h6>
                                        <div className="progress">
                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: '60%', visibility: 'visible', animationDuration: '0.7s', animationDelay: '0.5s', animationName: 'fadeInLeft' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="percent-label">60%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Progress Charts */}
                                    {/* Start Single Progress Charts */}
                                    <div className="progress-charts">
                                        <h6 className="heading heading-h6">
                                            Php/Wordpress</h6>
                                        <div className="progress">
                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{ width: '70%', visibility: 'visible', animationDuration: '0.8s', animationDelay: '0.6s', animationName: 'fadeInLeft' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="percent-label">70%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="counter-area" style={{ marginTop: '250px' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="year-of-expariance-wrapper bg-blur-style-one tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <div className="year-expariance-wrap">
                                    <h2 className="counter year-number"><span className="odometer" data-count={25}>00</span>
                                    </h2>
                                    <h3 className="year-title">Years Of <br /> experience</h3>
                                </div>
                                <p className="year-para">Business consulting consultants provide expert advice and guida the a
                                    businesses to help theme their performance efficiency</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="counter-area-right-content">
                                <div className="row g-5">
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
                                            <h3 className="counter counter-title"><span className="odometer" data-count={20}>00</span>k+
                                            </h3>
                                            <p className="counter-para">Our Project Complete</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
                                            <h3 className="counter counter-title"><span className="odometer" data-count={10}>00</span>k+
                                            </h3>
                                            <p className="counter-para">Our Natural Products</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
                                            <h3 className="counter counter-title"><span className="odometer" data-count={200}>00</span>+
                                            </h3>
                                            <p className="counter-para">Clients Reviews</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                                            <h3 className="counter counter-title"><span className="odometer" data-count={1000}>00</span>+
                                            </h3>
                                            <p className="counter-para">our Satisfied Clientd</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="education-experience tmp-section-gapTop">
                <div className="container">
                    <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">Education <span><img src={CustomLine} alt="custom-line" /></span>
                    </h2>
                    <div className="row g-5">
                        <div className="col-lg-6 col-sm-6">
                            <div className="education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <h4 className="edu-sub-title">Trainer Marketing</h4>
                                <h2 className="edu-title">2005-2009</h2>
                                <p className="edu-para">A personal portfolio is a curated collection of an individual's professional
                                    work, showcasing their skills, experience A personal portfolio.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
                                <h4 className="edu-sub-title">Assistant Director</h4>
                                <h2 className="edu-title">2010-2014</h2>
                                <p className="edu-para">Each project here showcases my commitment to excellence and adaptability,
                                    tailored to meet each client’s unique needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
                                <h4 className="edu-sub-title">Design Assistant</h4>
                                <h2 className="edu-title">2008-2012</h2>
                                <p className="edu-para">I’ve had the privilege of working with various clients, from startups to
                                    established companies, helping bring their visions to life.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                                <h4 className="edu-sub-title">Design Assistant</h4>
                                <h2 className="edu-title">2008-2012</h2>
                                <p className="edu-para">Each project here showcases my commitment to excellence and adaptability,
                                    tailored to meet each client’s unique needs a personal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="experiences-wrapper v2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="experiences-wrap-right-content">
                                    <img className="tmp-scroll-trigger tmp-zoom-in animation-order-1" src={ExpertImgTwo} alt="expert-img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="experiences-wrap-left-content">
                                    <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">Experiences
                                        <span><img src={CustomLine} alt="custom-line" /></span>
                                    </h2>
                                    <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                                        <p className="ex-subtitle">experience</p>
                                        <h2 className="ex-name">Fatima Asrafy</h2>
                                        <h3 className="ex-title">UI/UX Designer</h3>
                                        <p className="ex-para">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                            desi dolore eu fugiat nulla pariatu Duis aute irure</p>
                                    </div>
                                    <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-2">
                                        <p className="ex-subtitle">experience</p>
                                        <h2 className="ex-name">Fatima Asrafy</h2>
                                        <h3 className="ex-title">UI/UX Designer</h3>
                                        <p className="ex-para">Interested in working together? Let’s bring your ideas to life!
                                            Contact me, and let’s start building something.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-price-plan-area tmp-section-gapTop">
                <div className="container">
                    <div className="section-head mb--50">
                        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <span className="subtitle">My Price plan</span>
                        </div>
                        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Enhancing Collaboration
                            <br /> between Remote
                        </h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="price-plan-card tmponhover blur-style-two tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <span className="price-sub-title">Starter</span>
                                <h3 className="main-price">$ 5.00</h3>
                                <p className="per-month">Per Month</p>
                                <div className="check-box">
                                    <ul>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">5 Social Media Account</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">Free Platform Access</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">24/7 Customer Support</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tmp-button-here">
                                    <Link className="tmp-btn hover-icon-reverse btn-border btn-md radius-round" to="/contact">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Get Started</span>
                                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 tmp-scroll-trigger tmp-fade-in animation-order-2">
                            <div className="price-plan-card tmponhover blur-style-two active">
                                <span className="price-sub-title">Basic</span>
                                <h3 className="main-price">$ 230.00</h3>
                                <p className="per-month">Per Month</p>
                                <div className="check-box">
                                    <ul>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">5 Social Media Account</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">Free Platform Access</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">Marketing Platform</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">24/7 Customer Support</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">Life time support</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tmp-button-here">
                                    <Link className="tmp-btn hover-icon-reverse btn-md radius-round" to="/contact">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Get Started</span>
                                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="price-plan-card tmponhover blur-style-two tmp-scroll-trigger tmp-fade-in animation-order-3">
                                <span className="price-sub-title">Premium</span>
                                <h3 className="main-price">$ 45.00</h3>
                                <p className="per-month">Per Month</p>
                                <div className="check-box">
                                    <ul>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">5 Social Media Account</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">Free Platform Access</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box-item">
                                                <div className="box-icon">
                                                    <i className="fa-solid fa-circle-check" />
                                                </div>
                                                <p className="box-para">24/7 Customer Support</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tmp-button-here">
                                    <Link className="tmp-btn hover-icon-reverse btn-border btn-md radius-round" to="/contact">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Get Started</span>
                                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="get-in-touch-area tmp-section-gapBottom" style={{ marginTop: '250px' }}>
                <div className="container">
                    <div className="contact-get-in-touch-wrap">
                        <div className="get-in-touch-wrapper tmponhover">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-5">
                                    <div className="section-head text-align-left">
                                        <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                                            <span className="subtitle">GET IN TOUCH</span>
                                        </div>
                                        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Elevate your brand with Me </h2>
                                        <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">ished fact that a reader will be
                                            distrol acted bioiiy desig
                                            ished fact that a reader will acted ished fact that a reader will be distrol
                                            acted </p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="contact-inner">
                                        <div className="contact-form">
                                            <div id="form-messages" className="error" />
                                            <form className="tmp-dynamic-form" id="contact-form" method="POST" action="https://themes-park.net/product/html/reeni/mailer.php">
                                                <div className="contact-form-wrapper row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input className="input-field" name="name" id="contact-name" placeholder="Your Name" type="text" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input className="input-field" id="contact-phone" placeholder="Phone Number" type="number" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input className="input-field" id="contact-email" name="email" placeholder="Your Email" type="email" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input className="input-field" type="text" id="subject" name="subject" placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <textarea className="input-field" placeholder="Your Message" name="message" id="contact-message" required defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="tmp-button-here">
                                                            <button className="tmp-btn hover-icon-reverse radius-round w-100" name="submit" type="submit" id="submit">
                                                                <span className="icon-reverse-wrapper">
                                                                    <span className="btn-text">Appointment Now</span>
                                                                    <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                                                    <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About
