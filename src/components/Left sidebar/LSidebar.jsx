import Image from "next/image";
import React from "react";
import srn from "../../../public/srn.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
const LSidebar = () => {
  return (
    <section className="h-screen md:col-span-1 p-10">
      <div className="w-full h-full bg-gray-100 rounded-2xl ">
        <h1 className="w-full text-3xl font-bold py-10 pl-10 ">studio.</h1>
        <nav className=" h-3/4">
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
        <footer className=" flex justify-center items-center">
          <Image src={srn} className="w-16 h-16 border-4 rounded-full" />
          <div className="ml-3 mr-32">
            <h1 className="font-bold text-lg">Soron</h1>
            <p className="font-thin text-sm text-gray-500">React Dev</p>
          </div>
          <FcSettings className="cursor-pointer text-2xl" />
        </footer>
      </div>
    </section>
  );
};

export default LSidebar;
