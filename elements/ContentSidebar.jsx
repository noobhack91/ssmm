import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/theme";
import logo2 from "./../assets/images/logo-2.png";

const Sidebar = [
  { image: IMAGES.service1 },
  { image: IMAGES.service2 },
  { image: IMAGES.service3 },
  { image: IMAGES.service4 },
  { image: IMAGES.service5 },
  { image: IMAGES.service6 },
];
const ContentSidebar = ({ openSide }) => {
  return (
    <>
      <div className={`contact-sidebar ${openSide ? "active" : ""}`}>
        <div className="contact-box">
          <div className="logo-contact logo-dark">
            <img style={{ height: "80px", width: "80px" }} src={logo2} alt="" />
            <Link to={"/"}></Link>
          </div>
          <div className="m-b50 contact-text">
            <div className="dz-title">
              <h4>About US</h4>
              <div className="dz-separator style-1 text-primary mb-0"></div>
            </div>
            <p>
              श्री सालासर बाला जी संकीर्तन मंडल पिछले 22 सालों से बाला जी महाराज
              का भव्य बिशाल जागरण व सामूहिक बिशाल श्री हनुमान चालीसा प्रभात फेरी
              के माध्यम से सनातन धर्म का प्रचार कर रहा है समाज सेवा मे मोड़ मंडी
              के हर चौरास्ते पर हर साल ठंडे ro पानी कि विवस्था भी आप के दान से
              कर रहा है
            </p>
            {/* <Link
              to={"/about-us"}
              className="btn btn-primary btn-sm btn-rounded"
            >
              READ MORE
            </Link> */}
          </div>
          {/* <div className="dz-title">
            <h4>Gallery</h4>
            <div className="dz-separator style-1 text-primary mb-0"></div>
          </div> */}
          {/* <div className="widget bg-white widget_gallery">
            <ul id="lightgallery" className="lightgallery m-b0">
              {Sidebar.map((item, ind) => (
                <li key={ind}>
                  <div className="dlab-post-thum dlab-img-effect">
                    <span className="lightimg">
                      <img src={item.image} alt="" />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ContentSidebar;
