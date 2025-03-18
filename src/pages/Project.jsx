import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import TabImage4 from '../assets/images/latest-portfolio/tab-image-4.png'
import TabImage5 from '../assets/images/latest-portfolio/tab-image-5.png'
import TabImage6 from '../assets/images/latest-portfolio/tab-image-6.png'
import TabImage7 from '../assets/images/latest-portfolio/tab-image-7.png'
import Footer from '../components/Footer'

const Project = () => {
  return (
    <>
      <Header />

      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">Project</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="icon"><i className="fa-solid fa-angle-right" /></li>
                  <li className="tmp-breadcrumb-item active">Project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="tmp-latest-portfolio tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="latest-portfolio-card v5 tmp-hover-link">
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <Link to="/project-detail">
                      <img className="img-primary hidden-on-mobile" src={TabImage4} alt="Blog Thumbnail" />
                      <img className="img-secondary" src={TabImage4} alt="BLog Thumbnail" />
                    </Link>
                  </div>
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title"><Link className="link" to="/project-detail">Digital Transformation Advisors</Link>
                    </h3>
                    <p className="portfoli-card-para"> Development Coaches</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="latest-portfolio-card v5 tmp-hover-link">
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <Link to="/project-detail">
                      <img className="img-primary hidden-on-mobile" src={TabImage5} alt="Blog Thumbnail" />
                      <img className="img-secondary" src={TabImage5} alt="BLog Thumbnail" />
                    </Link>
                  </div>
                  <Link to="/project-detail" className="img-link-icon"><i className="fa-solid fa-arrow-up-long" /></Link>
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title"><Link className="link" to="/project-detail">Digital Transformation Advisors</Link>
                    </h3>
                    <p className="portfoli-card-para"> Development Coaches</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="latest-portfolio-card v5 tmp-hover-link">
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <Link to="/project-detail">
                      <img className="img-primary hidden-on-mobile" src={TabImage6} alt="Blog Thumbnail" />
                      <img className="img-secondary" src={TabImage6} alt="BLog Thumbnail" />
                    </Link>
                  </div>
                  <Link to="/project-detail" className="img-link-icon"><i className="fa-solid fa-arrow-up-long" /></Link>
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title"><Link className="link" to="/project-detail">Digital Transformation Advisors</Link>
                    </h3>
                    <p className="portfoli-card-para"> Development Coaches</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="latest-portfolio-card v5 tmp-hover-link">
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <Link to="/project-detail">
                      <img className="img-primary hidden-on-mobile" src={TabImage7} alt="Blog Thumbnail" />
                      <img className="img-secondary" src={TabImage7} alt="BLog Thumbnail" />
                    </Link>
                  </div>
                  <Link to="/project-detail" className="img-link-icon"><i className="fa-solid fa-arrow-up-long" /></Link>
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title"><Link className="link" to="/project-detail">Digital Transformation Advisors</Link>
                    </h3>
                    <p className="portfoli-card-para"> Development Coaches</p>
                  </div>
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

export default Project
