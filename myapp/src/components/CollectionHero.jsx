import React, { useState } from "react";
import Collection from '../Images/collections.png';
import logo from '../Images/logo.png';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-2 bg-white shadow-md md:px-8">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto md:h-20" />
        </div>
        <ul className="hidden md:flex space-x-4 text-gray-800 font-medium md:space-x-8">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">
            AI NFT Generation
          </li>
        </ul>
        <div className="hidden md:flex space-x-2 md:space-x-4">
          <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 md:px-4 md:py-2">
            Connect Wallet
          </button>
          <button className="border border-red-500 text-red-500 px-2 py-1 rounded-md hover:bg-red-500 hover:text-white md:px-4 md:py-2">
            Create NFT
          </button>
        </div>
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow-md">
          <ul className="space-y-2 text-gray-800 font-medium">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">
              AI NFT Generation
            </li>
          </ul>
          <div className="space-y-2">
            <button className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Connect Wallet
            </button>
            <button className="w-full border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white">
              Create NFT
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-4 h-full relative md:px-6 md:py-16">
        {/* Tagline */}
        <div className="mb-4 lg:mb-0">
          <h1 className="text-3xl md:text-6xl font-bold text-red-600 mb-4">
            NFT <br />
            <span className="text-4xl md:text-5xl">COLLECTIONS</span>
          </h1>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={Collection}
            alt="NFT Collection"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;