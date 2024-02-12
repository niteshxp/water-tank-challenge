import React from "react";

const Login = () => {
  return (
    <div className=" w-1/3 my-28 mx-auto text-center border-2 border-black bg-yellow-50 rounded-xl">
      <h1 className="text-lg font-semibold">Chat App</h1>
      <h5 className="text-lg">Log In</h5>
      <form className="flex flex-col items-center my-4">
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

        <h1 className="w-64 py-1 my-4 rounded-lg bg-purple-500 cursor-pointer">
          Login
        </h1>
      </form>
      <p className="my-4">
        Don't have an account?
        <span className="font-medium italic"> Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
