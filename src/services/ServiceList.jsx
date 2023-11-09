import React from "react";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sed ",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sed ",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sed ",
  },
];

const ServiceList = () => {
  return (
    <div className="flex items-center justify-center )]">
      {serviceData.map((item, index) => (
        <div key={index}>
          <ServiceCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
