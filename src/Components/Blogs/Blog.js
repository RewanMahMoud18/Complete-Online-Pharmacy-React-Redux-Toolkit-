import React from "react";
import "./Blog.css";
import Card from "react-bootstrap/Card";
import Blog1 from "../../assets/images/img_2-571x370.jpg";
import Blog2 from "../../assets/images/img_3-571x370.jpg";
import Blog3 from "../../assets/images/img_4-571x370.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="container news-container mb-4">
      <div className="row">
        <div className="news-desc">
          <h2>Our Latest Blogs</h2>
        </div>
        <div className="col-md-4 col-lg-4 news-mg">
          <Card>
            <Card.Img variant="top" src={Blog1} alt="Card Image" />
            <Card.Body>
              <h5 className="mb-3 news-content">
                John Doe
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-orange mr-2"
                />
                21 July 2023
              </h5>

              <p className="Blogdesc">
                Mirage Deep Dive Under anding Timin Response
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-lg-4 news-mg">
          <Card>
            <Card.Img variant="top" src={Blog2} alt="Card Image" />
            <Card.Body>
              <h5 className="mb-3 news-content">
                John Doe
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-orange mr-2"
                />
                21 July 2023
              </h5>

              <p className="Blogdesc">
                Mirage Deep Dive Under anding Timin Response
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-lg-4 news-mg">
          <Card>
            <Card.Img variant="top" src={Blog3} alt="Card Image" />
            <Card.Body>
              <h5 className="mb-3 news-content">
                John Doe
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-orange mr-2"
                />
                21 July 2023
              </h5>

              <p className="Blogdesc">
                Mirage Deep Dive Under anding Timin Response
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Blog;
