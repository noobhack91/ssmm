import React from 'react'
import CommanBanner from '../elements/CommanBanner'
import { IMAGES } from '../constants/theme'
import ReCAPTCHA from 'react-google-recaptcha'


const cards = [
  { id: '01', icon: "flaticon-telephone", title: "Call Now", detail: "+919988227050,", detail2: "+919976000142" },
  { id: '02', icon: "flaticon-email", title: "Email Now", detail: "   info@impresabuildtech.com" },
  { id: '03', icon: "flaticon-placeholder", title: "Location", detail: " Impresa Buildtech , SCO 1031, First and Second Floor,Near Arista Hotel,Airport Road,Mohali" },
]

const ContectUs = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <div className="page-content bg-white">
        <CommanBanner mainTitle="Contact Us" parentTitle="Home" pageName="Contact Us" bgImage={IMAGES.bnr2} />
        <section className="content-inner">
          <div className="container">
            <div className="row">

              {
                cards.map((i) => (
                  <div key={i.id} className="col-lg-4 col-md-12 m-b30 aos-item">
                    <div className="icon-bx-wraper style-8 bg-white" data-name={i.id}>
                      <div className="icon-md m-r20">
                        <span className="icon-cell text-primary"><i className={i.icon}></i></span>
                      </div>
                      <div className="icon-content">
                        <h4 className="tilte m-b10">{i.title}</h4>
                        <p className="m-b0">{i.detail}<br />{i.detail2}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        <section className="content-inner-1 pt-0">
          <div className="map-iframe">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d27436.905865008!2d76.66751899368808!3d30.729271723466628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d30.722706199999998!2d76.6990166!4m5!1s0x390fef5e5d8bf55f%3A0x2e09ffc1f4e2ff22!2simpresa%20buildtech!3m2!1d30.742540599999998!2d76.67454239999999!5e0!3m2!1sen!2sin!4v1691423899400!5m2!1sen!2sin" className="align-self-stretch radius-sm" style={{ border: 0, width: '100%', minHeight: '100%' }} allowFullScreen></iframe>
          </div>
          <div className="container">
            <div className="contact-area aos-item">
              <div className="section-head style-1 text-center">
                <h6 className="sub-title text-primary">Contact Us</h6>
                <h2 className="title">Get In Touch With Us</h2>
              </div>
              <form className="dz-form dzForm contact-bx" >
                <div className="dzFormMsg"></div>
                <div className="row sp10">
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input type="text" className="form-control" required name="dzFirstName" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input type="text" className="form-control" required name="dzLastName" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input type="text" className="form-control" required name="dzEmail" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input type="text" className="form-control" required name="dzPhoneNumber" placeholder="Phone No." />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <input type="text" className="form-control" required name="dzOther" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <textarea name="dzMessage" rows="5" className="form-control" placeholder="Message"></textarea>
                    </div>
                  </div>
                
                  <div className="col-sm-12 text-center">
                    <button name="submit" className="btn btn-primary btn-rounded">SUBMIT <i className="m-l10 fas fa-caret-right"></i></button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContectUs