import Image from "next/image";
import React from "react";
import srn from "../../../public/srn.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import { ImCross } from "react-icons/im";

const LSidebar = ({ isOpen, toggleSidebar, name, email }) => {
  return (
    <section
      className={`${
        isOpen ? "w-80 p-5" : "w-0"
      } md:w-auto transition-all duration-300 absolute md:static h-screen z-50 bg-white md overflow-hidden left-0 md:inline-block  md:p-10`}
    >
      <div className="w-full flex flex-col justify-between h-full bg-gray-100 rounded-2xl ">
        <div className="flex justify-center items-center p-10">
          <h1 className="w-full text-3xl font-bold ">studio.</h1>
          <ImCross
            className="cursor-pointer md:hidden"
            onClick={toggleSidebar}
          />
        </div>
        <nav className="">
          <ul className="w-full h-full flex flex-col gap-5 text-gray-600 justify-center items-start pl-10 ">
            <li className="flex items-center gap-2 cursor-pointer">
              <BsArrowRightShort className="text-gray-500 text-xl" />
              Dashboard
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <BsArrowRightShort className="text-gray-500 text-xl" />
              Crafted
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <BsArrowRightShort className="text-gray-500 text-xl" />
              Applications
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <BsArrowRightShort className="text-gray-500 text-xl" />
              Layout Builder
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <BsArrowRightShort className="text-gray-500 text-xl" />
              Components
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <BsArrowRightShort className="text-gray-500 text-xl" />
              Documentation
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <BsArrowRightShort className="text-gray-500 text-xl" />
              Changelog v8.0.22
            </li>
          </ul>
        </nav>
        <footer className=" flex md:gap-16 justify-center items-center m-5">
          <div className="flex items-center">
            <Image
              src={srn}
              alt="user"
              className="w-14 h-14 border-4 rounded-full"
            />
            <div className="ml-3 ">
              <h1 className="font-bold text-lg">{name}</h1>
              <p className="font-thin text-sm text-gray-500">{email}</p>
            </div>
          </div>
          <FcSettings className="cursor-pointer text-2xl" />
        </footer>
      </div>
    </section>
  );
};

export default LSidebar;
