import React from 'react'
import { IMAGES } from '../constants/theme'
import { Home2Banner } from '../elements/Home2Banner'
import CountUp from 'react-countup'
import Home2Slider from '../elements/Home2Slider'
import { Swiper, SwiperSlide } from 'swiper/react'
import Blog from '../components/Blog'
import { motion } from 'framer-motion'
import { Autoplay } from 'swiper'
import { Link } from 'react-router-dom'


const ourServices = [
    {  img: IMAGES.service1, delay: 0.4, icon: "flaticon-blueprint-1", name: "Floor Plan", text: "Design" },
    {  img: IMAGES.service2, delay: 0.6, icon: "flaticon-crane", name: "Cunstruction", text: " Work" },
    {  img: IMAGES.service3, delay: 0.8, icon: "flaticon-interior-design-1", name: "Interiar", text: " desinig" },
]

const ourTeam = [
    { img: IMAGES.pic13, skill: "ENGENEER", name: "Andray Carol" },
    { img: IMAGES.pic14, skill: "MANAGER EFFIACT", name: "Phillip Scheilif" },
    { img: IMAGES.pic15, skill: "CEO FACTORY", name: "Lindsay Botosh" },
    { img: IMAGES.pic16, skill: "SENIOR ARCHITECT", name: "Kaylynn Donin" },
    { img: IMAGES.pic13, skill: "ENGENEER", name: "Andray Carol" },
    { img: IMAGES.pic14, skill: "MANAGER EFFIACT", name: "Phillip Scheilif" },
    { img: IMAGES.pic15, skill: "CEO FACTORY", name: "Lindsay Botosh" },
    { img: IMAGES.pic16, skill: "SENIOR ARCHITECT", name: "Kaylynn Donin" },


]

const testimonial = [
    { img: IMAGES.team1, name: "David Matin", skill: "ENGENEER" },
    { img: IMAGES.team2, name: "Lindsay Botosh", skill: "MANAGER EFFIACT" },
    { img: IMAGES.team3, name: "Phillip Scheilif", skill: "CEO FACTORY" },
]
const Home2 = () => {
    
    return (
        <>
            <div className="page-content bg-white">
                <div className="slidearea ps-0">
                    <div className="silder-two">
                        <Home2Banner />
                    </div>
                </div >

                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center about-bx3">
                            <div className="col-lg-6 m-b30">
                                <div className="dz-media">
                                    <motion.img src={IMAGES.home2about1} alt="" className="img1 aos-item aos-init aos-animate"
                                        initial={{ opacity: 0, y: "-10%" }}
                                        whileInView={{ opacity: 1, y: "0%" }}
                                        transition={{ duration: 1 }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 aos-item aos-init aos-animate" data-aos="fade-in" data-aos-duration="800" data-aos-delay="400">
                                <div className="section-head style-1">
                                    <h6 className="sub-title text-primary">About Us</h6>
                                    <h2 className="title">We Provide You The Best Experience</h2>
                                </div>
                                <p>Integer pretium, nisi at aliquam faucibus, ligula leo sollicitudin ligula, Link scelerisque magna nunc sit amet leo. Cras lobortis elementum orci, in lobortis velit gravida vel. In hac habitasse platea dictumst.</p>
                                <div className="history-row m-b30">
                                    <div>
                                        <h2 className="year"><CountUp end={10} duration={10} />+</h2>
                                        <span className="text">Years Of <br /> Experience</span>
                                    </div>
                                    <div>
                                        <h2 className="awards"><CountUp end={25} duration={10} />+</h2>
                                        <span className="text">Awards <br /> Gained</span>
                                    </div>
                                    <div>
                                        <h2 className="sales"><CountUp end={50} duration={6} />+</h2>
                                        <span className="text">Furniture <br /> Sold</span>
                                    </div>
                                </div>
                                <Link to="/about-us" className="btn shadow-primary btn-primary btn-rounded">READ MORE <i className="m-l10 las la-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                </section>
              
                <Home2Slider />
                
                <section className="content-inner-1 bg-light service-area">
                    <div className="container">
                        <div className="row align-items-center section-head style-1">
                            <motion.div className="col-lg-6 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
                                initial={{ opacity: 0, y: "100%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1 }}
                            >
                                <h5 className="text-primary sub-title">POPULAR SERVICES</h5>
                                <h2 className="title">Our Featured Services</h2>
                            </motion.div>
                            <motion.div className="col-lg-6 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"
                                initial={{ opacity: 0, y: "100%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="m-b0">Cras in lectus eget lectus aliquet posuere ac fermentum dui. Aliquam nisi ligula, posuere Link accumsan et, pellentesque nec elit. Donec odio velit, porta Link purus id, vulputate sodales ellentesque habitant morbi.</p>
                            </motion.div>
                        </div>
                        <div className="row align-items-center">

                            {
                                ourServices.map((i, index) => (
                                    <motion.div key={index} className="col-lg-4 col-md-6 m-lg-b30 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
                                        initial={{ opacity: 0, y: '100%' }}
                                        whileInView={{ opacity: 1, y: '0%' }}
                                        transition={{ duration: 1, delay: i.delay }}
                                    >
                                        <div className="icon-bx-wraper style-6" style={{ backgroundImage: `url(${i.img})` }}>
                                            <div className="icon-lg">
                                                <span className="icon-cell">
                                                    <i className={i.icon}></i>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dz-title">{i.name}<br /> {i.text}</h4>
                                                <p>Phasellus metus metus, luctus vitae convallis quis, condimentum vel enim nullam laoreet tincidunt.</p>
                                                <Link to="/services-details" className="btn btn-primary"><i className="las la-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </motion.div>

                                ))
                            }

                        </div>
                    </div>
                </section>
                <section className="py-5 bg-secondary" style={{ backgroundImage: `url(images/background/bg2-1.png)`, backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <motion.div className="section-head style-1 mb-3 mb-lg-0"
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1 }}
                                >
                                    <h6 className="sub-title text-primary">NEWSLETTER</h6>
                                    <h2 className="title text-white">Stay Updated With Us !</h2>
                                </motion.div>
                            </div>
                            <div className="col-lg-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <form className="dzSubscribe dz-subscription mt-3" action="script/mailchamp.php" method="post">
                                    <div className="dzSubscribeMsg Msg dz-subscription-msg"></div>
                                    <motion.div className="input-group"
                                        initial={{ opacity: 0, y: "100%" }}
                                        whileInView={{ opacity: 1, y: "0%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    >
                                        <input name="dzEmail" className="form-control" placeholder="Enter Your Email Address..." />
                                        <button name="submit" className="btn btn-primary btn-rounded">
                                            <span>Subscribe Now</span>
                                            <i className="m-l10 fas fa-plus scale08"></i>
                                        </button>
                                    </motion.div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner" style={{ backgroundImage: `url(images/background/bg2.png)`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">Our Team</h6>
                            <h2 className="title">Creative Expertise</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 m-b30">
                                <Swiper className="swiper-container team-swiper-2"
                                    slidesPerView={4}
                                    spaceBetween={30}

                                    breakpoints={{
                                        1280: {
                                            slidesPerView: 4,
                                        },
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
                                            ourTeam.map((i, ind) => (
                                                <SwiperSlide className="swiper-slide" key={ind}>
                                                    <div className="dz-team style-3 text-center m-b30 overlay-shine aos-item">
                                                        <div className="dz-media">
                                                            <Link><img src={i.img} alt="" /></Link>
                                                            <ul className="team-social">
                                                                <li><Link><i className="fab fa-facebook-f"></i></Link></li>
                                                                <li><Link><i className="fab fa-instagram"></i></Link></li>
                                                                <li><Link><i className="fab fa-twitter"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="dz-content m-t20">
                                                            <h6 className="dz-position line text-primary">{i.skill}</h6>
                                                            <h5 className="dz-name"><Link>{i.name}</Link></h5>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }

                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section className="bg-secondary test-area" style={{ backgroundImage: `url(${IMAGES.bg2_1})`, backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 aos-item" data-aos="fade-right" >
                                <div className="content-inner-1">
                                    <div className="section-head style-1">
                                        <h6 className="text-primary sub-title">TESTIMONIAL</h6>
                                        <h2 className="title text-white">What Our Client Say’s</h2>
                                    </div>
                                    <motion.div className="testi-inner"
                                        initial={{ opacity: 0, y: "100%" }}
                                        whileInView={{ opacity: 1, y: "0%" }}
                                        transition={{ duration: 1 }}
                                    >
                                        <Swiper className="swiper-container testimonial-swiper-2"
                                            loop={true}
                                            modules={[Autoplay]}
                                            speed={1200}
                                            autoplay={{
                                                delay: 1000,
                                                disableOnInteraction: false
                                            }}
                                        >
                                            <div className="swiper-wrapper">
                                                {
                                                    testimonial.map((i, index) => (
                                                        <SwiperSlide className="swiper-slide" key={index}>
                                                            <div className="testimonial-2">
                                                                <div className="testimonial-text">
                                                                    <p>Aliquam Link arcu dolor. Sed malesuada convallis euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui leo, posuere pulvinar metus vitae, condimentum tempus ipsum.</p>
                                                                </div>
                                                                <div className="testimonial-detail">
                                                                    <div className="testimonial-pic">
                                                                        <img src={i.img} alt="" />
                                                                    </div>
                                                                    <div className="clearfix">
                                                                        <h4 className="testimonial-name">{i.name}</h4>
                                                                        <span className="testimonial-position">{i.skill}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }

                                            </div>
                                        </Swiper>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="media-full">
                                    <img src={IMAGES.aboutTestimonial} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
                <section className="content-inner-1 bg-gray line-img" style={{ backgroundImage: `url(images/background/bg2.png)`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <Blog />
                </section>

            </div>
        </>
    )
}

export default Home2