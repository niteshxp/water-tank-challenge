import React from "react";
import addIMG from "../assets/add.png";

const Input = () => {
  return (
    <div className="h-10 px-1 flex justify-between items-center bg-gray-300">
      <input
        className="w-2/3 p-1 bg-transparent rounded-lg"
        type="text"
        placeholder="Type something ..."
      />
      <div className="flex gap-4 items-center">
        <img src="📁" alt="attach" />
        <input className="hidden" type="file" id="file" />
        <label className="" htmlFor="file">
          <img className="h-5 w-5" src={addIMG} alt="add" />
        </label>
        <button className="bg-[#8da4f1] p-1 rounded-tl-lg rounded-br-lg  text-gray-900 ">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
