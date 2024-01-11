import React from "react";
import Banner from "../Banner/Banner";
import phoneImg from "../../assets/images/bookImg.png";
import woman from "../../assets/images/woman.png";
import "./Contact.css";
function Contact() {
  return (
    <>
      <Banner text="Contact Us" />
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-6 col-sm-12 my-4">
            <div className="contact-desc">
              <h2>Have You any Suggestion or Queries?</h2>
            </div>
            <form>
              <input type="text" placeholder="Name"></input>
              <input type="email" placeholder="Email"></input>
              <input type="phone" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <button>Submit</button>
            </form>
          </div>
          <div className="col-6 col-md-6 col-sm-12 my-4">
            <div className="contact-img">
              <div className="image-wrapper">
                <img src={phoneImg} alt="phone" className="bottom-image" />
                <img src={woman} alt="woman" className="top-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
