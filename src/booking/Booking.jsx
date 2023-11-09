import React, { useState } from "react";
import * as Ai from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "example@gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  const serviceFess = 10;
  const amount = Number(price) * Number(credentials.guestSize);
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFess);
  return (
    <>
      <div className="container border rounded-md shadow-lg sticky top-[80px]">
        <div className="flex items-center justify-between m-2 border-b-2">
          <span className="text-2xl">
            ${price} <span className=" my-3 text-sm">/per person</span>
          </span>
          <span className="flex mr-6 items-center my-6">
            <Ai.AiFillStar className="text-[var(--secondary-color)]" />
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
          </span>
        </div>
        <form className="mt-8" onSubmit={handleClick}>
          <h5 className="m-3">Information</h5>
          <div className="border rounded-lg p-1 m-3 my-8">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Full Name"
                id="fullName"
                onChange={handleChange}
                required
                className=" bg-transparent p-1 border-b-2 m-3"
              />
              <input
                type="number"
                placeholder="Number"
                required
                id="phone"
                onChange={handleChange}
                className=" bg-transparent p-1 border-b-2 m-3"
              />
            </div>
            <div className="flex justify-between m-3 p-1 border-b-2">
              <input
                type="date"
                id="bookAt"
                onChange={handleChange}
                required
                className="bg-transparent"
              />
              <input
                type="number"
                placeholder="Guest"
                id="guestSize"
                onChange={handleChange}
                required
                className="bg-transparent focus:border-none"
              />
            </div>
          </div>
        </form>

        {/* booking section end */}

        {/* booking bottom */}
        <div className="m-4 ">
          <div className="flex justify-between mt-4">
            <h5 className="flex  text-base">
              ${price}
              <Ai.AiOutlineClose className="w-4 mt-1 mx-1" />
              {credentials.guestSize}
            </h5>
            <span>${amount}</span>
          </div>
          <div className="flex justify-between mt-2">
            <h5 className="flex  text-base">Service Charge</h5>
            <span>${serviceFess}</span>
          </div>
          <div className="flex justify-between mt-2">
            <h5 className="flex  text-base ">Total</h5>
            <span>${totalAmount}</span>
          </div>
          <div className="h-[30px] flex items-center justify-center text-white bg-[var(--secondary-color)] rounded-2xl text-center mt-4">
            <button onClick={handleClick}>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
