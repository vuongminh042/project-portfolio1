import React from 'react'
import Header from '../components/header'
import { Link } from 'react-router-dom'
import ThumnailImg from '../assets/images/projects-details/thumnail-img.png'
import ProjectDetialsSwiperImg1 from '../assets/images/projects-details/project-detials-swiper-img-1.jpg'
import ProjectDetialsSwiperImg2 from '../assets/images/projects-details/project-detials-swiper-img-2.png'
import Footer from '../components/Footer'

const ProjectDetail = () => {
    return (
        <>
            <Header />

            <div className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner text-center">
                                <h1 className="title split-collab">Project Details</h1>
                                <ul className="page-list">
                                    <li className="tmp-breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="icon"><i className="fa-solid fa-angle-right" /></li>
                                    <li className="tmp-breadcrumb-item active">Project Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-details-area-wrapper tmp-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-details-thumnail-wrap">
                                <img src={ThumnailImg} alt="thumbnail" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="project-details-content-wrap">
                                <h2 className="title">Supporting Health Initiatives</h2>
                                <p className="docs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galltype and scrambled it to make a type specimen book. It has survived not
                                    only five centuries tinto electronic typesetting remaining essentially unchanged</p>
                                <p className="docs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    print</p>
                                <div className="check-box-wrap">
                                    <ul>
                                        <li>
                                            <h4 className="check-box-item"><span><i className="fa-solid fa-circle-check" /></span>Ui/visual Design</h4>
                                        </li>
                                        <li>
                                            <h4 className="check-box-item"><span><i className="fa-solid fa-circle-check" /></span>App Development</h4>
                                        </li>
                                        <li>
                                            <h4 className="check-box-item"><span><i className="fa-solid fa-circle-check" /></span>Software Developer</h4>
                                        </li>
                                    </ul>
                                </div>
                                <h2 className="mini-title">Elevate Your Business with IT Solutions</h2>
                                <p className="docs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galltype and scrambled it to make a type specimen book. It has survived not
                                    only five centuries tinto electronic typesetting remaining essentially unchanged</p>
                                <div className="project-details-swiper-wrapper">
                                    <div className="swiper project-details-swiper">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="project-details-img">
                                                    <img src={ProjectDetialsSwiperImg1} alt="swiper-img" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="project-details-img">
                                                    <img src={ProjectDetialsSwiperImg2} alt="swiper-img" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="project-details-img">
                                                    <img src={ProjectDetialsSwiperImg1} alt="swiper-img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-details-swiper-btn">
                                        <div className="project-swiper-button-prev"><span><i className="fa-solid fa-arrow-left" /></span>Previous</div>
                                        <div className="project-swiper-button-next">Next <span><i className="fa-solid fa-arrow-right" /></span></div>
                                    </div>
                                </div>
                            </div>
                            {/* Tpm Get In touch start */}
                            <section className="get-in-touch-area pt--80">
                                <div className="container p-0">
                                    <div className="contact-get-in-touch-wrap">
                                        <div className="get-in-touch-wrapper tmponhover">
                                            <div className="row g-5 align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="contact-inner">
                                                        <div className="contact-form">
                                                            <form className="tmp-dynamic-form" id="contact-form" method="POST" action="https://themes-park.net/product/html/reeni/mail.php">
                                                                <div className="contact-form-wrapper row">
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <input className="input-field" name="contact-name" id="contact-name" placeholder="Your Name" type="text" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <input className="input-field" name="contact-phone" id="contact-phone" placeholder="Phone Number" type="number" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <input className="input-field" id="contact-email" name="contact-email" placeholder="Your Email" type="text" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <input className="input-field" type="text" id="subject" name="subject" placeholder="Subject" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="form-group">
                                                                            <textarea className="input-field" placeholder="Your Message" name="contact-message" id="contact-message" defaultValue={""} />
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
                            {/* Tpm Get In touch End */}
                        </div>
                        <div className="col-lg-4">
                            <div className="signle-side-bar project-details-area tmponhover">
                                <div className="header">
                                    <h3 className="title">Project Details</h3>
                                </div>
                                <div className="body">
                                    <div className="project-details-info">Name: <span>Hosting vps</span></div>
                                    <div className="project-details-info">Author: <span>Nadimul Islam</span></div>
                                    <div className="project-details-info">Date: <span>23 January,2024</span></div>
                                    <div className="project-details-info">Tags: <span>Host Web Design</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ProjectDetail
