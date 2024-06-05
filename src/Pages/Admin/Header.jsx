import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import Logo from "/Users/Jesus18/Desktop/UTD/6CUATRIMESTRE/biblioteca/src/assets/logo_jaz.png";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-gradient-to-r from-green-600 via-white to-red-600 lg:px-24 md:px-16 sm:px-14 px-12 py-2 shadow-md">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div className="flex items-center justify-between py-10 md:py-10">
            <img src={Logo} alt="Logo" className="h-10 w-16 mr-4 px-0" />
            {/* Toggle button section */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <FaTimes
                    className="text-gray-400 cursor-pointer"
                    size={24}
                  />
                ) : (
                  <FaBars
                    className="text-gray-400 cursor-pointer"
                    size={24}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Navbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-black-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-200 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <button className="bg-blue-500 hover:bg-blue-300 text-[1.1rem] font-normal text-white px-5 py-1.5 rounded lg:ml-10 md:ml-6 sm:ml-0 ml-0">
                Register
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
