import React, { useState } from 'react'
import CountUp from 'react-countup'
import '../assets/vendor/magnific-popup/magnific-popup.min.css'
import { IMAGES } from '../constants/theme';

import { motion } from 'framer-motion';
import jagran from "../assets/images/work/jagran.jpg";


// import img


const VideoCounter = ({setOpen}) => {
    return (
        <>
            <div className="dz-content-inner">
                <div className="row">
                    <motion.div className="col-xl-10 col-lg-12 counter-info aos-item" 
                        initial={{ opacity: 0, x: "-20%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{ duration: 1 }}
                    >
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item" >
                                <motion.div className="counter-bx"
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    <h2 className="counter text-primary">
                                        <CountUp end={22} duration={5} />
                                    </h2>
                                    <h3 className="m-b0"> बिशाल<br />जागरण</h3>
                                </motion.div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item"  >
                                <motion.div className="counter-bx"
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                >
                                    <h2 className="counter text-primary">
                                        <CountUp end={8} duration={5} />
                                    </h2>
                                    <h3 className="m-b0"> ठंडे  <br />RO पानी</h3>
                                </motion.div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item"  >
                                <motion.div className="counter-bx"
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                >
                                    <h2 className="counter text-primary">
                                        <CountUp end={7} duration={5} />
                                    </h2>
                                    <h3 className="m-b0">बेटी बचाओ <br />बेटी पढ़ाओ </h3>
                                </motion.div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item"  >
                                <motion.div className="counter-bx"
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1, delay: 1 }}
                                >
                                    <h2 className="counter text-primary">
                                        <CountUp end={4} duration={5} />
                                    </h2>
                                    <h3 className="m-b0">बे सहारा बीमार  <br />गऊ हस्पताल</h3>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="row spno">
                    <div className="col-lg-12">
                        <div className="video-bx content-media style-2">
                            <img src={jagran} alt="" />
                            <div className="video-btn aos-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                                {/* <button onClick={() => { setOpen(true) }} className="popup-youtube"><i className="fas fa-play"></i></button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
        </>
    )
}

export default VideoCounter