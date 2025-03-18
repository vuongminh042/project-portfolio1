import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import { Link } from 'react-router-dom'
import LatestServiceUserImgTwo from '../assets/images/services/latest-services-user-image-two.png'
import CustomLine from '../assets/images/custom-line/custom-line.png'
import ExpertImgTwo from '../assets/images/experiences/expert-img-two.jpg'
import CompanyLogo1 from '../assets/images/our-supported-company/company-logo-1.svg'
import CompanyLogo2 from '../assets/images/our-supported-company/company-logo-2.svg'
import CompanyLogo3 from '../assets/images/our-supported-company/company-logo-3.svg'
import CompanyLogo4 from '../assets/images/our-supported-company/company-logo-4.svg'
import CompanyLogo5 from '../assets/images/our-supported-company/company-logo-5.svg'
import CompanyLogo6 from '../assets/images/our-supported-company/company-logo-6.svg'
import CompanyLogo7 from '../assets/images/our-supported-company/company-logo-7.svg'
import CompanyLogo8 from '../assets/images/our-supported-company/company-logo-8.svg'
import PortfolioImg1 from '../assets/images/latest-portfolio/portfoli-img-1.jpg'
import PortfolioImg2 from '../assets/images/latest-portfolio/portfoli-img-2.jpg'
import PortfolioImg3 from '../assets/images/latest-portfolio/portfoli-img-3.jpg'
import PortfolioImg4 from '../assets/images/latest-portfolio/portfoli-img-4.jpg'
import QuoteIcon from '../assets/images/icons/quote.svg'
import BlogImg4 from '../assets/images/blog/blog-img-4.jpg'
import BlogImg5 from '../assets/images/blog/blog-img-5.jpg'
import BlogImg6 from '../assets/images/blog/blog-img-6.jpg'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />

      <Banner />

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

      <section className="counter-area">
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

      <section className="latest-service-area tmp-section-gapTop">
        <div className="container">
          <div className="section-head mb--60">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">Latest Service</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Inspiring The World One
              Project</h2>
            <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3"> Business consulting
              consultants provide expert advice and guida
              businesses to help them improve their performance, efficiency, and organizational </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
                <h2 className="service-card-num"><span>01.</span>A Portfolio of Creativity</h2>
                <p className="service-para">Business consulting consultants provide expert advice and guida the a
                  businesses to help theme their performance efficiency</p>
              </div>
              <div className="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
                <h2 className="service-card-num"><span>02.</span>My Portfolio of Innovation</h2>
                <p className="service-para">My work is driven by the belief that thoughtful design and strategic
                  planning can empower brands, transform businesses</p>
              </div>
              <div className="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
                <h2 className="service-card-num"><span>03.</span>A Showcase of My Projects</h2>
                <p className="service-para">In this portfolio, you’ll find a curated selection of projects that
                  highlight my skills in [Main Areas, e.g., responsive web design</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-card-user-image">
                <img className="tmp-scroll-trigger tmp-zoom-in animation-order-1" src={LatestServiceUserImgTwo} alt="latest-user-image" />
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

      <div className="our-supported-company-area tmp-section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-1">
                <img src={CompanyLogo1} alt="Reeni - Personal Portfolio HTML Template" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-2">
                <img src={CompanyLogo2} alt="Reeni - Personal Portfolio HTML Template" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-3">
                <img src={CompanyLogo3} alt="Reeni - Personal Portfolio HTML Template" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-4">
                <img src={CompanyLogo4} alt="Reeni - Personal Portfolio HTML Template" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-5">
                <img src={CompanyLogo5} alt="Reeni - Personal Portfolio HTML Template" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-6">
                <img src={CompanyLogo6} alt="Reeni - Personal Portfolio HTML Template" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-7">
                <img src={CompanyLogo7} alt="Reeni - Personal Portfolio HTML Template" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-8">
                <img src={CompanyLogo8} alt="Reeni - Personal Portfolio HTML Template" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tpm-custom-box-bg">
        <div className="latest-portfolio-area custom-column-grid">
          <div className="container">
            <div className="section-head mb--60">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">Latest Portfolio</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Transforming Ideas
                into Exceptional </h2>
              <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">Business
                consulting consultants provide expert advice and guida
                businesses to help them improve their performance, efficiency, and organizational</p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <Link to="/project-detail">
                        <img className="img-primary hidden-on-mobile" src={PortfolioImg1} alt="Blog Thumbnail" />
                        <img className="img-secondary" src={PortfolioImg1} alt="BLog Thumbnail" />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      <h3 className="portfolio-card-title"><Link className="link" to="/project-detail">My
                        Journey as a Creator</Link>
                      </h3>
                      <p className="portfoli-card-para">Development Coaches</p>
                    </div>
                    <Link to="/project-detail" className="tmp-arrow-icon-btn">
                      <div className="btn-inner">
                        <i className="tmp-icon fa-solid fa-arrow-up-right" />
                        <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="latest-portfolio-card mt--100 mt_sm--0 mt_md--50 tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <Link to="/project-detail">
                        <img className="img-primary hidden-on-mobile" src={PortfolioImg2} alt="Blog Thumbnail" />
                        <img className="img-secondary" src={PortfolioImg2} alt="BLog Thumbnail" />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      <h3 className="portfolio-card-title"><Link className="link" to="/project-detail">My
                        Professional Portfolio
                      </Link></h3><Link className="link" to="/project-detail">
                        <p className="portfoli-card-para"> Development Coaches</p>
                      </Link></div><Link className="link" to="/project-detail">
                    </Link><Link to="/project-detail" className="tmp-arrow-icon-btn">
                      <div className="btn-inner">
                        <i className="tmp-icon fa-solid fa-arrow-up-right" />
                        <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <Link to="/project-detail">
                        <img className="img-primary hidden-on-mobile" src={PortfolioImg3} alt="Blog Thumbnail" />
                        <img className="img-secondary" src={PortfolioImg3} alt="BLog Thumbnail" />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      <h3 className="portfolio-card-title"><Link className="link" to="/project-detail">My
                        Portfolio of Innovation</Link>
                      </h3>
                      <p className="portfoli-card-para">App Development</p>
                    </div>
                    <Link to="/project-detail" className="tmp-arrow-icon-btn">
                      <div className="btn-inner">
                        <i className="tmp-icon fa-solid fa-arrow-up-right" />
                        <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="latest-portfolio-card mt--100 mt_sm--0 mt_md--50 tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <Link to="/project-detail">
                        <img className="img-primary hidden-on-mobile" src={PortfolioImg4} alt="Blog Thumbnail" />
                        <img className="img-secondary" src={PortfolioImg4} alt="BLog Thumbnail" />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      <h3 className="portfolio-card-title"><Link className="link" to="/project-detail">A
                        Portfolio of Creativity and Passion</Link>
                      </h3>
                      <p className="portfoli-card-para">Business Development</p>
                    </div>
                    <Link to="/project-detail" className="tmp-arrow-icon-btn">
                      <div className="btn-inner">
                        <i className="tmp-icon fa-solid fa-arrow-up-right" />
                        <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="my-skill tmp-section-gapTop">
          <div className="container">
            <div className="section-head text-align-left mb--60">
              <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">My Skill</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Elevated Designs
                Personalized <br /> the best Experiences</h2>
            </div>
            <div className="services-widget v1">
              <div className="service-item current tmp-scroll-trigger tmp-fade-in animation-order-1">
                <div className="my-skill-card">
                  <div className="card-icon">
                    <i className="fa-light fa-building-columns" />
                  </div>
                  <div className="card-title">
                    <h3 className="main-title">Ui/visual Design</h3>
                    <p className="sub-title">21 Done</p>
                  </div>
                  <p className="card-para">My work is driven by the belief that thoughtful design and strategic
                    planning can empower brands strategic planning can empower brands</p>
                  <Link to="#" className="read-more-btn">Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right" /></span></Link>
                </div>
                <button className="service-link modal-popup" />
              </div>
              <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-2">
                <div className="my-skill-card">
                  <div className="card-icon">
                    <i className="fa-light fa-calendar" />
                  </div>
                  <div className="card-title">
                    <h3 className="main-title">Ui/visual Design</h3>
                    <p className="sub-title">21 Done</p>
                  </div>
                  <p className="card-para">In this portfolio, you’ll find a curated selection of projects that
                    highlight my skills in [Main Areas, e.g., responsive web design</p>
                  <Link to="#" className="read-more-btn">Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right" /></span></Link>
                </div>
                <button className="service-link modal-popup" />
              </div>
              <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-3">
                <div className="my-skill-card">
                  <div className="card-icon">
                    <i className="fa-light fa-pen-nib" />
                  </div>
                  <div className="card-title">
                    <h3 className="main-title">Motion Design</h3>
                    <p className="sub-title">20 Done</p>
                  </div>
                  <p className="card-para">Each project here showcases my commitment to excellence and
                    adaptability, tailored to meet each client’s unique needs</p>
                  <Link to="#" className="read-more-btn">Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right" /></span></Link>
                </div>
                <button className="service-link modal-popup" />
              </div>
              <div className="active-bg wow fadeInUp mleave" />
            </div>
          </div>
        </section>
      </div>

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

      <section className="testimonial-area tmp-section-gapTop">
        <div className="container">
          <div className="section-head mb--50">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">Our Testimonial</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Enhancing Collaboration
              <br /> between Remote
            </h2>
          </div>
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="swiper-testimonials-area-wrapper-card">
                <div className="swiper swiper-testimonials-2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-card tmponhover style-2 tmp-scroll-trigger animation-order-1">
                        <div className="content">
                          <div className="testimonital-icon">
                            <img src={QuoteIcon} alt="testimonial-icon" />
                          </div>
                          <h2 className="text-doc">A personal portfolio is a curated collection of an
                            individual's professional work, showcasing their skilA personal
                            portfolio is a curated collection of an individual's professional work,
                            showcasing their skills, </h2>
                          <h3 className="card-title">Cameron Williamson</h3>
                          <p className="card-para">Ui/Ux Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-card tmponhover style-2 tmp-scroll-trigger animation-order-2">
                        <div className="content">
                          <div className="testimonital-icon">
                            <img src={QuoteIcon} alt="testimonial-icon" />
                          </div>
                          <h2 className="text-doc">A personal portfolio is a curated collection of an
                            individual's professional work, showcasing their skilA personal
                            portfolio is a curated collection of an individual's professional work,
                            showcasing their skills, </h2>
                          <h3 className="card-title">Leslie Alexander</h3>
                          <p className="card-para">Ui/Ux Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-card tmponhover style-2 tmp-scroll-trigger animation-order-1">
                        <div className="content">
                          <div className="testimonital-icon">
                            <img src={QuoteIcon} alt="testimonial-icon" />
                          </div>
                          <h2 className="text-doc">A personal portfolio is a curated collection of an
                            individual's professional work, showcasing their skilA personal
                            portfolio is a curated collection of an individual's professional work,
                            showcasing their skills, </h2>
                          <h3 className="card-title">Cameron Williamson</h3>
                          <p className="card-para">Ui/Ux Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-card tmponhover style-2 tmp-scroll-trigger animation-order-2">
                        <div className="content">
                          <div className="testimonital-icon">
                            <img src={QuoteIcon} alt="testimonial-icon" />
                          </div>
                          <h2 className="text-doc">A personal portfolio is a curated collection of an
                            individual's professional work, showcasing their skilA personal
                            portfolio is a curated collection of an individual's professional work,
                            showcasing their skills, </h2>
                          <h3 className="card-title">Leslie Alexander</h3>
                          <p className="card-para">Ui/Ux Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-and-news-are tmp-section-gap">
        <div className="container">
          <div className="section-head mb--50">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">Blog and news</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Elevating Personal
              Branding the <br /> through Powerful Portfolios</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-1">
                <div className="img-box">
                  <Link to="/blog-detail">
                    <img className="img-primary hidden-on-mobile" src={BlogImg4} alt="Blog Thumbnail" />
                    <img className="img-secondary" src={BlogImg4} alt="BLog Thumbnail" />
                  </Link>
                  <ul className="blog-tags">
                    <li><span className="tag-icon"><i className="fa-regular fa-user" /></span>Mesbah</li>
                    <li><span className="tag-icon"><i className="fa-solid fa-calendar-days" /></span>April 10</li>
                  </ul>
                </div>
                <div className="blog-content-wrap">
                  <h3 className="blog-title v2"><Link className="link" to="/blog-detail">Let’s bring your ideas to
                    life! Contact me, and let’s</Link></h3>
                  <Link to="/blog-detail" className="read-more-btn v2">Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right" /></span></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-2">
                <div className="img-box">
                  <Link to="/blog-detail">
                    <img className="img-primary hidden-on-mobile" src={BlogImg5} alt="Blog Thumbnail" />
                    <img className="img-secondary" src={BlogImg5} alt="BLog Thumbnail" />
                  </Link>
                  <ul className="blog-tags">
                    <li><span className="tag-icon"><i className="fa-regular fa-user" /></span>Mesbah</li>
                    <li><span className="tag-icon"><i className="fa-solid fa-calendar-days" /></span>April 10</li>
                  </ul>
                </div>
                <div className="blog-content-wrap">
                  <h3 className="blog-title v2"><Link className="link" to="/blog-detail">Inspiring the World, One
                    Project at a
                    Time for the
                    man</Link></h3>
                  <Link to="/blog-detail" className="read-more-btn v2">Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right" /></span></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-3">
                <div className="img-box">
                  <Link to="/blog-detail">
                    <img className="img-primary hidden-on-mobile" src={BlogImg6} alt="Blog Thumbnail" />
                    <img className="img-secondary" src={BlogImg6} alt="BLog Thumbnail" />
                  </Link>
                  <ul className="blog-tags">
                    <li><span className="tag-icon"><i className="fa-regular fa-user" /></span>Mesbah</li>
                    <li><span className="tag-icon"><i className="fa-solid fa-calendar-days" /></span>April 10</li>
                  </ul>
                </div>
                <div className="blog-content-wrap">
                  <h3 className="blog-title v2"><Link className="link" to="/blog-detail">Each one showcases my
                    approach and dedication man</Link></h3>
                  <Link to="/blog-detail" className="read-more-btn v2">Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right" /></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
