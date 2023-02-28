import React from "react";

export default function login() {
  return (
    <div className="flex justify-center items-center">
      {/* <h1 className="text-2xl font-semibold text-gray-900">Login</h1> */}
      <form className="mt-12" action="" method="POST">
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            className="peer h-10 w-full border-b-2 border-gray-300 
            text-gray-900 placeholder-transparent focus:outline-none
            focus:border-b-blue-900"
            placeholder="Email Address"
          />
        </div>
      </form>
    </div>
  );
}
