import React from 'react'
import Header from '../components/header'
import { Link } from 'react-router-dom'
import ServiceDetialsThumnailWrap from '../assets/images/services/service-detials-thumnail-wrap.png'
import Footer from '../components/Footer'

const ServiceDetail = () => {
  return (
    <>
      <Header />

      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">Service Details</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="icon"><i className="fa-solid fa-angle-right" /></li>
                  <li className="tmp-breadcrumb-item active">Service Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-details-area-wrapper tmp-section-gap">
        <div className="container">
          <div className="row row--40">
            <div className="col-lg-8">
              <div className="service-thumnail-wrap">
                <img src={ServiceDetialsThumnailWrap} alt="thumnail-img" />
              </div>
              <h2 className="title split-collab">Elevated Designs Personalized the best Experiences</h2>
              <p className="doc-para">Web designing in a powerful way of just not an only professions, however, in a
                passion for our Company. We have to a tendency to believe the idea that smart looking of any
                websitet in on visitors.Web designing in a powerful way of just not an only profession Web
                designing in a powerful way of just not an only </p>
              <h2 className="title-mini split-collab">My Experts Areas where i gained skill</h2>
              <p className="doc-para">Web designing in a powerful way of just not an only professions, however, in a
                passion for our Company. We have to a tendency to believe the idea that smart looking of any
                websitet in on visitors.Web designing in a powerful way of just not an only profession Web
                designing in a powerful way of just not an only</p>
              <p className="doc-para">Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum
                ullamcorper viverra laoreet Aliquam eros </p>
              <h2 className="title-mini split-collab">My Experts Areas where i gained skill</h2>
              <p className="doc-para">Web designing in a powerful way of just not an only professions, however, in a
                passion for our Company. We have to a tendency to believe the idea that smart looking of any
                websitet in on visitors.Web designing in a powerful way of just not an only profession Web
                designing in a powerful way of just not an only</p>
              <p className="doc-para">Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum
                ullamcorper viverra laoreet Aliquam eros </p>
              <p className="doc-para">viverra laoreet matti ullamcorper posuere
                viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum
                ullamcorper viverra laoreet Aliquam eros</p>
            </div>
            <div className="col-lg-4">
              <div className="signle-side-bar service-list-area tmponhover">
                <div className="header">
                  <h3 className="title">Service Category</h3>
                </div>
                <div className="body">
                  <a href="#" className="single-service">
                    <p className="service-title">TechPros</p>
                    <span className="service-icon"><i className="fa-solid fa-angle-right" /></span>
                  </a>
                  <a href="#" className="single-service">
                    <p className="service-title"> NetWorks</p>
                    <span className="service-icon"><i className="fa-solid fa-angle-right" /></span>
                  </a>
                  <a href="#" className="single-service">
                    <p className="service-title">DataMasters</p>
                    <span className="service-icon"><i className="fa-solid fa-angle-right" /></span>
                  </a>
                  <a href="#" className="single-service">
                    <p className="service-title">Dibetics section</p>
                    <span className="service-icon"><i className="fa-solid fa-angle-right" /></span>
                  </a>
                  <a href="#" className="single-service">
                    <p className="service-title">DigitalSolutions</p>
                    <span className="service-icon"><i className="fa-solid fa-angle-right" /></span>
                  </a>
                  <a href="#" className="single-service">
                    <p className="service-title">CodeGenius</p>
                    <span className="service-icon"><i className="fa-solid fa-angle-right" /></span>
                  </a>
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

export default ServiceDetail
