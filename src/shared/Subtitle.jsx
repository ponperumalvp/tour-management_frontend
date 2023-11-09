import React from "react";

const Subtitle = ({ subtitle }) => {
  return (
    <div className="bg-[var(--secondary-color)] w-[max-content] p-1 rounded-[15px] text-center italic">
      {subtitle}
    </div>
  );
};

export default Subtitle;
