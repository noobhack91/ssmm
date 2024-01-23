import React from 'react'
import CommanBanner from '../elements/CommanBanner'
import { IMAGES } from '../constants/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css';
import BlogGridCard from '../elements/BlogGridCard';
import BlogGridCard2 from '../elements/BlogGridCard2';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';


const blogGrid = [
  { img: IMAGES.blogGridPic1 },
  { img: IMAGES.blogGridPic2 },
  { img: IMAGES.blogGridPic3 },

]

const BlogGrid = () => {

  const swiperRef = React.useRef(null)
  return (
    <>
      <CommanBanner mainTitle="Blog grid" parentTitle="Home" pageName="Our blog" bgImage={IMAGES.bnr1} />
      <div className="page-content bg-white">
        <div className="content-inner">
          <div className="container">
            <div className="row" id="masonry">
              <BlogGridCard image={IMAGES.blogGridPic2} />
              <div className="col-xl-6 col-lg-6 card-container">
                <div className="dz-card blog-grid style-1 m-b50 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="dz-media">
                    <Swiper className="swiper-container post-swiper"
                    modules={[Navigation]}
                    ref={swiperRef}
                    speed={1200}
                    loop={true}
                    >
                      {
                        blogGrid.map((item, index) => (
                          <SwiperSlide className="swiper-slide" key={index}>
                            <Link to="/blog-details"><img src={item.img} alt="" /></Link>
                          </SwiperSlide>
                        ))
                      }
                      <div className="prev-post-swiper-btn"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                      ><i className="la fa-angle-left"></i></div>
                      <div className="next-post-swiper-btn"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                      ><i className="la fa-angle-right"></i></div>
                    </Swiper>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li className="post-date">
                          <strong>26</strong>
                          <span>Apr</span>
                        </li>
                        <li className="post-category"><Link rel="category tag">Audio</Link></li>
                        <li className="post-user">By <Link> John Doe</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="dz-title"><Link to="/blog-details">Modern Family House.</Link></h3>
                    <div className="dz-post-text text">
                      <p>You can align your image to the left, right, or center with Link caption, link and alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop an.</p>
                    </div>
                    <div className="read-more">
                      <Link className="btn btn-primary btn-rounded btn-sm hover-icon">
                        <span>Read More </span>
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 card-container">
                <div className="dz-card blog-grid style-1 m-b50 post-video aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="dz-media">
                    <Link to="/blog-details">
                      <img src={IMAGES.blogGridPic3} alt="" />
                      <div className="post-video-icon fa fa-play"></div>
                    </Link>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li className="post-date">
                          <strong>26</strong>
                          <span>Apr</span>
                        </li>
                        <li className="post-category"><Link rel="category tag">Audio</Link></li>
                        <li className="post-user">By <Link> John Doe</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="dz-title"><Link to="/blog-details">Sample Hotel Art.</Link></h3>
                    <div className="dz-post-text text">
                      <p>You can align your image to the left, right, or center with Link caption, link and alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop an.</p>
                    </div>
                    <div className="read-more">
                      <Link className="btn btn-primary btn-rounded btn-sm hover-icon">
                        <span>Read More </span>
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <BlogGridCard2 />
              <BlogGridCard2 />

              <BlogGridCard image={IMAGES.blogGridPic3} />
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <nav aria-label="Blog Pagination">
                  <ul className="pagination text-center m-b30">
                    <li className="page-item"><Link className="page-link prev"><i className="la la-angle-left"></i></Link></li>
                    <li className="page-item"><Link className="page-link active">1</Link></li>
                    <li className="page-item"><Link className="page-link">2</Link></li>
                    <li className="page-item"><Link className="page-link">3</Link></li>
                    <li className="page-item"><Link className="page-link next"><i className="la la-angle-right"></i></Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogGrid