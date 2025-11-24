import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 backdrop-blur-md w-full bg-primary h-15 z-999 flex items-center justify-around">
      <img
        src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/686675ba97fa82357a9b5440_Bitform%20Logo.svg"
        alt=""
        className=""
      />

      <ul className="hidden lg:flex gap-5 items-center whitespace-nowrap">
        <li className="font-light">Home</li>
        <li className="font-light">Demos</li>
        <li className="font-light">Inner Pages</li>
        <li className="font-light">Utility</li>
      </ul>

      <div className="flex items-center gap-5">
        <button className="py-2 px-5 bg-primary hidden md:flex">
            <span className="button-move-still">Purchase template</span>
          
        </button>
        <button
          className="py-2 px-5 bg-primary  lg:hidden relative "
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevrons-down-icon lucide-chevrons-down"
            className={`button-move duration-300 transform transition-all ${
              open ? "" : "rotate-180"
            }`}
          >
            <path d="m7 6 5 5 5-5" />
            <path d="m7 13 5 5 5-5" />
          </svg>
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
            alt=""
            className="absolute w-10px top-0 left-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
            alt=""
            className="absolute w-10px top-0 right-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
            alt=""
            className="absolute w-10px bottom-0 left-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
            alt=""
            className="absolute w-10px bottom-0 right-0"
          />
        </button>
      </div>

      <div
        className={`absolute top-[60px] left-0 w-full h-[calc(100vh-60px)] flex items-center justify-center bg-black/95 duration-500 transform transition-all ${
          open
            ? "translate-y-0 opacity-100"
            : " translate-y-full opacity-0 z-900"
        }`}
      >
        <ul className="flex flex-col h-[calc(100vh-60px)]  gap-5 items-center justify-center whitespace-nowrap">
          <li className="font-light">Home</li>
          <li className="font-light">Demos</li>
          <li className="font-light">Inner Pages</li>
          <li className="font-light">Utility</li>
          <li><button className="py-2 px-5 bg-primary ">
          Purchase template
        </button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
