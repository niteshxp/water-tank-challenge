import React from "react";
import addIMG from "../assets/add.png";

const Register = () => {
  return (
    <div className=" w-1/3 my-28 mx-auto text-center border-2 border-black bg-yellow-50 rounded-xl">
      <h1 className="text-lg font-semibold">Chat App</h1>
      <h5 className="text-lg">SignUp</h5>
      <form className="flex flex-col items-center my-4">
        <input
          className="bg-gray-200 cursor-pointer py-1 px-8 my-2 font-medium rounded-lg"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          className="bg-gray-200 cursor-pointer py-1 px-8 my-2 font-medium rounded-lg"
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          className="bg-gray-200 cursor-pointer py-1 px-8 my-2 font-medium rounded-lg"
          type="password"
          placeholder="Enter Your Password"
        />
        <input className="w-64 my-2 hidden" type="file" id="avatar" />
        <label
          className="w-64 my-2 flex justify-evenly items-center"
          htmlFor="avatar"
        >
          <img className="w-8 cursor-pointer" src={addIMG} alt="avatar" />{" "}
          <span className="cursor-pointer">Add Profile Photo</span>
        </label>
        <h1 className="w-64 py-1 my-4 rounded-lg bg-purple-500 cursor-pointer">
          Sign Up
        </h1>
      </form>
      <p className="my-4">
        Already have an account?
        <span className="font-medium italic"> Login</span>
      </p>
    </div>
  );
};

export default Register;
