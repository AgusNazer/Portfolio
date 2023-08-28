import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-24 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${menuOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`hidden h-6 w-6 ${menuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 left-0 hidden sm:flex items-center">
          <img
            src="../../src/assets/images/code.png"
            alt="Icono"
            className="w-20 h-20 rounded-md"
          />
        </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-4">
                    <NavLink
                      to="./"
                      className="text-white hover:bg-gray-700 rounded-md px-3 py-2 text-m font-medium"
                      aria-current="page"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="./about"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-m font-medium"
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="./Techs"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-m font-medium"
                    >
                      Tech Stack
                    </NavLink>
                    <NavLink
                      to="./proyects"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-m font-medium"
                    >
                      Projects
                    </NavLink>
                    <NavLink
                      to="./contact"
                      className="text-white hover:bg-gray-700 rounded-md px-3 py-2 text-m font-medium"
                      aria-current="page"
                    >
                      Contact me
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${menuOpen ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className=" text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Tech Stack
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact me
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
