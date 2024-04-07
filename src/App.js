import "./App.css";
import Table from "./components/Home/Table";
import TableComponent from "./components/Home/TableComponent";
import Sidebar from "./components/NavBars/Sidebar";
import TopBar from "./components/NavBars/TopBar";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-[5vw] h-96">
          <Sidebar />
        </div>
        <div className="w-[95vw] flex flex-col ">
          <TopBar />
          <TableComponent />
        </div>
      </div>
    </>
  );
}

export default App;
