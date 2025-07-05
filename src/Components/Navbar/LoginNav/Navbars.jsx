import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[#2e2e2f] shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={""} alt="Logo" className="h-9" />
            <span className="text-white text-lg sm:text-xl font-bold">
              ClassTrack Pro
            </span>
          </Link>
          {/* Desktop Navigation Links (Hidden on Mobile, shown on md screens and up) */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-white hover:text-[#1bd421] transition-colors duration-200 text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/team"
              className="text-white hover:text-[#1bd421] transition-colors duration-200 text-lg font-medium"
            >
              Team
            </Link>
            {/* <Link to="/features" className="text-white hover:text-[#1bd421] transition-colors duration-200 text-lg font-medium">
              Features
            </Link>
             */}
            <Link
              to="/contact"
              className="text-white hover:text-[#1bd421] transition-colors duration-200 text-lg font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <i
                className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}
              ></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu (Hidden by default, shown when isOpen is true) */}
        <div
          className={`md:hidden absolute top-[64px] left-0 w-full bg-[#2e2e2f] shadow-md ${isOpen ? "block" : "hidden"} py-4`}
        >
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/"
              className="text-white hover:text-[#1bd421] transition-colors duration-200 text-lg font-medium block w-full text-center py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/team"
              className="text-white hover:text-[#1bd421] transition-colors duration-200 text-lg font-medium block w-full text-center py-2"
              onClick={toggleMenu}
            >
              Team
            </Link>
            {/*
            <Link
              to="/features"
              className="text-white hover:text-[#1bd421] transition-colors duration-200 text-lg font-medium block w-full text-center py-2"
              onClick={toggleMenu}
            >
              Features
            </Link>
              */}
            <Link
              to="/contact"
              className="text-white hover:text-[#1bd421] transition-colors duration-200 text-lg font-medium block w-full text-center py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
