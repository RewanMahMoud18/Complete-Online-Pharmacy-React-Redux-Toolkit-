import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import testimg from "../../assets/images/test-img_1.png";
import "./Testimonial.css";
import client1 from "../../assets/images/client2.jpeg";
import client2 from "../../assets/images/client3.jpeg";
import client3 from "../../assets/images/client4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Testimonial() {
  const numberOfStars = 5;

  return (
    <>
      <h2 className="text-center text-test">Trusted Client’s Review</h2>
      <Row className="text-center margin-row">
        <img src={testimg} alt="Testimonial" className="test-img" />
        <Col md={3} className="test-client">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={client1}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt="Avatar"
            />
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <p className="px-xl-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <div>
            {[...Array(numberOfStars)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                style={{ color: "gold", fontSize: "24px", marginRight: "5px" }}
              />
            ))}
          </div>
        </Col>
        <Col md={3} className="test-client">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={client3}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt="Avatar"
            />
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <p className="px-xl-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <div>
            {[...Array(numberOfStars)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                style={{ color: "gold", fontSize: "24px", marginRight: "5px" }}
              />
            ))}
          </div>
        </Col>
        <Col md={3} className="test-client">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={client2}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt="Avatar"
            />
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <p className="px-xl-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <div>
            {[...Array(numberOfStars)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                style={{ color: "gold", fontSize: "24px", marginRight: "5px" }}
              />
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
}
