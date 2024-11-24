import React from "react";

const FilterBtn = ({ role, number, handleClick, active }) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        active ? "underline" : ""
      } underline-offset-8 text-blue-800 text-sm md:text-sm lg:text-base`}
    >
      {role} ({number})
    </button>
  );
};

export default FilterBtn;
