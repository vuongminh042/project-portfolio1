import React from 'react'
import Header from '../components/header'
import { Link } from 'react-router-dom'
import BlogClassicCardImg1 from '../assets/images/blog/blog-classic-card-img-1.jpg'
import BlogClassicCardImg2 from '../assets/images/blog/blog-classic-card-img-2.jpg'
import BlogClassicCardImg3 from '../assets/images/blog/blog-classic-card-img-3.jpg'
import SinglePostCardImg1 from '../assets/images/blog/single-post-card-img-1.png'
import SinglePostCardImg2 from '../assets/images/blog/single-post-card-img-2.png'
import SinglePostCardImg3 from '../assets/images/blog/single-post-card-img-3.png'
import AboutMeUserImg from '../assets/images/blog/about-me-user-img.png'
import Footer from '../components/Footer'


const Blog = () => {
    return (
        <>
            <Header />

            <div className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner text-center">
                                <h1 className="title split-collab">Blog Classic</h1>
                                <ul className="page-list">
                                    <li className="tmp-breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="icon"><i className="fa-solid fa-angle-right" /></li>
                                    <li className="tmp-breadcrumb-item active">Blog Classic</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-classic-area-wrapper tmp-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-classic-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                                <div className="img-box">
                                    <Link to="/blog-detail">
                                        <img className="img-primary hidden-on-mobile" src={BlogClassicCardImg1} alt="Blog Thumbnail" />
                                        <img className="img-secondary" src={BlogClassicCardImg1} alt="BLog Thumbnail" />
                                    </Link>
                                </div>
                                <div className="blog-classic-content">
                                    <div className="blog-classic-tag">
                                        <ul>
                                            <li>
                                                <div className="tag-wrap">
                                                    <i className="fa-solid fa-tag" />
                                                    <h4 className="tag-title">Web design</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tag-wrap">
                                                    <i className="fa-regular fa-comment" />
                                                    <h4 className="tag-title">Comments (05)</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tag-wrap">
                                                    <i className="fa-solid fa-calendar-day" />
                                                    <h4 className="tag-title">Comments (05)</h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link to="#">Stand out from the crowd with a professional portfolio</Link>
                                    </h2>
                                    <p className="para">Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra
                                        .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti
                                        ullamcorper</p>
                                    <div className="tmp-button-here">
                                        <Link className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" to="/blog-detail">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Read More</span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-classic-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                                <div className="img-box">
                                    <Link to="/blog-detail">
                                        <img className="img-primary hidden-on-mobile" src={BlogClassicCardImg2} alt="Blog Thumbnail" />
                                        <img className="img-secondary" src={BlogClassicCardImg2} alt="BLog Thumbnail" />
                                    </Link>
                                </div>
                                <div className="blog-classic-content">
                                    <div className="blog-classic-tag">
                                        <ul>
                                            <li>
                                                <div className="tag-wrap">
                                                    <i className="fa-solid fa-tag" />
                                                    <h4 className="tag-title">Web design</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tag-wrap">
                                                    <i className="fa-regular fa-comment" />
                                                    <h4 className="tag-title">Comments (05)</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tag-wrap">
                                                    <i className="fa-solid fa-calendar-day" />
                                                    <h4 className="tag-title">Comments (05)</h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link to="#">Elevate your brand with a the stunning portfolio</Link></h2>
                                    <p className="para">Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra
                                        .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti
                                        ullamcorper</p>
                                    <div className="tmp-button-here">
                                        <Link className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" to="/blog-detail">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Read More</span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-classic-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                                <div className="img-box">
                                    <Link to="blog-details.html">
                                        <img className="img-primary hidden-on-mobile" src={BlogClassicCardImg3} alt="Blog Thumbnail" />
                                        <img className="img-secondary" src={BlogClassicCardImg3} alt="BLog Thumbnail" />
                                    </Link>
                                </div>
                                <div className="blog-classic-content">
                                    <div className="blog-classic-tag">
                                        <ul>
                                            <li>
                                                <div className="tag-wrap">
                                                    <i className="fa-solid fa-tag" />
                                                    <h4 className="tag-title">Web design</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tag-wrap">
                                                    <i className="fa-regular fa-comment" />
                                                    <h4 className="tag-title">Comments (05)</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tag-wrap">
                                                    <i className="fa-solid fa-calendar-day" />
                                                    <h4 className="tag-title">Comments (05)</h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link to="#">Elevate your brand with a the stunning portfolio</Link></h2>
                                    <p className="para">Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra
                                        .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti
                                        ullamcorper</p>
                                    <div className="tmp-button-here">
                                        <Link className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" to="/blog-detail">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Read More</span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tmp-pagination-button">
                                <Link to="#" className="pagination-btn"><i className="fa-sharp fa-regular fa-arrow-left" /></Link>
                                <Link to="#" className="pagination-btn active">1</Link>
                                <Link to="#" className="pagination-btn">2</Link>
                                <Link to="#" className="pagination-btn">3</Link>
                                <Link to="#" className="pagination-btn"><i className="fa-sharp fa-regular fa-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tmp-sidebar">
                                <div className="signle-side-bar search-area tmponhover">
                                    <div className="body">
                                        <div className="search-area">
                                            <input type="text" placeholder="Type here" required />
                                            <button><i className="fa-solid fa-magnifying-glass" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="signle-side-bar recent-post-area tmponhover">
                                    <div className="header">
                                        <h3 className="title">Recent Post</h3>
                                    </div>
                                    <div className="body">
                                        <Link to="#" className="single-post">
                                            <span className="single-post-left">
                                                <i className="fa-solid fa-arrow-right" />
                                                <span className="post-title">Business Solution</span>
                                            </span>
                                            <span className="post-num">(01)</span>
                                        </Link>
                                        <Link to="#" className="single-post">
                                            <span className="single-post-left">
                                                <i className="fa-solid fa-arrow-right" />
                                                <span className="post-title">Web Development Wizardry</span>
                                            </span>
                                            <span className="post-num">(08)</span>
                                        </Link>
                                        <Link to="#" className="single-post">
                                            <span className="single-post-left">
                                                <i className="fa-solid fa-arrow-right" />
                                                <span className="post-title">Content Creation and Strategy</span>
                                            </span>
                                            <span className="post-num">(05)</span>
                                        </Link>
                                        <Link to="#" className="single-post">
                                            <span className="single-post-left">
                                                <i className="fa-solid fa-arrow-right" />
                                                <span className="post-title">UI/UX Design Innovation</span>
                                            </span>
                                            <span className="post-num">(05)</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="signle-side-bar recent-post-area tmponhover">
                                    <div className="header">
                                        <h3 className="title">Recent Post</h3>
                                    </div>
                                    <div className="body">
                                        <div className="single-post-card tmp-hover-link">
                                            <div className="single-post-card-img">
                                                <img src={SinglePostCardImg1} alt />
                                            </div>
                                            <div className="single-post-right">
                                                <div className="single-post-top">
                                                    <i className="fa-regular fa-folder-open" />
                                                    <p className="post-title">Category</p>
                                                </div>
                                                <h3 className="post-title"><Link className="link" to="#">Sustainable Solutions: Designing for Tomorrow</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="single-post-card tmp-hover-link">
                                            <div className="single-post-card-img">
                                                <img src={SinglePostCardImg2} alt />
                                            </div>
                                            <div className="single-post-right">
                                                <div className="single-post-top">
                                                    <i className="fa-regular fa-folder-open" />
                                                    <p className="post-title">Category</p>
                                                </div>
                                                <h3 className="post-title"><Link className="link" to="#">Technological Innovations: Shaping the Future</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="single-post-card tmp-hover-link">
                                            <div className="single-post-card-img">
                                                <img src={SinglePostCardImg3} alt />
                                            </div>
                                            <div className="single-post-right">
                                                <div className="single-post-top">
                                                    <i className="fa-regular fa-folder-open" />
                                                    <p className="post-title">Category</p>
                                                </div>
                                                <h3 className="post-title"><Link className="link" to="#">Adventure Awaits Exploring the Great Outdoors</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="signle-side-bar tmponhover">
                                    <div className="header">
                                        <h3 className="title">About Me</h3>
                                    </div>
                                    <div className="body">
                                        <div className="about-me-details">
                                            <div className="about-me-details-head">
                                                <div className="about-me-img">
                                                    <img src={AboutMeUserImg} alt="about-me-user-img" />
                                                </div>
                                                <div className="about-me-right-content">
                                                    <h3 className="title">Fatima Afrafy</h3>
                                                    <p className="para">UI/UX Designer </p>
                                                    <div className="social-link">
                                                        <Link to="#"><i className="fa-brands fa-instagram" /></Link>
                                                        <Link to="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                                        <Link to="#"><i className="fa-brands fa-twitter" /></Link>
                                                        <Link to="#"><i className="fa-brands fa-facebook-f" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="about-me-para">Aliquam eros justo, posuere loborti viverra ullamcorper posuere
                                                viverra .Aliquam eros justo, posuere justo, posuere.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="signle-side-bar tmponhover">
                                    <div className="header">
                                        <h3 className="title">Tags</h3>
                                    </div>
                                    <div className="body">
                                        <div className="tags-wrapper">
                                            <Link to="#" className="tag-link">All Project</Link>
                                            <Link to="#" className="tag-link">Resume</Link>
                                            <Link to="#" className="tag-link">Graphics</Link>
                                            <Link to="#" className="tag-link">Web Design</Link>
                                            <Link to="#" className="tag-link">CV</Link>
                                            <Link to="#" className="tag-link">Starts</Link>
                                            <Link to="#" className="tag-link">Creative Portfolio</Link>
                                            <Link to="#" className="tag-link">Portfolio</Link>
                                            <Link to="#" className="tag-link">CV Card</Link>
                                            <Link to="#" className="tag-link">Start shape</Link>
                                        </div>
                                    </div>
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

export default Blog
