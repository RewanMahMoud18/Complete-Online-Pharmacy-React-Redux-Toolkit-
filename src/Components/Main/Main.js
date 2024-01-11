import React, { Fragment } from "react";
import Navbars from "../Navbar/Navbars";
import { Outlet } from "react-router-dom";
import TopButton from "../TopBtn/TopBtn";
import Footer from "../Footer/Footer";
function Main() {
  return (
    <Fragment>
      <Navbars />
      <main>
        <Outlet />
      </main>
      <TopButton />
      <Footer />
    </Fragment>
  );
}

export default Main;
