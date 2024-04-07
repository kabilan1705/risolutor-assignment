import { useState } from "react";
import { dummy } from "./Table";

export const Modal = ({ handleFunc }) => {
  const [selectedPM, setSelectedPM] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [rowData, setRowData] = useState({});
  console.log("rowdata", rowData);
  console.log("dddddd", dummy);

  const handlePMSelection = (pm) => {
    setSelectedPM(pm);
  };

  const handleTimelineSelection = (event) => {
    setSelectedTimeline(event.target.value);
  };

  const handleRoleSelection = (role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(
        selectedRoles.filter((selectedRole) => selectedRole !== role)
      );
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRowData((prevNote) => ({
      ...prevNote,
      [name]: value,
      PM: selectedPM,
      PROJECT_TIMELINE: selectedTimeline,
      RESOURCES: selectedRoles.length,
    }));
  };
  const CreateProject = (e) => {
    e.preventDefault();
    console.log("rowData:", rowData);
    dummy.push(rowData);
    if (typeof handleFunc === "function") {
      handleFunc();
    }

    console.log("running");
    setRowData({});
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form className="bg-white p-8 rounded-md w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Project</h2>
        <div className="flex flex-col mb-4">
          <label htmlFor="projectName" className="mb-1">
            Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            name="PROJECT_NAME"
            required
            defaultValue={rowData.PROJECT_NAME}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <span className="mb-1">Project Manager (PM):</span>
          <div>
            <button
              type="button"
              className={`pm-button ${
                selectedPM === "Sarah Jones" ? "bg-blue-900 text-white" : ""
              } border-blue-900 border-2  px-2 py-1`}
              onClick={() => handlePMSelection("Sarah Jones")}
            >
              Sarah Jones
            </button>
            <button
              type="button"
              className={`pm-button ${
                selectedPM === "Li Wang" ? "bg-blue-900 text-white" : ""
              } border-blue-900 border-2  px-2 py-1`}
              onClick={() => handlePMSelection("Li Wang")}
            >
              Li Wang
            </button>
            <button
              type="button"
              className={`pm-button ${
                selectedPM === "Maria Garcia" ? "bg-blue-900 text-white" : ""
              } border-blue-900 border-2  px-2 py-1`}
              onClick={() => handlePMSelection("Maria Garcia")}
            >
              Maria Garcia
            </button>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <span className="mb-1">Roles:</span>
          <div className="flex flew-wrap gap-2">
            <button
              type="button"
              className={`role-button ${
                selectedRoles.includes("UI/UX")
                  ? "bg-blue-900 text-white rounded-lg px-2 py-1 border-blue-900 border-2"
                  : "border-blue-900 border-2 px-2 py-1 rounded-lg"
              }`}
              onClick={() => handleRoleSelection("UI/UX")}
            >
              UI/UX
            </button>
            <button
              type="button"
              className={`role-button ${
                selectedRoles.includes("Frontend")
                  ? "bg-blue-900 text-white rounded-lg px-2 py-1 border-blue-900 border-2"
                  : "border-blue-900 border-2 px-2 py-1 rounded-lg"
              }`}
              onClick={() => handleRoleSelection("Frontend")}
            >
              Frontend
            </button>
            <button
              type="button"
              className={`role-button ${
                selectedRoles.includes("Backend")
                  ? "bg-blue-900 text-white"
                  : ""
              } border-blue-900 border-2 rounded-lg px-2 py-1`}
              onClick={() => handleRoleSelection("Backend")}
            >
              Backend
            </button>
            <button
              type="button"
              className={`role-button ${
                selectedRoles.includes("QA") ? "bg-blue-900 text-white" : ""
              } border-blue-900 border-2 rounded-lg px-2 py-1`}
              onClick={() => handleRoleSelection("QA")}
            >
              QA
            </button>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="projectTimeline" className="mb-1">
            Project Timeline:
          </label>
          <select
            id="projectTimeline"
            name="PROJECT_TIMELINE"
            value={selectedTimeline}
            onChange={handleTimelineSelection}
          >
            <option value="6 Months">6 Months</option>
            <option value="1 to 2 MOnths">1 to 2 Months</option>
            <option value="12 Months">12 Months</option>
            <option value="1 year">1 year</option>
            <option value="long period">long period</option>
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="estimation" className="mb-1">
            Estimation:
          </label>
          <input
            type="text"
            id="estimation"
            name="ESTIMATION"
            required
            placeholder="US$ 0.00"
            defaultValue={rowData.ESTIMATION}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleFunc}
          className="bg-gray-300 text-black px-4 py-2 rounded-md mr-5"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={CreateProject}
          className="bg-blue-900 text-white px-4 py-2 rounded-md"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};
