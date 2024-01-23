import React from "react";
import Accordion from "react-bootstrap/Accordion";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// import img
import gau from "../assets/images/about/gau.jpg";
import pic2 from "../assets/images/about/pic2.jpg";
import pic3 from "../assets/images/about/pic3.jpg";
import bbbp from "../assets/images/about/bbbp.jpg";
import jgm from "../assets/images/jgm.jpg";
import water from "../assets/images/water.avif";


const accordian = [
  {
    image: bbbp, // Corrected import
    key: 0,
    heading: "बेटी बचाओ बेटी पढ़ाओ ",
    text: "बेटी बचाओ बेटी पढ़ाओ अभियन के अंतर्गत हर साल मोड़ मंडी की पढ़ाई मे होनहार बेटिओं का हजारों लोगो की तालिओं के बिच सन्मानत किया जाता है पिछले 22 सालो के दान सहयोग और श्री सालासर बाला जी संकीर्तन मंडल के ऊपर आप के विश्वाश को देखते हुए",
  },
  {
    image: jgm,
    key: 1,
    heading: "बे सहारा बीमार गऊ हस्पताल",
    text: "अब बे सहारा बीमार गऊ माता के इलाज के लिए एक स्पेसलिटी हस्पताल बंगाली कुटिया रोड भगवान परशुराम मंदिर के साथ बनाया जा रहा हैइस हॉस्पिटल मे एक मेडिसन रूम एक ICU यहां ज्यादा बीमार जख्मी 10 से 12 gau रखने की सुभीधा होंगी  ओप्रशन थैटर की सुभीधा होगी इस हॉस्पिटल मे बीमार गऊ माता का इलाज कर मोड़ मंडी की गौशाला मे रख कर देख भाल की जायगी",
  },
  {
    image: water,
    key: 2,
    heading: " ठंडे RO पानी",
    text:"श्री सालासर बाला जी संकीर्तन मंडल पिछले 22 सालों से बाला जी महाराज का भव्य बिशाल जागरण व सामूहिक बिशाल श्री हनुमान चालीसा प्रभात फेरी के माध्यम से सनातन धर्म का प्रचार कर रहा हैसमाज सेवा मे मोड़ मंडी के हर चौरास्ते पर हर साल ठंडे ro पानी कि विवस्था भी आप के दान से कर रहा है"
},
];

const Working = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="dz-media">
            <div className="img1 aos-item">
              <img src={gau} alt="" />
            </div>

            <div className="img2 aos-item" data-aos="fade-up">
              <img src={gau} alt="" />
            </div>
            <div className="img3 aos-item">
              <img src={gau} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="year-exp">
            <motion.h2
              className="year aos-item counter"
              data-aos="fade-up"
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CountUp end={23} duration={8} />
            </motion.h2>
            <motion.h4
              className="text aos-item"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              वर्षों की भक्ति और साझा आशीर्वाद{" "}
            </motion.h4>
          </div>
          <motion.p
            className="m-b30 aos-item"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            श्री सालासर बाला जी संकीर्तन मंडल पिछले 22 सालों से बाला जी महाराज
            का भव्य बिशाल जागरण व सामूहिक बिशाल श्री हनुमान चालीसा प्रभात फेरी
            के माध्यम से सनातन धर्म का प्रचार कर रहा है समाज सेवा मे मोड़ मंडी के
            हर चौरास्ते पर हर साल ठंडे RO पानी कि विवस्था भी आप के दान से कर रहा
            है
          </motion.p>
          <div className="accordion dz-accordion about-faq" id="aboutFaq">
            <Accordion defaultActiveKey="0">
              {accordian.map((i, ind) => (
                <Accordion.Item eventKey={`${i.key}`} key={ind}>
                  <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    whileInView={{ opacity: 1, x: "0%" }}
                    transition={{ duration: 1 }}
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="flush-headingOne"
                    >
                      <img
                        src={i.image}
                        alt="Image Alt Text"
                        style={{ height: "60px", width: "60px", marginRight:"10px" }}
                      />
                      {i.heading}
                      <span className="toggle-close"></span>
                    </Accordion.Header>
                    <Accordion.Body>{i.text}</Accordion.Body>
                  </motion.div>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
