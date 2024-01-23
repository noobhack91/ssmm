import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { IMAGES } from '../constants/theme'
import { motion } from 'framer-motion'


const accordian = [
    { id: 1, key: 0, title: " Sed vehicula ullamcorper odio ac pellentesque ?", data: "Quisque ac quam nibh. Nullam nunc tortor, malesuada sed est eu, ultricies egestas risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque pulvinar enim urna" },
    { id: 2, key: 1, title: " Sed vehicula ullamcorper odio ac pellentesque ?", data: "Quisque ac quam nibh. Nullam nunc tortor, malesuada sed est eu, ultricies egestas risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque pulvinar enim urna" },
    { id: 3, key: 2, title: " Sed vehicula ullamcorper odio ac pellentesque ?", data: "Quisque ac quam nibh. Nullam nunc tortor, malesuada sed est eu, ultricies egestas risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque pulvinar enim urna" }
]


const Faq = () => {
    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <motion.div className="col-lg-6 m-b30 aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300"
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{ duration: 1 }}
                    >
                        <div className="twentytwenty-img-area">
                            <div className="twentytwenty-container">
                                <img src={IMAGES.pic2_2} alt="" />
                            </div>
                        </div>
                    </motion.div>
                    <div className="col-lg-6 aos-item" data-aos="fade-left" data-aos-duration="800" data-aos-delay="600">
                        <div className="section-head style-1">
                            <h6 className="sub-title text-primary">FAQ</h6>
                            <h2 className="title">Get Every Answer From Here</h2>
                        </div>
                        <Accordion defaultActiveKey="0" className="dz-accordion accordion-sm">
                            {
                                accordian.map((i, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: "100%" }}
                                        whileInView={{ opacity: 1, x: "0%" }}
                                        transition={{ duration: 1 }}
                                    >
                                        <Accordion.Item eventKey={`${i.key}`}>
                                            <Accordion.Header className="accordion-header" id="headingOne">
                                                Sed vehicula ullamcorper odio ac pellentesque ?
                                                <span className="toggle-close"></span>
                                            </Accordion.Header>
                                            <div id="collapseOne" className="accordion-collapse collapse show" >
                                                <Accordion.Body>
                                                    <p className="m-b0">{i.data}</p>
                                                </Accordion.Body>

                                            </div>
                                        </Accordion.Item>
                                    </motion.div>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq