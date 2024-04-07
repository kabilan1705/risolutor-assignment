import React from "react";
import { IoPrism } from "react-icons/io5";
import { SiFiles } from "react-icons/si";
import { MdSettings } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-blue-950 min-h-screen flex flex-col items-center gap-8 py-5">
      <div className="text-white font-extrabold text-4xl ">
        <IoPrism className=" hover:text-gray-300" />
      </div>
      <div className="text-white font-extrabold text-4xl">
        <SiFiles className=" hover:text-gray-300" />
      </div>
      <div className="text-white font-extrabold text-4xl">
        <MdSettings className=" hover:text-gray-300" />
      </div>
    </div>
  );
};

export default Sidebar;
