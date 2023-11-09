import React from "react";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <div className="mt-10 bg-[#cae5f4]">
      <div className="flex flex-row container ">
        <div className="flex flex-col mt-10">
          <h2>Subscribe Now to get useful Traveling Information</h2>
          <div className="bg-white h-14 flex rounded-[10px] mt-6 justify-between ">
            <input
              type="text"
              placeholder="Enter your Email"
              className="p-2 rounded-lg"
            />
            <button className="w-[max-content] m-2 bg-[var(--secondary-color)] p-2 rounded-lg">
              Subscribe
            </button>
          </div>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            necessitatibus. Magni exercitationem, corporis eveniet repellendus
            porro{" "}
          </p>
        </div>
        <div className="mt-0">
          <img src={maleTourist} alt="" className="w-[100%] mb-0" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
