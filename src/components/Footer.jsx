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
      <div className="copyright-area-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-wrapper">
                <p className="copy-right-para">© themes-park
                  | All Rights Reserved
                </p>
                <ul>
                  <li><a href="#">Trams &amp; Condition</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scrollToTop" style={{ display: 'block' }}>
        <div className="arrowUp">
          <i className="fa-light fa-arrow-up" />
        </div>
        <div className="water" style={{ transform: 'translate(0px, 87%)' }}>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
            <use xlinkHref="#wave" />
          </svg>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
            <use xlinkHref="#wave" />
          </svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 560 20" style={{ display: 'none' }}>
            <symbol id="wave">
              <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" fill="#" />
              <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" fill="#" />
              <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" fill="#" />
              <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" fill="#" />
            </symbol>
          </svg>
        </div>
      </div>

      <div className="demo-button-wrapper">
        <div className="buy-theme">
          <Link to="https://themeforest.net/item/reeni-personal-portfolio-html-template/56387656" target="_blank">
            <div className="theme-wrapper">
              <div>
                <svg width={22} height={22} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9854 19.9999C11.479 19.9999 11.8791 19.5998 11.8791 19.1063C11.8791 18.6127 11.479 18.2126 10.9854 18.2126C10.4919 18.2126 10.0918 18.6127 10.0918 19.1063C10.0918 19.5998 10.4919 19.9999 10.9854 19.9999Z" fill="white">
                  </path>
                  <path d="M16.1233 13.0134L11.0833 13.5539C10.9895 13.5633 10.9427 13.4477 11.0177 13.3883L15.9483 9.54819C16.267 9.28572 16.4732 8.87952 16.3857 8.44208C16.2983 7.77341 15.7452 7.33597 15.0453 7.42346L9.68658 8.20773C9.59284 8.22023 9.54285 8.1015 9.61784 8.04213L14.9297 3.98639C15.9764 3.17087 16.0639 1.57107 15.1047 0.639933C14.2329 -0.231832 12.8331 -0.203711 11.9613 0.668055L3.403 9.37634C3.08429 9.72629 2.93743 10.1919 3.02492 10.6855C3.17178 11.4729 3.95605 11.9948 4.74345 11.851L9.3585 10.9105C9.45849 10.8886 9.5116 11.023 9.42724 11.0792L4.30913 14.357C3.66859 14.7632 3.378 15.4912 3.5811 16.2192C3.7842 17.1785 4.74658 17.7315 5.67771 17.5003L13.3299 15.6162C13.4174 15.5943 13.4799 15.6943 13.4236 15.763L12.23 17.2378C11.9113 17.644 12.4331 18.1971 12.8706 17.8784L16.8013 14.6475C17.5012 14.0664 17.0357 12.929 16.1326 13.0165L16.1233 13.0134Z" fill="white" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className="all-demo show-demo">
          <div className="demos">
            <div className="theme-wrapper">
              <div>44 Pre-built sites</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
