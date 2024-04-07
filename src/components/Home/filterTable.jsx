import React, { useState } from "react";

const Filtertable = ({
  TableHead,
  dummyData,
  setFilteredData,
  selectedFilter,
  setSelectedFilter,
}) => {
  const handleFilterClick = (filterName, i) => {
    if (filterName === "all") {
      setSelectedFilter("");
      setFilteredData(dummyData); 
    } else {
      const filtered = dummyData.filter(
        (data) => data.STATUS.toLowerCase() === filterName.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="flex">
      {TableHead.map((val, i) => (
        <div
          key={val.name}
          className={`flex gap-2 px-2 items-center justify-center cursor-pointer ${
            val.id === selectedFilter + 1
              ? "text-violet-800 border-b-4 border-b-violet-500"
              : "text-gray-600"
          }`}
          onClick={() => {
            handleFilterClick(val?.key?.toLowerCase());
            setSelectedFilter(i);
          }}
        >
          {val.name}
          {val.value && (
            <span className="bg-violet-200 text-violet-800 w-5 h-5 flex items-center justify-center p-2 rounded-full text-[10px]">
              {val.value}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filtertable;
