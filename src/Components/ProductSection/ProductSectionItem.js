import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import Container from "react-bootstrap/Container";
import "./ProductSection.css";

const ProductSectionItem = ({ id, img, name, text, price, totalPrice }) => {
  const dispatch = useDispatch();

  return (
    <Container className="d-flex justify-content-center mt-4 card-container">
      <Card style={{ width: "250px", padding: "10px", height: "400px" }}>
        <Card.Img variant="top" src={img} className="card-image-sec" />
        <div className="productCard-desc">
          <h5>{name}</h5>
          <p>{text}</p>
          <span>{price}$</span>
          <Button
            className="add-to-cart"
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  img: img,
                  text: text,
                  amount: 1,
                  price: price,
                  totalPrice: totalPrice,
                  name: name,
                })
              )
            }
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default ProductSectionItem;
