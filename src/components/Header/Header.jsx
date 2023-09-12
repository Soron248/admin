import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="h-fit flex justify-between md:px-10 md:py-16 md:col-span-2">
      <div>
        <h1 className="text-2xl font-bold hidden md:block">User Name</h1>
        <h1 className="text-2xl font-bold md:hidden">Studio.</h1>
        <p className="text-gray-400 hidden md:block">You’ve got 24 New Sales</p>
      </div>
      <div className="flex  gap-5">
        <div className="flex gap-1 outline outline-1 outline-gray-400 justify-center items-center px-2 rounded-xl">
          <BiSearchAlt className="text-2xl text-gray-400" />
          <input
            type="search"
            className="outline-none"
            placeholder="Quick search"
          />
        </div>
        <button
          type="button"
          className="p-4 outline outline-1 outline-gray-400 rounded-xl"
        >
          <BsFillBellFill className="text-xl text-gray-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;
