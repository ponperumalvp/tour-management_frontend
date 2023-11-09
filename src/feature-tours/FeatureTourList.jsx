import React from "react";
import TourCard from "../shared/TourCard";
import tourData from "../assets/data/tours";

const FeatureTourList = () => {
  return (
    <div className="grid grid-cols-4">
      {tourData.map((tour, index) => (
        <div key={index} className="">
          <TourCard tour={tour} />
        </div>
      ))}
    </div>
  );
};

export default FeatureTourList;
