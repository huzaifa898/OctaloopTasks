import React from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import Sellmethodform from "./Sellmethodform";

function Sellmethod() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center px-4">
      {/* Navbar */}
      <nav className="flex items-center justify-between w-full max-w-[1320px] h-auto md:h-[100px] mt-6">
        {/* Logo and Back Button */}
        <div className="relative">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto md:h-20 md:w-auto"
          />
          <button
            onClick={handleBackClick}
            className="absolute top-full left-0 bg-gray-200 text-black font-apex px-4 py-2 rounded-lg mt-2 text-sm md:text-base hover:bg-gray-300 transition"
            style={{
              width: "126px",
              height: "40px",
            }}
          >
            Back
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-4 md:space-x-8">
          <Link to="/">
            <li className="text-gray-700 hover:text-red-600 font-apex font-bold text-sm md:text-lg cursor-pointer">
              Home
            </li>
          </Link>
          <li className="text-red-700 font-bold font-apex text-sm md:text-xl cursor-pointer">
            AI NFT Generation
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaSignInAlt className="text-gray-700 hover:text-red-600 text-lg md:text-xl cursor-pointer" />
          <FaUserPlus className="text-gray-700 hover:text-red-600 text-lg md:text-xl cursor-pointer" />
        </div>
      </nav>

      {/* Sell Method Form */}
      <div className="w-full max-w-[1320px] mt-8">
        <Sellmethodform />
      </div>
    </div>
  );
}

export default Sellmethod;
