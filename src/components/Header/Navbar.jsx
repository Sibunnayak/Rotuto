import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Rotuto
          </span>
        </a>
        <div className="flex md:order-2 space-x-4 rtl:space-x-reverse">
          <NavLink
            to="/login"
            className="block py-2 px-3 text-gray-900 rounded-full md:bg-transparent hover:bg-blue-700 hover:text-white hover:px-4 hover:py-2"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign-Up
          </NavLink>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 underline"
                    : "block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 hover:underline"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 underline"
                    : "block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 hover:underline"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 underline"
                    : "block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 hover:underline"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/use-cases"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 underline"
                    : "block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 hover:underline"
                }
              >
                Use Cases
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
