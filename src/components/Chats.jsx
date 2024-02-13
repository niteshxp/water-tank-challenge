import React from "react";
import { AVATAR_IMG } from "../utils/constants";

const Chats = () => {
  return (
    <div className="">
      <div className="hover:bg-[#2f2d52] flex items-center px-2 py-1 cursor-pointer">
        <img
          className="h-12 w-12 object-cover rounded-full"
          src={AVATAR_IMG}
          alt="avatar"
        />
        <div className="mx-2 text-sm text-white">
          <span>Jane</span>
          <p>Hello john cena</p>
        </div>
      </div>

      <div className="hover:bg-[#2f2d52] flex items-center px-2 py-1">
        <img
          className="h-12 w-12 object-cover rounded-full"
          src={AVATAR_IMG}
          alt="avatar"
        />
        <div className="mx-2 text-sm text-white">
          <span>Jane</span>
          <p>Hello john cena</p>
        </div>
      </div>

      <div className="hover:bg-[#2f2d52] flex items-center px-2 py-1">
        <img
          className="h-12 w-12 object-cover rounded-full"
          src={AVATAR_IMG}
          alt="avatar"
        />
        <div className="mx-2 text-sm text-white">
          <span>Jane</span>
          <p>Hello john cena</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
