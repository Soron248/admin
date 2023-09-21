"use client";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import { RiMenuFoldLine } from "react-icons/ri";

const Header = ({ toggleSidebar, user }) => {
  return (
    <header className="p-3 h-fit flex justify-between md:px-10 md:py-16 ">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-2xl font-bold hidden md:block">{user.name}</h1>
        <h1 className="text-2xl font-bold md:hidden  mx-5">
          <RiMenuFoldLine className="cursor-pointer" onClick={toggleSidebar} />
        </h1>
        <p className="text-gray-400 hidden md:block">{user.email}</p>
      </div>
      <div className="flex  gap-3 ">
        <div className=" md:w-auto max-h-10 flex gap-1 outline outline-1 outline-gray-400 justify-center items-center px-2 rounded-xl">
          <BiSearchAlt className="text-2xl text-gray-400" />
          <input
            type="search"
            className="outline-none bg-white"
            placeholder="Quick search"
          />
        </div>
        <button
          type="button"
          className="max-h-10 max-w-10 flex items-center p-4 outline outline-1 outline-gray-400 rounded-xl"
        >
          <BsFillBellFill className="text-xl text-gray-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;
