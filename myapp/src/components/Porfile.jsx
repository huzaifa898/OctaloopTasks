import React, { useState } from "react";
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
  const [showSettingsForm, setShowSettingsForm] = useState(false);

  const handleSettingsClick = () => {
    setShowSettingsForm(true);
  };

  const handleCloseSettingsForm = () => {
    setShowSettingsForm(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Navbar Section */}
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
          top: "188px",
          left: "308px",
          gap: "5px",
          opacity: "1",
        }}
      >
        <button
          className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
          style={{
            width: "90px",
            height: "34px",
            padding: "5px 10px",
            borderRadius: "8px 0px 0px 0px",
          }}
        >
          Profile
        </button>
        <button
          className="bg-gray-200 text-black font-apex px-4 py-2 rounded-lg hover:bg-red-700"
          style={{
            width: "125px",
            height: "34px",
            padding: "5px 10px",
            borderRadius: "8px 0px 0px 0px",
          }}
          onClick={handleSettingsClick}
        >
          Setting
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center gap-4 mt-10">
        {/* Profile Banner Section */}
        <div className="relative w-[1320px] h-[305px] mt-[255px] gap-0 border-radius-[20px 0px 0px 0px] opacity-100 mx-auto">
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

        {/* New Section */}
        <div className="flex gap-0 mt-10">
          <div
            style={{
              width: '482px',
              height: '461px',
              position: 'absolute',
              top: '950px',
              left: '315px',
              gap: '0px',
              borderRadius: '15px 0px 0px 0px',
              opacity: '1',
            }}
          >
            <img
              src={new11}
              alt="New Section"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            style={{
              width: '691px',
              height: '491px',
              position: 'absolute',
              top: '950px',
              left: '847px',
              gap: '0px',
              opacity: '1',
            }}
            className="bg-gray-100 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-apex mb-4">WONDERFUL ARTWORK</h2>
            <div
              style={{
                width: '322px',
                height: '48px',
                top: '1021px',
                left: '0px',
                gap: '0px',
                borderRadius: '8px 0px 0px 0px',
                opacity: '1',
              }}
              className="bg-gray-200 p-4 rounded-lg shadow-md"
            >
              items
            </div>
            <br />
            <div
              style={{
                width: '322px',
                height: '48px',
                top: '1021px',
                left: '0px',
                gap: '0px',
                borderRadius: '8px 0px 0px 0px',
                opacity: '1',
              }}
              className="bg-gray-200 p-4 rounded-lg shadow-md"
            >
              VOL FRY
            </div>
            <div className="flex gap-4 mt-4">
              <img src={link1} alt="Link 1" className="w-full h-24 object-cover rounded-lg" />
              <img src={link2} alt="Link 2" className="w-full h-24 object-cover rounded-lg" />
              <img src={link3} alt="Link 3" className="w-full h-24 object-cover rounded-lg" />
              <img src={link4} alt="Link 4" className="w-full h-24 object-cover rounded-lg" />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis culpa perspiciatis sint ipsum exercitationem, tenetur reprehenderit esse quo, qui possimus odio,
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum facere quae? Labore repellendus perferendis iste ad vel nesciunt consequatur totam 
                odit incidunt velit est aliquid magnam pariatur, iusto eum.
                 officia facilis ullam. Est in odit iste asperiores deleniti.</p>
          </div>
        </div>
      </div>   

      {/* Profile Cards Section */}
      

      {/* Settings Form Modal */}
      {showSettingsForm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          style={{
            width: '1320px',
            height: '1794px',
            top: '255px',
            left: '300px',
            gap: '0px',
            opacity: '1',
          }}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-full h-full">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600"
              onClick={handleCloseSettingsForm}
            >
              &times;
            </button>
            <h2 className="text-2xl text-center font-apex mb-4">Settings</h2>
            <form>
              {/* Add your form fields here */}
              <div className="mb-4">
                <label className="block text-gray-700 font-apex mb-2">Field 1</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter value"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-apex mb-2">Field 2</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter value"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
