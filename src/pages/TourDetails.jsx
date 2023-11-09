import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import * as Io from "react-icons/io5";
import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../booking/Booking";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const tour = tourData.find((tour) => tour.id === id);
  const {
    address,
    maxGroupSize,
    title,
    city,
    photo,
    price,
    distance,
    reviews,
    desc,
  } = tour;
  const { avgRating, totalRating } = calculateAvgRating(reviews);

  const option = { day: "numeric", month: "long", year: "numeric" };
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    alert(`${reviewText} ${tourRating}`);
  };
  return (
    <div className="container grid grid-cols-3 mt-10">
      <div className="flex flex-col items-center justify-center col-span-2">
        <div className="flex justify-center items-center">
          <img src={photo} alt="" className="w-[70%] rounded-md shadow-lg " />
        </div>
        <div className="flex items-center justify-center mt-16 flex-col rounded-lg border w-[70%] shadow-md ">
          <h3 className="mt-4">{title}</h3>
          <div className="flex  m-2">
            <span className="flex mr-6 items-center">
              <Ai.AiFillStar className="text-[var(--secondary-color)]" />
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews?.length})</span>
              )}
            </span>
            <span className="flex ml-4">
              <Fa.FaAddressBook className="mt-2" />
              {address}
            </span>
          </div>
          <div className="flex justify-between p-2">
            <span className="mr-1  flex items-center">
              <Io.IoLocationOutline />
            </span>
            <span className="mr-4">{city}</span>
            <span>
              ${price} <span className="text-sm">/per person</span>
            </span>
            <span className="mx-3">
              {distance} <span className="text-sm ">k/m</span>
            </span>
            <span className="flex ml-4">
              <Md.MdGroups2 className="mt-1 mr-2" />
              {maxGroupSize} people
            </span>
          </div>
          <div className="mt-3 mb-6 flex flex-col items-center">
            <h5>Description</h5>
            <span className=" mt-2 ">{desc}</span>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-8 flex-col rounded-lg border w-[90%] shadow-md">
          <div className="ml-0 mt-4">Reviews({reviews?.length}reviews)</div>
          <form onSubmit={submitHandler} className="m-auto">
            <div className="flex ml-5 mt-4 text-[var(--secondary-color)]">
              <span className="mr-4 flex" onClick={() => setTourRating(1)}>
                1<Ai.AiFillStar className="mt-1" />
              </span>
              <span className="mr-4 flex" onClick={() => setTourRating(2)}>
                2<Ai.AiFillStar className="mt-1" />
              </span>
              <span className="mr-4 flex" onClick={() => setTourRating(3)}>
                3<Ai.AiFillStar className="mt-1" />
              </span>
              <span className="mr-4 flex" onClick={() => setTourRating(4)}>
                4<Ai.AiFillStar className="mt-1" />
              </span>
              <span className="mr-4 flex" onClick={() => setTourRating(5)}>
                5<Ai.AiFillStar className="mt-1" />
              </span>
            </div>
            <div className="flex border-2 border-orange-200 flex-row items-center justify-between w-[95%] p-1 shadow-sm rounded-3xl  my-4 h-[80px] mx-3">
              <span className="p-2 ">
                <input
                  type="text"
                  placeholder="share your thoughts"
                  ref={reviewMsgRef}
                  className=" bg-transparent w-[500px]"
                  required
                />
              </span>
              <button className="p-1 bg-[var(--secondary-color)] mr-2 rounded-lg">
                submit
              </button>
            </div>
          </form>
          <div className="w-[100%] p-3">
            {reviews?.map((item, index) => (
              <div className="flex justify-between mt-3">
                <div className="flex flex-col">
                  <p>
                    {new Date("07-11-2023").toLocaleDateString("en-US", option)}
                  </p>
                  <div className="flex">
                    <img
                      src={avatar}
                      alt=""
                      className="w-8 bg-transparent rounded-full h-8 mr-2 mt-1"
                    />
                    <div className="flex flex-col ">
                      <h5>{item.name}</h5>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                </div>
                <h5 className="flex">
                  <Ai.AiFillStar className="mt-1 text-[var(--secondary-color)]" />{" "}
                  {item.rating}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* booking section  */}

      <div className="col-span-1">
        <Booking tour={tour} avgRating={avgRating} />
      </div>
    </div>
  );
};

export default TourDetails;
