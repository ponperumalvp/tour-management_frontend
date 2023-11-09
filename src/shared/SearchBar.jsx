import React, { useRef } from "react";
import * as Io from "react-icons/io5";
import * as Fa from "react-icons/fa6";
import * as Bi from "react-icons/bi";
import * as Bs from "react-icons/bs";

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All fields are Required");
    }
  };
  return (
    <div className="container">
      <form className="flex container items-center justify-around shadow-lg mt-5 w-[100%] h-[80px] rounded-2xl">
        <div className="flex items-center border-r-2 justify-center">
          <Io.IoLocationOutline className="text-[1.8rem] text-[var(--secondary-color)] flex items-center justify-center mr-2" />
          <div className="mr-2">
            <label htmlFor="location" className="flex items-center">
              Location
            </label>
            <input
              type="text"
              placeholder="where are you going "
              ref={locationRef}
              className="bg-transparent"
            />
          </div>
        </div>
        <div className="flex items-center border-r-2 justify-center">
          <span>
            <Bi.BiMapPin className="text-[1.8rem] text-[var(--secondary-color)] flex items-center justify-center mr-2" />
          </span>
          <div className="mr-2">
            <label htmlFor="distance" className="flex items-center">
              {" "}
              Distance
            </label>
            <input
              type="number"
              placeholder="Distance k/m"
              ref={distanceRef}
              className="bg-transparent"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span>
            <Fa.FaUserGroup className="text-[1.8rem] text-[var(--secondary-color)] flex items-center justify-center mr-4" />
          </span>
          <div className="ml">
            {" "}
            <label htmlFor="Max People" className="flex items-center ">
              {" "}
              Max People
            </label>
            <input
              type="number"
              placeholder="0"
              ref={maxGroupSizeRef}
              className="bg-transparent"
            />
          </div>
        </div>
        <span onClick={searchHandler}>
          <Bs.BsSearch className="text-[1.8rem] p-2 text-center bg-[var(--secondary-color)]  text-white rounded-lg mr-2" />
        </span>
      </form>
    </div>
  );
};

export default SearchBar;
