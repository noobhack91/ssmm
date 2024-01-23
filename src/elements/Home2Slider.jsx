import React from 'react'
import { IMAGES } from '../constants/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Link } from 'react-router-dom'



const home2sliderBlog = [
    { image: IMAGES.home2sliderImg1, title: "ARCHITECHTUR", paregraph: "Modern House Interior", subtitle: "New York" },
    { image: IMAGES.home2sliderImg2, title: "INTERIOR DESIGN", paregraph: "Rasidaintial Project", subtitle: "Paris" },
    { image: IMAGES.home2sliderImg3, title: "ARCHITECHTUR", paregraph: "Modern Family House", subtitle: "Italy" },
    { image: IMAGES.home2sliderImg1, title: "INTERIOR DESIGN", paregraph: "Rasidaintial Project", subtitle: "Paris" },
    { image: IMAGES.home2sliderImg2, title: "ARCHITECHTUR", paregraph: "Modern Family House", subtitle: "Italy" },
    { image: IMAGES.home2sliderImg3, title: "INTERIOR DESIGN", paregraph: "Modern House Interior", subtitle: "New York" },
]

const Home2Slider = () => {
    const swiperRef = React.useRef(null);

    let pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
        el: ".Paginationnumbers"

    };

    return (
        <>

            <section className="content-inner-1 portfolio-2 bg-secondary" style={{ backgroundImage: `url(${IMAGES.home2Bg2})`, backgroundPosition: 'center' }}>
                <div className="resizemargin">
                    <div className="row spno">
                        <div className="col-xl-3 col-lg-4 align-self-center px-3 mb-lg-0 mb-4">
                            <div className="section-head style-1 text-white">
                                <h6 className="sub-title text-primary">OUR PORTFOLIOS</h6>
                                <h2 className="title  text-white">Our Latest Projects</h2>
                                <p className="m-b30">Phasellus facilisis urna at ultrices egestas. Nulla mi arcu, finibus non lectus non, mollis tempus enim.</p>
                            </div>
                            <Link className="btn btn-primary btn-rounded">View All Projects</Link>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <Swiper className="swiper-container swiper-portfolio-2 lightgallery"
                                ref={swiperRef}
                                slidesPerView={3}
                                loop={true}
                                pagination={pagination}
                                modules={[Pagination]}
                                breakpoints={{
                                    991: {
                                        slidesPerView: 3,
                                    },
                                    591: {
                                        slidesPerView: 2,
                                    },
                                    300: {
                                        slidesPerView: 1,
                                    },
                                }}

                            >
                                <div className="swiper-wrapper">
                                    {
                                        home2sliderBlog.map((i, index) => (
                                            <SwiperSlide className="swiper-slide" key={index}>
                                                <div className="dz-box overlay style-2">
                                                    <div className="dz-media">
                                                        <img src={i.image} alt="" />
                                                    </div>
                                                    <div className="dz-info">
                                                        <h6 className="sub-title">{i.title}</h6>
                                                        <h4 className="title m-b15"><Link to="/portfolio-details">{i.paregraph}<span>{i.subtitle}</span></Link></h4>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </div>
                                <div>
                                    <div  className="swiper-pagination Paginationnumbers" ></div>
                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home2Slider