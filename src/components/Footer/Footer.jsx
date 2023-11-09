import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa6";

const Footer = () => {
  const quick_links1 = [
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
  const quick_links2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];

  const contact = [
    {
      icon: <Fa.FaLocationDot />,
      main: "Address:",
      content: "  Ponperumal ,TamilNadu",
    },
    {
      icon: <Fa.FaEnvelope />,
      main: "Email:",
      content: "  ponperumal1998@gmail.com",
    },
    {
      icon: <Fa.FaPhone />,
      main: "Mobile:",
      content: "  9626667943",
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-4 p-4 mt-14 ">
        <div className="flex flex-col  justify-center  col-span-1">
          <img src={logo} alt="" className="w-[30%]" />
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex">
            <span className="mr-3">
              <Link to="#">
                <Ai.AiFillGithub />
              </Link>
            </span>
            <span className="mr-3">
              <Link to="#">
                <Ai.AiFillLinkedin />
              </Link>
            </span>
            <span className="mr-3">
              <Link to="#">
                <Ai.AiFillInstagram />
              </Link>
            </span>
            <span className="mr-3">
              <Link to="#">
                <Ai.AiFillFacebook />
              </Link>
            </span>
          </div>
        </div>
        <div className="col-span-1 flex flex-col ml-4 justify-center">
          <h5>Discover</h5>
          {quick_links1.map((item, index) => (
            <div key={index} className="my-2">
              <Link to={item.path} className="no-underline">
                {item.display}
              </Link>
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col  justify-center">
          <h5>Discover</h5>
          {quick_links2.map((item, index) => (
            <div key={index} className="my-2">
              <Link to={item.path} className="no-underline">
                {item.display}
              </Link>
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col  justify-center">
          <h5>Contact</h5>
          {contact.map((item, index) => (
            <div key={index} className="flex my-2">
              <span className="mt-2 mr-3">{item.icon}</span>
              <span className="">{item.main}</span>
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center  items-center mt-10 p-4 ">
        <div className="border-t-2 border-orange-200 flex justify-center w-[50%]"></div>
        <div className="mt-2">
          Copyrights &copy; {new Date().getFullYear()} Creative IT Solutions{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
