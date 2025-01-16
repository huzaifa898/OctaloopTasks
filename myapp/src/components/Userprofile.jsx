import React from 'react'
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import banner from '../Images/banner.png';
import ba from '../Images/ba.png';
function Userprofile() {
  return (
    <div  className="flex flex-col items-center">
          <nav className="flex items-center justify-between py-3 w-[1320px] h-[100px] mt-[25px] gap-0 opacity-100">
        <div className="text-xl font-bold text-red-600">
          <img src={logo} alt="Logo" className="h-10 w-auto md:h-24 md:w-24" />
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

      {/* Buttons Section */}
      <div
        className="flex space-x-4 mt-8"
        style={{
          position: "absolute",
          top: "140px",
          left: "300px",
          gap: "0px",
          opacity: "1",
        }}
      >
        <button
          className="bg-gray-100 text-black font-apex px-4 py-2 rounded-lg"
          style={{
            width: "100px",
            height: "50px",
            padding: "5px 10px",
            borderRadius: "8px 0px 0px 0px",
          }}
        >
          Profile
        </button>
        <Link to='/setting'>
        <button
          className="bg-gray-100 text-black font-apex px-4 py-2 rounded-lg"
          style={{
            width: "100px",
            height: "50px",
            padding: "5px 10px",
            borderRadius: "8px 0px 0px 0px",
          }}
        >
          Setting
        </button>
        </Link>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center gap-4 mt-10">
        {/* Profile Banner Section */}
        <div className="relative w-[1320px] h-[344px] mt-[110px] gap-0 border-radius-[20px 0px 0px 0px] opacity-100 mx-auto">
          <img
            src={banner}
            alt="Profile Banner"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-4 right-4 bg-red-500 text-white py-2 px-6 rounded-[15px]">
            Follow
          </button>
        </div>

        {/* Profile Info Section */}
        <div className="flex flex-col items-center text-center">
          <img
            src={ba}
            alt="Profile Icon"
            className="w-[100px] h-[100px] rounded-full mt-[-50px] border-4 border-white"
          />
          <h1 className="text-2xl font-bold mt-4">WILLIAM AHARANA</h1>
          <div className="flex gap-6 mt-2">
            <span className="text-lg">99 Followers</span>
            <span className="text-lg">26 Following</span>
            <span className="text-lg">12 Items</span>
          </div>
          <div className="mt-4">
            <button className="bg-white text-black py-2 px-6 rounded-[15px] border-2 border-black">
              10.89 FRY
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Userprofile
