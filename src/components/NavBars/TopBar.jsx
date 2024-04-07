import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  AiOutlinePlus,
  AiOutlineQuestionCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

const TopBar = () => {
  return (
    <main>
      <div className="flex justify-between p-5 bg-gray-200 ">
        <div className="text-3xl font-bold">Projects</div>
        <div className="flex gap-6 text-2xl">
          <div>
            <IoIosNotificationsOutline />
          </div>
          <div>
            <AiOutlineQuestionCircle />
          </div>
          <div>
            <RxAvatar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TopBar;
