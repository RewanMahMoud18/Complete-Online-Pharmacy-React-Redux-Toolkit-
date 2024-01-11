import React, { Fragment } from "react";
import {
  BrowserRouter as Router, // Change here
  Routes,
  Route,
} from "react-router-dom";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import FilteredProduct from "./Components/FilteredProduct/FilteredProduct";
import SingleProduct from "./Components/FilteredProduct/SingleProduct";
import Aboutus from "./Components/Aboutus/Aboutus";
import SearchResultPage from "./Components/Search/SearchResult";
import BlogDetails from "./Components/Blogs/BlogDetails";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbars";
import { useSelector } from "react-redux";
import { storeData } from "./assets/data/dummyData";
import Contact from "./Components/Contact/Contact";

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const { authUser } = user;

  return (
    <Router>
      {" "}
      {/* Use BrowserRouter here */}
      <Fragment>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route
              path="/filteredProducts/:type"
              element={<FilteredProduct />}
            />
            <Route
              path="/filteredProducts/:type/:id"
              element={<SingleProduct />}
            />
            <Route
              path="/search-results"
              element={<SearchResultPage products={storeData} />}
            />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/blog" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
