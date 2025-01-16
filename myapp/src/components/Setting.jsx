import React, { useState } from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

function Setting() {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const handleUploadClick = () => {
    setShowUploadModal(true);
  };

  const handleCloseModal = () => {
    setShowUploadModal(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Navbar */}
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
        <Link to="/profile">
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
        </Link>
        <Link to="/setting">
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

      {/* Profile Form Section */}
      <div
        className="w-1320px mx-auto text-white p-8 rounded-lg mt-[200px]"
        style={{ height: "1794px", opacity: 1 }}
      >
        {/* Banner Upload */}
        <div
          className="relative bg-gray-300 rounded-lg mx-auto"
          style={{
            width: '1320px',
            height: '409px',
            top: '55px',
            gap: '0px',
            opacity: '1',
          }}
        >
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg">
            Upload Banner
          </button>
        </div>

        {/* Profile Upload */}
        <div className="relative -mt-0 flex justify-center">
          <div className="w-[100px] h-[100px] bg-gray-300 rounded-full flex items-center justify-center border-2 border-dashed border-gray-500">
            <span className="text-2xl font-bold text-gray-500">+</span>
          </div>
        </div>
        <div className="text-center mt-2">
          <button
            className="bg-white text-black px-4 py-2 rounded-lg"
            onClick={handleUploadClick}
          >
            Upload Profile
          </button>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-black font-apex mb-2">Display Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full border border-gray-300 text-black px-4 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-black font-apex mb-2">Bio</label>
            <textarea
              placeholder="Enter Bio"
              className="w-full border border-gray-300 text-black px-4 py-2 rounded-lg h-[100px]"
            ></textarea>
          </div>

          <div>
            <label className="block text-black font-apex mb-2">E-Mail</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-gray-300 text-black px-4 py-2 rounded-lg"
            />
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-black font-apex mb-4">SOCIAL LINKS</h3>
            <div className="space-y-4">
              {["Website", "X(Twitter)", "Discord", "Instagram"].map(
                (label) => (
                  <div key={label} className="flex items-center gap-4">
                    <input
                      type="text"
                      placeholder={`Enter ${label}`}
                      className="flex-1 border border-gray-300 text-black px-4 py-2 rounded-l-lg"
                    />
                    <button className="bg-red-500 text-white px-4 py-2 rounded-r-lg">
                      Connect
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </form>

        {/* Save Changes */}
        <div className="mt-8 text-left">
            <Link to='/profile'>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
            Save Changes
          </button>
          </Link>
        </div>
      </div>

      {/* Upload Profile Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-white p-8 rounded-lg shadow-lg relative"
            style={{
              width: '455px',
              height: '285px',
              top: '98px',
              left: '28px',
              gap: '0px',
              opacity: '1',
            }}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-2xl text-center font-apex mb-4">Upload Image</h2>
            <div className="flex flex-col items-center justify-center h-full">
              <div
                className="w-[179px] h-[129px] bg-gray-200 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center mb-4"
                style={{
                  top: '176px',
                  left: '166px',
                  gap: '0px',
                  opacity: '1',
                }}
              >
                <span className="text-gray-500 mb-2">Drag and Drop</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  Upload Image
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;
