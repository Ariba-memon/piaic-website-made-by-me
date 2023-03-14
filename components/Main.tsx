"use client";
import { useState } from "react";
const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap font-serif shadow-xl bg-green-400  p-2 mb-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/">
        <img src="https://www.piaic.org/static/media/Logo.fb7de414.svg"className="w-90 h-20" alt={"logo"} />
          {/* <p className="font-semibold text-xl tracking-tight">My Logo</p> */}
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/></svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-md lg:flex-grow ">
          <a href="/">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
              onClick={toggleMenu}
            >
              Home
            </p>
          </a>
          <a href="/about">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
              onClick={toggleMenu}
            >
              About
            </p>
          </a>
          <a href="/contact">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
              onClick={toggleMenu}
            >
          Contact Us
            </p>
          </a>
          <a href="/WIT">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
              onClick={toggleMenu}
            >
         WIT
            </p>
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Main;