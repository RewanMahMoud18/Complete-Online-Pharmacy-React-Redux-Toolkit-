import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/images/pharmacist_on_phone_holding_medicine_1482189403.jpg";
import slide2 from "../../assets/images/43749203494_cdb63e16e7_b.png";
import slide3 from "../../assets/images/online-medicine.jpg";
import "./Slider.css";
function Slider() {
  return (
    <div className="slider">
      <Carousel className="container ">
        <Carousel.Item>
          <img
            className="d-block w-100 image-slider"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption className="slider-desc">
            <h5>You can ask us</h5>
            <p>We have the best group of doctors</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-slider"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption className="slider-desc">
            <h5>You can ask us</h5>
            <p>We have all kinds of medicines</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-slider"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption className="slider-desc">
            <h5>You can ask us</h5>
            <p>We deliver to all places</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
