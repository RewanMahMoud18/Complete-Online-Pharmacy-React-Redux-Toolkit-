import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { singleProduct } from "../../Redux/ProductsSlice";
import "./ProductCard.css";
const ProductCard = ({ id, name, text, img, price }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Container className="d-flex justify-content-center mt-3">
      <Link to={`/filteredProducts/${type}/${id}`}>
        <Card
          style={{
            width: "15rem",
            border: "none",
            height: "300px",
          }}
          onClick={() => dispatch(singleProduct(id))}
        >
          <Card.Img variant="top" src={img} className="card-image" />
          <div className="productCard-desc">
            <h3>{name}</h3>

            <span>{price}$</span>
          </div>
        </Card>
      </Link>
    </Container>
  );
};

export default ProductCard;
