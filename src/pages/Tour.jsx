import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import TourCard from "../shared/TourCard";
import tourData from "../assets/data/tours";
import "../styled/Tour.css";
const Tour = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  return (
    <div>
      <CommonSection title={"All Tour"} />
      <div className="container">
        <div className="container mt-20">
          <SearchBar />
        </div>
        <div className="container  mt-20">
          <div className="grid grid-cols-4">
            {tourData?.map((tour) => (
              <div key={tour.id}>
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
          <div className="pagination flex items-center justify-center">
            {[...Array(pageCount).keys()].map((number) => (
              <span
                key={number}
                onClick={() => setPage(number)}
                className={page === number ? " active_page" : ""}
              >
                {number + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Tour;
