import React from "react";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="h-10 w-2/3 bg-[#5d5b8d]">
      <div className="my-2 px-2 flex justify-between items-center">
        <span className="text-gray-300">John</span>
        <div className="px-2 gap-4 flex justify-between items-center">
          <h1>🤖</h1>
          <h1>🎥</h1>
          <h1>🆕</h1>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
