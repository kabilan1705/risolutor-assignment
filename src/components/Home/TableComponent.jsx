import React, { useState } from "react";
import { TableHead } from "./Table";
import { dummy } from "./Table";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import Searxh from "./Searxh";
import Filtertable from "./filterTable";
import NewProject, { Modal } from "./NewProject";

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); 
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredData, setFilteredData] = useState(dummy); 
  const [selectedFilter, setSelectedFilter] = useState("all");

  const [openProject, setOpenProject] = useState(false);
  console.log(openProject);

  const handleFunc = () => {
    setOpenProject(!openProject);
  };

  
  const sortData = (key) => {
    if (key === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData
    .slice()
    .sort((a, b) => {
      if (sortBy) {
        if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  const handleSearch = (searchTerm) => {
    const filtered = dummy?.filter((item) => {
      return Object?.values(item)?.some((value) =>
        value?.toString()?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      {openProject && (
        <>
          <Modal handleFunc={handleFunc} />
        </>
      )}
      <Searxh handleFunc={handleFunc} handleSearch={handleSearch} />
      <Filtertable
        TableHead={TableHead}
        dummyData={dummy}
        setFilteredData={setFilteredData}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr className="flex w-[95vw] justify-between">
              <td className="px-6 py-4 ">
                <input type="checkbox" />
              </td>
              <td className="px-6 py-4"></td>
              <td
                className="px-6 py-4 flex cursor-pointer"
                onClick={() => sortData("#")}
              >
                #{" "}
                <svg
                  class="w-3 h-3 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg>
              </td>
              <td
                className="px-6 py-4 w-44 flex cursor-pointer"
                onClick={() => sortData("PROJECT_NAME")}
              >
                PROJECT_NAME{" "}
                <svg
                  class="w-3 h-3 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg>
              </td>

              <td className="px-6 py-4 w-32 flex cursor-pointer">STATUS</td>
              <td className="px-6 py-4 w-32 flex">PM</td>
              <td
                className="px-6 py-4 w-48 flex"
                onClick={() => sortData("LAST_UPDATE")}
              >
                LAST_UPDATE
                <svg
                  class="w-3 h-3 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg>
              </td>
              <td className="px-6 py-4 w-28 flex">RESOURCES</td>
              <td className="px-6 py-4 w-56 flex">PROJECT_TIMELINE</td>
              <td className="px-6 py-4 text-right w-32 flex">ESTIMATION</td>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((val, i) => (
              <tr className="flex w-[95vw] justify-between " key={i}>
                <td className="px-6 py-3 ">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4">
                  <AiOutlineQuestionCircle />
                </td>
                <td className="px-6 py-4 flex">{i + 1}</td>
                <td className="px-6 py-3 w-44 text-violet-500">
                  {val.PROJECT_NAME}
                </td>
                <td
                  className={
                    val?.STATUS?.toLowerCase() === "on track"
                      ? "text-green-600 w-32 px-3   my-3 bg-green-200 rounded-lg text-center"
                      : val?.STATUS?.toLowerCase() === "on hold"
                      ? "text-gray-400 w-32 px-3  my-3 bg-gray-200 rounded-lg text-center"
                      : val?.STATUS?.toLowerCase() === "at risk"
                      ? "text-red-400 px-1 w-32 my-3 bg-red-200 rounded-lg text-center"
                      : " text-orange-400 w-32 px-1  my-3 bg-orange-200 rounded-lg text-center"
                  }
                >
                  {val.STATUS}
                </td>
                {val.PM?.image ? (
                  <td className="px-6 py-3 w-32">
                    <img
                      className="w-6 h-6"
                      src={val?.PM?.image}
                      alt={val.PM.name}
                    />
                  </td>
                ) : (
                  <td className="px-6 py-3 w-32">{val.PM}</td>
                )}
                <td className="px-6 py-3 w-48">{val.LAST_UPDATE}</td>
                {val.RESOURCES ? (
                  <td className="px-6 py-3 w-28 font-semibold  text-blue-400">
                    <span className="px-2 py-1 bg-blue-100 border border-blue-600 ">
                      {val.RESOURCES}
                    </span>
                  </td>
                ) : (
                  <td className="px-6 py-3 w-28 font-semibold">
                    <IoIosAddCircleOutline className="font-semibold text-2xl text-blue-400" />
                  </td>
                )}
                <td className="px-6 py-3 w-56">{val.PROJECT_TIMELINE}</td>
                <td className="px-6 py-3  w-32">{val.ESTIMATION}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <ul className="flex">
            {Array(Math.ceil(dummy.length / itemsPerPage))
              .fill()
              .map((_, i) => (
                <li key={i}>
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 mr-2 rounded-md ${
                      currentPage === i + 1 ? "bg-gray-300" : "bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
