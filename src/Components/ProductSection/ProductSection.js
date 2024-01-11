import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { storeData } from "../../assets/data/dummyData.jsx";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <Container>
      <Row>
        {storeData.slice(0, 8).map((pro, index) => (
          <Col key={index} md={3}>
            <div>
              <ProductSectionItem
                id={pro.id}
                name={pro.name}
                img={pro.img}
                text={pro.text}
                price={pro.price}
                totalPrice={pro.totalPrice}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductSection;
