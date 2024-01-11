import React from "react";
import Banner from "../Banner/Banner";
import post1 from "../../assets/images/blog1.jpg";
import post2 from "../../assets/images/blog2.jpg";
import post3 from "../../assets/images/blog3 (1).jpg";
import post4 from "../../assets/images/blog4.jpg";
// import YouTube from "react-youtube";
import "./BlogDetails.css";
const BlogDetails = () => {
  // const videoLink = "https://youtu.be/JSywhklJrWo";
  return (
    <>
      <Banner text="Blog" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-sm-12 my-4">
            <div className="blog-details-img">
              <img src={post1} alt="post1" />
            </div>
            <div className="blog-details-desc">
              <h2>Mirage Deep Dive Under anding Timin Response</h2>
              <p>
                Nrem ipsum dolor sit amet, sed when an unknown printer took a
                galley of type and scrambled it to make a type specimen
                bookItsurvived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. nullnte
                amelementum tincidunt arcNrem ipsum dolor typesetting remaining
                essentially unsit amet.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-sm-12 my-4">
            <div className="blog-details-img">
              <img src={post2} alt="post1" />
            </div>
            <div className="blog-details-desc">
              <h2>Mirage Deep Dive Under anding Timin Response</h2>
              <p>
                Nrem ipsum dolor sit amet, sed when an unknown printer took a
                galley of type and scrambled it to make a type specimen
                bookItsurvived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. nullnte
                amelementum tincidunt arcNrem ipsum dolor typesetting remaining
                essentially unsit amet.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-sm-12 my-4">
            <div className="blog-details-img">
              <img src={post3} alt="post1" />
            </div>
            <div className="blog-details-desc">
              <h2>Mirage Deep Dive Under anding Timin Response</h2>
              <p>
                Nrem ipsum dolor sit amet, sed when an unknown printer took a
                galley of type and scrambled it to make a type specimen
                bookItsurvived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. nullnte
                amelementum tincidunt arcNrem ipsum dolor typesetting remaining
                essentially unsit amet.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-sm-12 my-4">
            <div className="blog-details-img">
              <img src={post4} alt="post1" />
            </div>
            <div className="blog-details-desc">
              <h2>Mirage Deep Dive Under anding Timin Response</h2>
              <p>
                Nrem ipsum dolor sit amet, sed when an unknown printer took a
                galley of type and scrambled it to make a type specimen
                bookItsurvived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. nullnte
                amelementum tincidunt arcNrem ipsum dolor typesetting remaining
                essentially unsit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
