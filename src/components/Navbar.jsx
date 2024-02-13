import React from "react";
import { AVATAR_IMG } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="h-10 px-2 text-white flex justify-between items-center bg-[#2f2d52]">
      <span>TalkSEEK</span>
      <div className="flex items-center">
        <img
          className="h-8 w-8 object-cover rounded-full"
          src={AVATAR_IMG}
          alt="avatar"
        />
        <span className="mx-2 font-semibold">Arjun</span>
        <button className="text-xs text-gray-900 bg-[#b6b6ee] rounded-xl p-1 ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
