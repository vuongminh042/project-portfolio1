import React from 'react'
import WhiteLogoReeni2 from '../assets/images/logo/white-logo-reeni-2.png'
import { Link } from 'react-router-dom'
import FooterBgImg from '../assets/images/footer/footer-bg-img.png'

const Footer = () => {
  return (
    <>
      <footer className="footer-area footer-style-one-wrapper  tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-one">
            <div className="row g-5">
              <div className="col-lg-5 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link to="/">
                      <img src={WhiteLogoReeni2} alt="Reeni - Personal Portfolio HTML Template for developers and freelancers" />
                    </Link>
                  </div>
                  <p className="description"><span>Get Ready</span> To <br /> Create Great</p>
                  <form action="#" className="newsletter-form-1 mt--40">
                    <input type="email" placeholder="Email Adress" />
                    <span className="form-icon"><i className="fa-regular fa-envelope" /></span>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-link-animation">
                    <li>
                      <Link to="/about">About Me</Link>
                    </li>
                    <li>
                      <Link to="/service">Service</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog Post</Link>
                    </li>
                    <li>
                      <Link to="/contact">Pricing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact </h5>
                  <ul className="ft-link tmp-link-animation">
                    <li><span className="ft-icon"><i className="fa-solid fa-envelope" /></span><Link to="#">nafiz125@gmail.com</Link></li>
                    <li><span className="ft-icon"><i className="fa-solid fa-location-dot" /></span>3891
                      Ranchview Dr. Richardson</li>
                    <li><span className="ft-icon"><i className="fa-solid fa-phone" /></span><Link to="#">01245789321</Link></li>
                  </ul>
                  <div className="social-link footer">
                    <Link to="#"><i className="fa-brands fa-instagram" /></Link>
                    <Link to="#"><i className="fa-brands fa-linkedin-in" /></Link>
                    <Link to="#"><i className="fa-brands fa-twitter" /></Link>
                    <Link to="#"><i className="fa-brands fa-facebook-f" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bg-img">
          <img src={FooterBgImg} alt="footer-img" />
        </div>
      </footer>

    </>
  )
}

export default Footer
