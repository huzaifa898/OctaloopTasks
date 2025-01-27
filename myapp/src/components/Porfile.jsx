import React from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import banner from '../Images/banner.png';
import ba from '../Images/ba.png';
import new11 from '../Images/new11.png';
import link1 from '../Images/link1.png';
import link2 from '../Images/link2.png';
import link3 from '../Images/link3.png';
import link4 from '../Images/link4.png';
import Profilecards from "./Profilecards";

function Profile() {
  return (
    <div className="flex flex-col items-center">

      {/* Navbar Section */}
      <nav className="flex items-center justify-between py-3 w-full max-w-[1320px] mt-[25px] gap-0 opacity-100 px-4 mx-auto">
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
      <div className="flex flex-col space-y-4 mt-4 w-full max-w-screen-xl px-4">
        <button
          className="bg-gray-100 text-black font-apex px-4 py-2 rounded-lg"
          style={{
            width: "100%",
            maxWidth: "120px",
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
              width: "100%",
              maxWidth: "120px",
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
      <div className="flex flex-col items-center gap-4 mt-10 w-full px-4">
        {/* Profile Banner Section */}
        <div className="relative w-[1320] h-[200px] sm:h-[344px] mt-[10px] gap-0 border-radius-[20px 0px 0px 0px] opacity-100 mx-auto">
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
        <div className="flex flex-col items-center text-center w-full">
          <img
            src={ba}
            alt="Profile Icon"
            className="w-[80px] h-[80px] rounded-full mt-[-40px] border-4 border-white"
          />
          <h1 className="text-xl md:text-2xl font-bold mt-4">WILLIAM AHARANA</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <span className="text-sm sm:text-lg">99 Followers</span>
            <span className="text-sm sm:text-lg">26 Following</span>
            <span className="text-sm sm:text-lg">12 Items</span>
          </div>
          <div className="mt-4">
            <button className="bg-white text-black py-2 px-6 rounded-[15px] border-2 border-black">
              10.89 FRY
            </button>
          </div>
        </div>
      </div>

      {/* New Section */}
     {/* New Section */}
<div className="flex flex-col sm:flex-row gap-8 mt-10 w-full max-w-screen-xl px-4">

{/* Image Section */}
<div className="w-full sm:w-[482px] h-[300px] sm:h-[461px] flex items-center justify-center">
  <img
    src={new11}
    alt="New Section"
    className="w-full h-full object-cover rounded-lg shadow-lg"
  />
</div>

{/* Text Content Section */}
<div className="w-full sm:w-[691px] h-auto bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg flex flex-col justify-between">

  {/* Title */}
  <h2 className="text-xl sm:text-2xl font-apex mb-4 text-center sm:text-left">
    WONDERFUL ARTWORK
  </h2>

  {/* Items Section */}
  <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
    items
  </div>

  {/* VOL FRY Section */}
  <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
    VOL FRY
  </div>

  {/* Images Links Section */}
  <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
    <img
      src={link1}
      alt="Link 1"
      className="w-50 sm:w-[20%] md:w-[23%] h-24  rounded-lg shadow-md"
    />
    <img
      src={link2}
      alt="Link 2"
      className="w-50 sm:w-[20%] md:w-[23%] h-24  rounded-lg shadow-md"
    />
    <img
      src={link3}
      alt="Link 3"
      className="w-50 sm:w-[20%] md:w-[23%] h-24  rounded-lg shadow-md"
    />
    <img
      src={link4}
      alt="Link 4"
      className="w-50 sm:w-[20%] md:w-[23%] h-24 object-cover rounded-lg shadow-md"
    />
  </div>

  {/* Text Section */}
  <p className="mt-4 text-sm sm:text-base text-justify">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis culpa perspiciatis sint ipsum exercitationem, tenetur reprehenderit esse quo, qui possimus odio,
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum facere quae? Labore repellendus perferendis iste ad vel nesciunt consequatur totam 
    odit incidunt velit est aliquid magnam pariatur, iusto eum. 
    officia facilis ullam. Est in odit iste asperiores deleniti.
  </p>
</div>
</div>


      {/* Profile Cards Section */}
      <div className="mt-10">
        <Profilecards />
      </div>
    </div>
  );
}

export default Profile;
