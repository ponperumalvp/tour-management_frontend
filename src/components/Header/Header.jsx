import React from "react";
import * as Rx from "react-icons/rx";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tour",
    display: "Tour",
  },
];
const Header = () => {
  return (
    <header className="container w-[100%] h-[80px] border-b-2 flex flex-row items-center justify-between sticky top-[0] ">
      <div className="">
        <img src={logo} alt="" className="w-[30%] " />
      </div>
      <div className="text-[1.1rem] flex items-center list-none  ">
        {nav_links.map((item, index) => {
          return (
            <li className="p-3">
              <Link
                className=" no-underline active:text-orange-300"
                to={item.path}
              >
                {item.display}
              </Link>
            </li>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <Link to="/login" className="no-underline p-3">
          Login
        </Link>
        <Link
          to="/register"
          className="no-underline bg-[var(--secondary-color)] p-2 text-white rounded-3xl 
          w-[max-content] h-[max-content] text-center"
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
