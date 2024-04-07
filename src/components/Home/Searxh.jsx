import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdFilterListAlt } from "react-icons/md";
import { Modal } from "./NewProject";
import FilterModal from "./FilterModal";

const Searxh = ({ handleFunc, handleSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleModelFunc = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownChange = (e) => {
    console.log("Selected option:", e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="flex p-5 justify-between">
      <div className="flex items-center gap-4 py-1">
        <section
          className="p-2 border-2 border-gray-200 rounded-md cursor-pointer"
          onClick={openModal}
        >
          <FaRegCalendarDays />
          {/* Modal */}
          {isModalOpen && <FilterModal handleFunc={handleModelFunc} />}
        </section>
        <section className="flex border-[1px] border-gray-200 px-2 rounded-lg">
          <div
            onClick={toggleDropdown}
            className="flex items-center  gap-2 border-r-[1px] border-r-gray-400 text-gray-400"
          >
            <MdFilterListAlt />
            <span className="text-gray-700">All</span>
            <FaAngleDown />
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Project name
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Project manager
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Last update
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="relative flex py-1 px-2 items-center">
            <input
              className="outline-none"
              type="search"
              name="Search"
              id="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <AiOutlineSearch />
          </div>
        </section>
      </div>
      <button
        onClick={handleFunc}
        className="bg-blue-800 rounded-md text-white px-3 py-1 flex items-center gap-3 "
      >
        <AiOutlinePlus />
        New Project
      </button>
    </div>
  );
};

export default Searxh;
