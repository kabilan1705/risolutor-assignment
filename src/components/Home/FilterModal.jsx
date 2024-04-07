import React, { useState } from "react";

const FilterModal = ({ handleFunc }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectManager: "",
    projectTimeline: "",
    estimation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFunc();
    console.log("Form data:", formData);

    setFormData({
      projectName: "",
      projectManager: "",
      projectTimeline: "",
      estimation: "",
    });

    handleFunc();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form className="bg-white p-8 rounded-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">Another Modal</h2>
        {/* Project Name */}
        <div className="flex flex-col mb-4">
          <label htmlFor="projectName" className="mb-1">
            Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Project Manager */}
        <div className="flex flex-col mb-4">
          <label htmlFor="projectManager" className="mb-1">
            Project Manager:
          </label>
          <input
            type="text"
            id="projectManager"
            name="projectManager"
            value={formData.projectManager}
            onChange={handleChange}
            required
          />
        </div>
        {/* Project Timeline */}
        <div className="flex flex-col mb-4">
          <label htmlFor="projectTimeline" className="mb-1">
            Project Timeline:
          </label>
          <input
            type="text"
            id="projectTimeline"
            name="projectTimeline"
            value={formData.projectTimeline}
            onChange={handleChange}
            required
          />
        </div>
        {/* Estimation */}
        <div className="flex flex-col mb-4">
          <label htmlFor="estimation" className="mb-1">
            Estimation:
          </label>
          <input
            type="text"
            id="estimation"
            name="estimation"
            value={formData.estimation}
            onChange={handleChange}
            required
          />
        </div>
        {/* Buttons */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleFunc}
            className="bg-gray-300 text-black px-4 py-2 rounded-md mr-5"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-md"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterModal;
