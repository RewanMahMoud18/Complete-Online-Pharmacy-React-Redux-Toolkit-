import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row, Image, Button } from "react-bootstrap";
import { addToCart } from "../../Redux/CartSlice";
import "./SingleProduct.css";
const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const { id } = useParams();
  const dispatch = useDispatch();

  const item = product.find((product) => product.id === id);

  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Row className="justify-content-center align-items-center py-5">
        <Col xs={12} md={6} className="text-center">
          <Image
            src={item.img}
            alt={item.name}
            rounded
            className="h-[350px] w-100"
          />
        </Col>
        <Col xs={12} md={6} className="max-w-lg">
          <h3 className="text-2xl font-weight-bold pb-4">{item.name}</h3>

          <p className="singleProductDesc">{item.text}</p>

          <Button
            variant="outline-secondary"
            size="lg"
            className="singlepage-btn"
            onClick={() =>
              dispatch(
                addToCart({
                  id: item.id,
                  name: item.name,
                  img: item.img,
                  text: item.text,
                  price: item.price,
                  amount: 1,
                  totalPrice: item.price,
                })
              )
            }
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SingleProduct;
