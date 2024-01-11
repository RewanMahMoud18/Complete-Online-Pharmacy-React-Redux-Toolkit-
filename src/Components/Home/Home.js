import React from "react";
import Slider from "../Slider/Slider";
import { FaTruck } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar, faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import NavigateButtons from "../NavigateBtns/NavigateBtns";
import ProductSection from "../ProductSection/ProductSection";
import HomeBanner from "../../assets/images/ad-banner_16.jpg";
import doctor from "../../assets/images/d6.jpg";
import Testimonial from "../Testimonial/Testimonial";
import Blog from "../Blogs/Blog";
function Home() {
  return (
    <>
      <Slider />
      <div className="row">
        <div className="col-md-3 col-lg-3 home-div">
          <FaTruck className="home-icon" />
          <div className="home-desc">
            <h5>FREE & FAST SHIPPING</h5>
            <p>Orders All Over $100</p>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 home-div">
          <FontAwesomeIcon icon={faSackDollar} className="home-icon" />

          <div className="home-desc">
            <h5>MONEY BACK GUARANTEE</h5>
            <p>With a 30 Day Minimum</p>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 home-div">
          <FontAwesomeIcon icon={faShieldHeart} className="home-icon" />

          <div className="home-desc">
            <h5>ALL SECURE PAYMENT</h5>
            <p>Up to 12 months installments</p>
          </div>
        </div>
      </div>
      <NavigateButtons />
      <ProductSection />
      <div className="row">
        <div className="col-12 col-md-12">
          <img className="home-banner" src={HomeBanner} alt="home-banner"></img>
        </div>
      </div>
      <h3 className="home-header">About Us</h3>
      <div className="about-sec-bg">
        <div className="container">
          <div className="row ">
            <div className="col-6 col-md-6">
              <div className="about-sec-img">
                <img src={doctor} alt="Doctor"></img>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="about-sec-desc">
                <h4>Your Desire and Creat online pharmacy!</h4>
                <p>
                  Find the right care right when need Start <br />
                  choosing your reason for visitll help you find the right care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Blog />
      <Testimonial />
    </>
  );
}

export default Home;
