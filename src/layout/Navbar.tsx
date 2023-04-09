import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="text-white body-font bg-[#08415C]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">
            Coin4Cause
          </span>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <div className="mr-5 hover:text-gray-900">
            First Link
          </div>
          <div className="mr-5 hover:text-gray-900">
            Second Link
          </div>
          <div className="mr-5 hover:text-gray-900">
            Third Link
          </div>
          <div className="mr-5 hover:text-gray-900">
            Fourth Link
          </div>
        </nav>
        <button className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
