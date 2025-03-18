import React from 'react'
import Header from '../components/header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Service = () => {
    return (
        <div>
            <Header />

            <div className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner text-center">
                                <h1 className="title split-collab">Service</h1>
                                <ul className="page-list">
                                    <li className="tmp-breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="icon"><i className="fa-solid fa-angle-right" /></li>
                                    <li className="tmp-breadcrumb-item active">Service</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="latest-service-area tmp-section-gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-6">
                            <Link to="/service-detail" class="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <h2 class="service-card-num"><span>01.</span>Success Architects</h2>
                                <p class="service-para">Business consulting consultants provide expert advice and guida the a
                                    businesses to help theme their performance efficiency</p>
                            </Link>
                            <Link to="/service-detail" class="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
                                <h2 class="service-card-num"><span>02.</span>Success Architects</h2>
                                <p class="service-para">App consulting consultants provide expert advice and guida the a
                                    businesses to help theme their performance efficiency</p>
                            </Link>
                            <Link to="/service-detail" class="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
                                <h2 class="service-card-num"><span>03.</span>Success Architects</h2>
                                <p class="service-para">I specialize in creating solutions that are not only visually engaging but also align with business goals. From [list services, e.g., branding,</p>
                            </Link>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                                <h2 class="service-card-num"><span>04.</span>Ui/visual Design</h2>
                                <p class="service-para">I’m proud of what I’ve accomplished and excited to share my journey with you. I’m proud of what I’ve accomplished and excited to.</p>
                            </div>
                            <div class="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-5">
                                <h2 class="service-card-num"><span>05.</span>Branding Design</h2>
                                <p class="service-para">Interested in working together? Let’s bring your ideas to life! Contact me, and let’s start building something amazing.</p>
                            </div>
                            <div class="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-6">
                                <h2 class="service-card-num"><span>06.</span>Motion Design</h2>
                                <p class="service-para">Feel free to browse through my recent projects. Each one showcases my approach and dedication to detail, creativity, and.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-price-plan-area tmp-section-gapTop" >
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

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Footer />
        </div>
    )
}

export default Service
