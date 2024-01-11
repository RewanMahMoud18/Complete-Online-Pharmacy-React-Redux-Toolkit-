import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, selectSearchTerm } from "../../Redux/SearchSlice";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import { logout } from "../../Redux/authSlice";

function Navbars() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Search
  const searchTerm = useSelector(selectSearchTerm);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSearch = () => {
    navigate("/search-results");
  };

  return (
    <Navbar expand="lg">
      <div className="container">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" title="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>

            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </Nav>
          <div className="search-form">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleInputChange}
            ></input>
            <button onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div onClick={handleOpen} className="cart-icon">
            <FontAwesomeIcon className="bag-icon" icon={faShoppingBag} />
            {totalAmount > 0 && (
              <span className="bag-nofication">{totalAmount}</span>
            )}
          </div>

          {open && <Cart openModal={open} setOpen={handleClose} />}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navbars;
