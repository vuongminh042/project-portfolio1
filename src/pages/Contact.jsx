import React from 'react'
import Header from '../components/header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Header />

      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">Contact</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="icon"><i className="fa-solid fa-angle-right" /></li>
                  <li className="tmp-breadcrumb-item active">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area-wrapper tmp-section-gap">
        <div className="container">
          <div className="contact-info-wrap">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                  <div className="contact-icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <h3 className="title">Address</h3>
                  <p className="para">Dhaka 102, utl 1216, road 45</p>
                  <p className="para">house of street</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                  <div className="contact-icon">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <h3 className="title">E-mail</h3>
                  <Link to="mailto:themespark11@gmail.com">
                    <p className="para">hasan@yourmail.com</p>
                  </Link>
                  <Link to="mailto:themespark11@gmail.com">
                    <p className="para">themespark11@gmail.com</p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <h3 className="title">Call Me</h3>
                  <p className="para">0000 - 000 - 000 00</p>
                  <p className="para">+1234 - 000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tpm Get In touch start */}
        <section className="get-in-touch-area tmp-section-gapTop">
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
      </div>

      <Footer />
    </>
  )
}

export default Contact
