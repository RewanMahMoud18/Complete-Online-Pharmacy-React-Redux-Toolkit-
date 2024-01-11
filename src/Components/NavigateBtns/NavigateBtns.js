import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterProducts } from "../../Redux/ProductsSlice";

const NavigateButtons = () => {
  const buttons = ["Medicine", "Accessories", "Equipments"];

  const dispatch = useDispatch();

  return (
    <div className="text-center py-8 mt-5">
      {buttons.map((button, index) => (
        <span key={index} className="ms-3">
          <Link
            to={"/filteredProducts/" + button}
            className="text-decoration-none"
          >
            <Button
              variant="outline-secondary"
              size="lg"
              className="text-black hover-bg-gray-300 duration-300 ease-in-out"
              onClick={() => dispatch(filterProducts(button))}
            >
              {button}
            </Button>
          </Link>
        </span>
      ))}
    </div>
  );
};

export default NavigateButtons;
