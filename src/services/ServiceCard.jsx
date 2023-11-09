import React from "react";

const ServiceCard = ({ item }) => {
  const { imgUrl, title, desc } = item;
  return (
    <div className="container  ml-3   ">
      <div className="bg-[var(--secondary-color)] h-[50px] w-[50px] rounded-[50px] p-[.6rem]">
        <img src={imgUrl} alt="" className="w-[100%] " />
      </div>
      <div className="p-4 border-b border-r border-[var(--secondary-color)] rounded-[.5rem]">
        <h5>{title}</h5>
        <p className="text-[14px]">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
