import React from "react";

export default function login() {
  return (
    <div className="flex justify-center items-center">
      {/* <h1 className="text-2xl font-semibold text-gray-900">Login</h1> */}
      <form className="mt-12" action="" method="POST">
        <div className="relative">
          <label for="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="peer h-10 w-full border-gray-300 
            text-gray-900 focus:outline-none
            focus:border-b-blue-900"
          />
          <div className="mt-10 relative">
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="peer h-10 w-full border-gray-300 
              text-gray-900 focus:outline-none focus:border-b-blue-900"
              placeholder="Password"
            />
          </div>
          <input
            type="submit"
            value="Sign in"
            className="mt-20 px-4 py-2 rounded bg-rose-500 
            hover:bg-rose-400 text-white font-semibold 
            text-center block w-full focus:outline-none focus:ring 
            focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 
            cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}
