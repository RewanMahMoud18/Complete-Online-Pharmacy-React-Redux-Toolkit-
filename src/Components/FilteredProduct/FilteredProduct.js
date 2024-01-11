import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
const FilteredProduct = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const { type } = useParams();

  return (
    <div className="pt-16">
      <div className="pl-14">
        <Container className="text-center">
          <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none mt-4">
            {type}
          </h1>
        </Container>
      </div>
      <div className="d-flex flex-wrap justify-content-start py-8">
        {products
          .filter((product) => product.type === type)
          .map((product, index) => (
            <Card key={index} className="m-2 mx-4">
              <ProductCard
                id={product.id}
                name={product.name}
                text={product.text}
                img={product.img}
                price={product.price}
              />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default FilteredProduct;
