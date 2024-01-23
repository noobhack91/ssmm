import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import ModalVideo from "react-modal-video";
import pic1 from "../assets/images/main-slider/pic1.jpg";
import pic2 from "../assets/images/main-slider/pic2.jpg";
import Working from "../components/Working";
import VideoCounter from "../components/VideoCounter";
import PopularService from "../components/PopularService";
import Blog from "../components/Blog";
import { IMAGES } from "../constants/theme";
import Projects from "../components/Projects";
import Testimonial1 from "../components/Testimonial1";
import Testimonial2 from "../components/Testimonial2";
import Faq from "../components/Faq";
import Progress from "../components/Progress";

const slideImg = [{ text: "DESIGNING", img: process.env.PUBLIC_URL + pic2 }];
const Home = () => {
  const swiperRef = React.useRef(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="page-content bg-white">
        {/* <div className="slidearea"> */}
        {/* <div className="side-contact-info">
            <ul>
              <li>
                <i className="fas fa-phone-alt"></i> +919988227050 |
                +919976000142
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@impresabuildtech.com
              </li>
            </ul>
          </div> */}
        {/* </div> */}
        <h1
          style={{
            backgroundColor: "#e3421b",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          श्री सालासर बाला जी संकीर्तन मंडल मौर मंडी{" "}
        </h1>{" "}
        <div className="silder-one">
          <Swiper
            className="swiper-container main-silder-swiper"
            ref={swiperRef}
            slidesPerView={1}
            parallax={true}
            speed={1500}
            loop={true}
            pagination={{
              el: ".pagination-styled",
              type: "fraction",
            }}
            modules={[Pagination, Parallax, Navigation]}
          >
            {slideImg.map((i, index) => (
              <SwiperSlide className="swiper-slide" key={index} tag="div">
                <div className="silder-img overlay-black-light">
                  <img src={pic1} data-swiper-parallax="30%" alt="" />
                </div>
                {/* <div className="silder-content" data-swiper-parallax="-40%">
                    <div className="inner-content">
                      <h6 className="sub-title">{i.text}</h6>
                      <h1 className="title">We Create</h1>
                      <h3 className="title-small">
                        Unique Architecture
                        <br />
                        Design Ideas
                      </h3>
                      <Link
                        to="/about-us"
                        className="btn shadow-primary btn-light btn-rounded btn-ov-secondary"
                      >
                        READ MORE <i className="m-l10 fas fa-caret-right"></i>
                      </Link>
                    </div>
                    <div
                      className="overlay-slide"
                      data-swiper-parallax="100%"
                    ></div>
                  </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="slider-one-pagination">
              <div
                className="btn-prev swiper-button-prev1 swiper-button-white"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <i className="las la-long-arrow-alt-left"></i>PREV
              </div>
              <div className="swiper-pagination pagination-styled"></div>
              <div
                className="btn-next swiper-button-next1 swiper-button-white"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                NEXT<i className="las la-long-arrow-alt-right"></i>
              </div>
            </div> */}
        </div>
        <section
          className="section-full content-inner about-bx2"
          style={{
            backgroundImage: `url(${IMAGES.background2})`,
            backgroundPosition: "right bottom",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <Working />
          </div>
        </section>
        <section className="dz-content-bx style-3">
          <VideoCounter setOpen={setOpen} />
        </section>
        {/* <section
          className="content-inner-2"
          style={{
            backgroundImage: `url(${IMAGES.background3})`,
            backgroundPosition: "left top",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        > */}
          {/* <PopularService /> */}
        {/* </section> */}
        <section className="content-inner-2">
          <div className="container">
            <div className="row section-head-bx align-items-center">
              <div className="col-md-8">
                <div className="section-head style-1">
                  {/* <h6 className="sub-title text-primary">OUR PORTFOLIOS</h6> */}
                  <h2 className="title">हमारे द्वारा किये गये कार्य</h2>
                </div>
              </div>
              {/* <div className="col-md-4 text-start text-md-end mb-4 mb-md-0"> */}
                {/* <Link to="/portfolio" className="btn-link">
                  See All Projects <i className="fas fa-plus scale08"></i>
                </Link> */}
              {/* </div> */}
            </div>
          </div>
          <Projects />
        </section>
        {/* <section
          className="content-inner-2"
          style={{
            backgroundImage: `url(${IMAGES.bg2})`,
            backgroundPosition: "right bottom",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        > */}
          {/* <Testimonial1 />   */}
        {/* </section> */}
        <section className="content-inner-2">
          <Testimonial2 />
        </section>
        {/* <section
          className="section-full content-inner overflow-hidden"
          style={{
            backgroundImage: `url(${IMAGES.bg1})`,
            backgroundPosition: "left top",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        > */}
          {/* <Faq /> */}
        {/* </section> */}
        {/* <section className="section-full dz-content-bx style-2 text-white"> */}
          {/* <Progress /> */}
        {/* </section> */}
        {/* <section
          className="content-inner-1 bg-gray line-img"
          style={{
            backgroundImage: `url(images/background/bg2.png)`,
            backgroundPosition: "right bottom",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        > */}
          {/* <Blog /> */}
        {/* </section> */}
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="sNCv3_NTNtU"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Home;
