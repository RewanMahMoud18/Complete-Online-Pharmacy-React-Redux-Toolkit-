// SearchResultPage.js
import React from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import { selectSearchTerm } from "../../Redux/SearchSlice";

const SearchResultPage = ({ products }) => {
  const searchTerm = useSelector(selectSearchTerm);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="container my-4">Search Results for "{searchTerm}"</h1>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default SearchResultPage;
