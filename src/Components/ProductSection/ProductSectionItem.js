import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import "./ProductSection.css";
import { useParams, Link } from "react-router-dom";

const ProductSectionItem = ({ id, img, name, text, price, totalPrice }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
      <Card className="card-section">
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{price}$</span>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductSectionItem;
