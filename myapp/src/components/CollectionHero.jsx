import React from "react";
import Collection from '../Images/collections.png'
import logo from '../Images/logo.png'
const HeroSection = () => {
  return (
    <div className=" min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-evenly items-center px-8 py-4 bg-white">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-90 w-97.2" />
        </div>
        <ul className="flex space-x-8 text-gray-800 font-medium">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">
            AI NFT Generation
          </li>
        </ul>
        <div className="flex space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Connect Wallet
          </button>
          <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white">
            Create NFT
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 mt-10 h-[calc(100vh-80px)]">
        {/* Tagline */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pr-10">
          <h1 className="text-4xl md:text-8xl font-bold text-red-600 mb-20 ml-36">
            NFT <br />
             <span className="text-6xl"> COLLECTIONS</span>
          </h1>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Collection}
            alt="NFT Collection"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
