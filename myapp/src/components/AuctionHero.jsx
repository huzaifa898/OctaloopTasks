import React, { useState } from "react";
import auchero from '../Images/auchero.png';
import logo from "../Images/logo.png";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: "1320px",
        height: "100vh",
        margin: "0 auto",
      }}
    >
      {/* Navbar */}
      <div
        className="flex justify-between items-center w-full px-4 py-2 md:px-8"
        style={{
          height: "100px",
          marginTop: "-200px", // Negative margin to pull the navbar closer to the top
        }}
      >
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "99px", height: "100px" }}
          />
        </div>
        <ul
          className="hidden md:flex justify-between text-black-800 font-medium"
          style={{
            width: "331px",
            height: "79px",
            alignItems: "center",
            gap: "-200px", // Reduce the gap between the links
          }}
        >
          <li className="hover:text-red-500 text-bolder text-red-800 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">
            AI NFT Generation
          </li>
        </ul>
        <div className="hidden md:flex space-x-2 md:space-x-4">
          <button
            className="text-white rounded-md hover:bg-red-600"
            style={{
              width: "200px",
              height: "58px",
              border: "2px solid red",
              background: "red",
            }}
          >
            Connect Wallet
          </button>
          <button
            className="text-red-500 rounded-md hover:bg-red-500 hover:text-white"
            style={{
              width: "200px",
              height: "58px",
              border: "2px solid red",
              background: "transparent",
              color: "red",
            }}
          >
            Create NFT
          </button>
        </div>
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden px-4 py-4 space-y-4 shadow-md w-full"
          style={{ marginTop: "-10px" }}
        >
          <ul className="space-y-2 text-gray-800 font-medium">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">
              AI NFT Generation
            </li>
          </ul>
          <div className="space-y-2">
            <button
              className="w-full text-white px-4 py-2 rounded-md hover:bg-red-600"
              style={{
                border: "2px solid red",
                background: "transparent",
              }}
            >
              Connect Wallet
            </button>
            <button
              className="w-full text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white"
              style={{
                border: "2px solid red",
                background: "transparent",
              }}
            >
              Create NFT
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div
        className="flex flex-col items-center justify-center w-full px-4 md:px-6 py-20"
        style={{
          paddingTop: "0",
          marginTop: "20px", // Optional margin for overall section
        }}
      >
        {/* Text Section */}
        <div
          className="text-center"
          style={{
            width: "512px",
            marginBottom: "20px", // Space between text and image
          }}
        >
         <h1
  className="text-3xl md:text-4xl font-bold text-red-600 mb-4"
  style={{
    fontFamily: "Apex Mk2, sans-serif", // Font family
    fontWeight: "700", // Weight
    fontSize: "150px", // Size
    lineHeight: "180px", // Line height
    letterSpacing: "4%", // Letter spacing
  }}
>
  <span className="text-8xl md:text-5xl">AUCTIONS</span>
</h1>
        </div>

        {/* Image Section */}
        <div
          className="flex justify-center"
          style={{
            width: "1273px",
            height: "293px",
          }}
        >
          <img
            src={auchero}
            alt="NFT Collection"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
