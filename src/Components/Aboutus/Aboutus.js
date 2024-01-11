import React from "react";
import Banner from "../Banner/Banner";
import aboutimg from "../../assets/images/about-img_1.jpg";
import icon1 from "../../assets/images/icon_1.png";
import icon2 from "../../assets/images/icon_2.png";
import icon3 from "../../assets/images/icon_3.png";
import icon4 from "../../assets/images/icon_4.png";

import "./Aboutus.css";
import Testimonial from "../Testimonial/Testimonial";
import { Link } from "react-router-dom";
function Aboutus() {
  return (
    <>
      <Banner text="About Us" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 col-md-6 col-sm-12 ">
            <div className="about-image">
              <img src={aboutimg} alt="About us img" />
            </div>
          </div>
          <div className="col-6 col-md-6 col-sm-12">
            <div className="about-desc">
              <h6>What We Are Doing For Our Business</h6>
              <h2>
                Medshop Create Unique High-quality Product From The Finest
                Development Since 2001.
              </h2>
            </div>
            <div className="about-sec1">
              <div className="about-sec-icons mt-2">
                <img src={icon1} alt="icon" />
                <div className="text-content">
                  <p>Professionals</p>
                  <h4>Doctors</h4>
                </div>
              </div>
              <div className="about-sec-icons mt-2">
                <img src={icon2} alt="icon" />
                <div className="text-content">
                  <p>Using Modern</p>
                  <h4>Equipments</h4>
                </div>
              </div>
            </div>
            <p className="about-txt">
              Mestibulum libero nisl, porta vel, scelerisque eget, malesuada at
              neque. wivamus eget nibhm cursleo vel metus. Nulla facilisi.
              Aenean nec eros. Vestibulum ante ipsum prieymis in
              faucibusestibuluro nisl, porta scelerisque eget, malesuada
            </p>
            <Link to="/contact">
              <button className="about-btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-sm-12">
            <div className="about-sec2">
              <h6>How We Over Come</h6>
              <h2>Medishop Company History</h2>
              <p>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centu ries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6 col-sm-12">
            <div className="whole-card">
              <img src={icon3} alt="icon3" />
              <div className="about-cards">
                <h3>Online pharmacy</h3>
                <p>
                  Suspendisse potenti. Vestibulum facilisis purus nec pulvinar
                  aculi ligulam congue unea vitae euiod ligula urna in dolor
                  pretium.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-sm-12">
            <div className="whole-card">
              <img src={icon4} alt="icon3" />
              <div className="about-cards">
                <h3>Online pharmacy</h3>
                <p>
                  Suspendisse potenti. Vestibulum facilisis purus nec pulvinar
                  aculi ligulam congue unea vitae euiod ligula urna in dolor
                  pretium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </>
  );
}

export default Aboutus;
