import React from 'react'
import { Link } from 'react-router-dom'
import WhiteLogoReeni2 from '../assets/images/logo/white-logo-reeni-2.png'
import LogoWhite from '../assets/images/logo/logo-white.png'
import WhiteLogoReeni from '../assets/images/logo/white-logo-reeni.png'
import Man from '../assets/images/logo/man.png'

const header = () => {
  return (
    <>
      <header className="tmp-header-area-start header-one header--sticky header--transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-content">
                <div className="logo">
                  <Link to="/">
                    <img className="logo-dark" src={WhiteLogoReeni2} alt="Reeni - Personal Portfolio HTML Template for developers and freelancers" />
                    <img className="logo-white" src={LogoWhite} alt="Reeni - Personal Portfolio HTML Template for developers and freelancers" />
                  </Link>
                </div>
                <nav className="tmp-mainmenu-nav d-none d-xl-block">
                  <ul className="tmp-mainmenu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li className="has-dropdown">
                      <Link to="#">Services
                        <i className="fa-regular fa-chevron-down" />
                      </Link>
                      <ul className="submenu">
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/service-detail">Service Details</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link to="#">Blog
                        <i className="fa-regular fa-chevron-down" />
                      </Link>
                      <ul className="submenu">
                        <li><Link to="/blog">Blog Classic</Link></li>
                        <li><Link to="/blog-detail">Blog Details</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link to="#">Project
                        <i className="fa-regular fa-chevron-down" />
                      </Link>
                      <ul className="submenu">
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/project-detail">Project Details</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="tmp-header-right">
                  <div className="social-share-wrapper d-none d-md-block">
                    <div className="social-link">
                      <Link to="#"><i className="fa-brands fa-instagram" /></Link>
                      <Link to="#"><i className="fa-brands fa-linkedin-in" /></Link>
                      <Link to="#"><i className="fa-brands fa-twitter" /></Link>
                      <Link to="#"><i className="fa-brands fa-facebook-f" /></Link>
                    </div>
                  </div>
                  <div className="actions-area">
                    <div className="tmp-side-collups-area d-none d-xl-block">
                      <button className="tmp-menu-bars tmp_button_active"><i className="fa-regular fa-bars-staggered" /></button>
                    </div>
                    <div className="tmp-side-collups-area d-block d-xl-none">
                      <button className="tmp-menu-bars humberger_menu_active"><i className="fa-regular fa-bars-staggered" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <div className="d-none d-xl-block">
          <div className="tmp-sidebar-area tmp_side_bar">
            <div className="inner">
              <div className="top-area">
                <a href="index.html" className="logo">
                  <img className="logo-dark" src={WhiteLogoReeni} alt="Reeni - Personal Portfolio HTML Template for developers and freelancers" />
                  <img className="logo-white" src={LogoWhite} alt="Reeni - Personal Portfolio HTML Template for developers and freelancers" />
                </a>
                <div className="close-icon-area">
                  <button className="tmp-round-action-btn close_side_menu_active">
                    <i className="fa-sharp fa-light fa-xmark" />
                  </button>
                </div>
              </div>
              <div className="content-wrapper">
                <div className="image-area-feature">
                  <a href="index.html">
                    <img src={Man} alt="personal-logo" />
                  </a>
                </div>
                <h5 className="title mt--30">Freelancer delivering exceptional Webflow, and Next.js solutions.</h5>
                <p className="disc">I am a skilled freelancer specializing in Webflow development, Figma design, and
                  Next.js projects. I deliver creative, dynamic, and user-centric web solutions.
                </p>
                <div className="short-contact-area">
                  {/* single contact information */}
                  <div className="single-contact">
                    <i className="fa-solid fa-phone" />
                    <div className="information tmp-link-animation">
                      <span>Call Now</span>
                      <a href="#" className="number">+92 (8800) - 98670</a>
                    </div>
                  </div>
                  {/* single contact information end */}
                  {/* single contact information */}
                  <div className="single-contact">
                    <i className="fa-solid fa-envelope" />
                    <div className="information tmp-link-animation">
                      <span>Mail Us</span>
                      <a href="#" className="number">example@info.com</a>
                    </div>
                  </div>
                  {/* single contact information end */}
                  {/* single contact information */}
                  <div className="single-contact">
                    <i className="fa-solid fa-location-crosshairs" />
                    <div className="information tmp-link-animation">
                      <span>My Address</span>
                      <span className="number">66 Broklyant, New York 3269</span>
                    </div>
                  </div>
                  {/* single contact information end */}
                </div>
                {/* social area start */}
                <div className="social-wrapper mt--20">
                  <span className="subtitle">find with me</span>
                  <div className="social-link">
                    <a href="#"><i className="fa-brands fa-instagram" /></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
                    <a href="#"><i className="fa-brands fa-twitter" /></a>
                    <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                  </div>
                </div>
                {/* social area end */}
              </div>
            </div>
          </div>
          <a className="overlay_close_side_menu close_side_menu_active" href="javascript:void(0);" />
        </div>
        <div className="d-block d-xl-none">
          <div className="tmp-popup-mobile-menu">
            <div className="inner">
              <div className="header-top">
                <div className="logo">
                  <a href="index.html" className="logo-area">
                    <img className="logo-dark" src="assets/images/logo/white-logo-reeni.png" alt="Reeni - Personal Portfolio HTML Template for developers and freelancers" />
                    <img className="logo-white" src="assets/images/logo/logo-white.png" alt="Reeni - Personal Portfolio HTML Template for developers and freelancers" />
                  </a>
                </div>
                <div className="close-menu">
                  <button className="close-button tmp-round-action-btn">
                    <i className="fa-sharp fa-light fa-xmark" />
                  </button>
                </div>
              </div>
              <ul className="tmp-mainmenu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li className="has-dropdown">
                  <a href="#">Services
                    <i className="fa-regular fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li><a href="service.html">Service</a></li>
                    <li><a href="service-details.html">Service Details</a></li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a href="#">Blog
                    <i className="fa-regular fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li><a href="blog.html">Blog Classic</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a href="#">Project
                    <i className="fa-regular fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li><a href="project.html">Project</a></li>
                    <li><a href="project-details.html">Project Details</a></li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
              <div className="social-wrapper mt--40">
                <span className="subtitle">find with me</span>
                <div className="social-link">
                  <a href="#"><i className="fa-brands fa-instagram" /></a>
                  <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
                  <a href="#"><i className="fa-brands fa-twitter" /></a>
                  <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                </div>
              </div>
              {/* social area end */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default header
