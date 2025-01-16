import React from 'react';
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
    <div className="flex flex-col items-center">
      <nav className="flex items-center justify-between py-3 w-[1320px] h-[100px] mt-[25px] gap-0 opacity-100">
        <div className="text-xl font-bold text-red-600 relative">
          <img src={logo} alt="Logo" className="h-10 w-auto md:h-24 md:w-24" />
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="bg-gray-200 text-black font-apex px-4 py-2 rounded-lg  mt-8 absolute"
            style={{
              width: '126px',
              height: '64px',
              top: '100%',
              left: '0',
              gap: '0px',
              opacity: '1',
            }}
          >
            Back
          </button>
        </div>
        <ul className="flex space-x-4 md:space-x-6">
          <Link to="/">
            <li className="text-gray-700 hover:text-red-600 font-apex font-bold cursor-pointer">
              Home
            </li>
          </Link>
          <li className="text-red-700 font-bold text-xl font-apex cursor-pointer">
            AI NFT Generation
          </li>
        </ul>
        <div className="flex space-x-2">
          <FaSignInAlt className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
          <FaUserPlus className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
        </div>
      </nav>

      {/* Render Sellmethodform */}
      <Sellmethodform />
    </div>
  );
}

export default Sellmethod;
