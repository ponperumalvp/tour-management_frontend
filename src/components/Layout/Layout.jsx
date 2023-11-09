import React from "react";
import Header from "./../Header/Header";

import Footer from "../Footer/Footer";
import Router from "../../router/Router";
const Layout = () => {
  return (
    <div className="bg-gradient-to-tr from-orange-100 via-green-50 to-orange-50">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
