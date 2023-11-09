import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div>
      <div className="container flex flex-col items-center my-20">
        <h5 className="text-md text-green-300 my-4">
          {" "}
          Payment received successfully
        </h5>
        <h2 className="italic my-2">Thank You</h2>
        <h2 className="my-3">Your Tour is Booked</h2>
        <button className="bg-[var(--secondary-color)] my-4 w-44 rounded-2xl h-10 p-1">
          <Link to="/home" className="no-underline text-base text-white">
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
