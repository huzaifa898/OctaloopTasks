import React from 'react';
import main from '../Images/main.png';
import hands from '../Images/hands.png';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative  overflow-hidden h-screen">
      {/* Navbar */}
      <nav className="flex justify-evenly items-center px-8 py-4 bg-white">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-90 w-97.2" />
        </div>
        <ul className="flex space-x-8 text-gray-800 font-medium">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
           <Link to={'/nft'}>
          <li className="hover:text-red-500 cursor-pointer">
            AI NFT Generation
          </li>
          </Link>
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
      <div className="flex flex-col items-center text-center px-6 py-16 h-full relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          DISCOVER, CREATE & SELL ARTWORKS.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Discover and trade unique digital art pieces on our NFT website, where creativity meets blockchain technology.
        </p>

        {/* Single Image with Embedded Background */}
        <div className="relative flex items-center justify-center w-full max-w-screen-md mx-auto">
          <img
            src={main}
            alt="Main Art"
            className="relative z-10 rounded-lg shadow-lg w-[921px] h-[416px]"
          />
        </div>
      </div>

      {/* Background Hands Image */}
      <img
        src={hands}
        alt="Hands Background"
        className="absolute bottom-0 w-1920 h-630 opacity-1 z-0"
      />
    </div>
  );
};

export default HeroSection;
