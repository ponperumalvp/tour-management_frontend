import React from "react";
import * as Io from "react-icons/io5";
import * as Ai from "react-icons/ai";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour;
  const { avgRating, totalRating } = calculateAvgRating(reviews);
  return (
    <div className="m-2 mb-4 container">
      <div className="border-white shadow-lg rounded-lg ">
        <div className="">
          <div className="relative">
            <img src={photo} alt="" className="rounded-lg w-[100%]   " />
            {featured && (
              <span className="absolute bottom-0 right-0 h-[max-content] w-[max-content] z bg-[var(--primary-color)] rounded-md p-1 text-[#fff]">
                Featured
              </span>
            )}
          </div>
          <div></div>
        </div>
        <div>
          <div>
            <div className="flex justify-between p-2">
              <span className="flex items-center">
                <div className=" mr-2 text-[var(--secondary-color)]">
                  <Io.IoLocationOutline />
                </div>
                <div className="font-semibold">{city}</div>
              </span>
              <span className="flex items-center">
                <Ai.AiFillStar className="text-[var(--secondary-color)]" />
                {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? (
                  "Not rated"
                ) : (
                  <span>({reviews.length})</span>
                )}
              </span>
            </div>
            <h5 className="mt-3 p-2 ">
              <Link
                to={`/tour/${id}`}
                className="no-underline hover:text-[var(--secondary-color)]"
              >
                {title}
              </Link>
            </h5>
            <div className=" mt-3 flex items-center justify-between p-2">
              <h5>
                ${price} <span className="text-sm">/per person</span>
              </h5>
              <button className="w-[max-content] h-[max-content] bg-[var(--secondary-color)]  rounded-md p-1">
                <Link to={`/tour/:${id}`} className=" text-white no-underline">
                  Book Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
