import React from "react";
import PropTypes from "prop-types";
import "./Banner.css";

const Banner = ({ text }) => {
  return (
    <div className="banner">
      <h1 className="Banner-txt">{text}</h1>
      <h5 className="banner-text2">Home > {text}</h5>
    </div>
  );
};

Banner.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Banner;
