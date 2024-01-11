import React from "react";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../Redux/SearchSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

const ProductList = ({ products }) => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-3 col-md-3 mb-3">
            <div className="card">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text-desc">{product.text}</p>
                <p className="card-title">Type: ${product.type}</p>

                <p className="card-text-price">Price: ${product.price}</p>
                <button
                  className="card-btnn"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product.id,
                        name: product.name,
                        img: product.img,
                        text: product.text,
                        price: product.price,
                        amount: 1,
                        totalPrice: product.price,
                      })
                    )
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
