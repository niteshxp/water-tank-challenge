import React from "react";
import { AVATAR_IMG } from "../utils/constants";

const Search = () => {
  return (
    <div>
      <div className="p-1 m-1">
        <input
          className="rounded-lg px-1 bg-transparent border cursor-pointer"
          type="text"
          placeholder="find a user"
        />
      </div>
      <div className="p-2 cursor-pointer flex">
        <img
          className="h-12 w-12 object-cover rounded-full"
          src={AVATAR_IMG}
          alt="user"
        />
        <div>
          <span className="mx-2 text-white text-sm">Jane</span>
        </div>
      </div>
      <hr className="mb-2" />
    </div>
  );
};

export default Search;
