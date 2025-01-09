import React, { useState } from 'react';
import main from '../Images/main.png';
import hands from '../Images/hands.png';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-4 bg-white md:px-8">
        <div className={`flex items-center space-x-2 ${isOpen ? 'hidden' : 'flex'}`}>
          <img src={logo} alt="Logo" className="h-8 w-auto md:h-20" />
        </div>
        <ul className="hidden md:flex space-x-4 text-gray-800 font-medium md:space-x-8">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <Link to={'/nft'}>
            <li className="hover:text-red-500 cursor-pointer">
              AI NFT Generation
            </li>
          </Link>
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
        <div className="md:hidden bg-white px-4 py-4 space-y-4">
          <ul className="space-y-2 text-gray-800 font-medium">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <Link to={'/nft'}>
              <li className="hover:text-red-500 cursor-pointer">
                AI NFT Generation
              </li>
            </Link>
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
      <div className="flex flex-col items-center justify-center text-center px-4 py-8 h-full relative md:px-6 md:py-16">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-4 md:text-4xl md:mb-4">
          DISCOVER, CREATE & SELL ARTWORKS.
        </h1>
        <p className="text-base text-gray-700 mb-8 md:text-lg md:mb-8">
          Discover and trade unique digital art pieces on our NFT website, where creativity meets blockchain technology.
        </p>

        {/* Single Image with Embedded Background */}
        <div className="relative flex items-center justify-center w-full max-w-screen-md mx-auto">
          <img
            src={main}
            alt="Main Art"
            className="relative z-10 rounded-lg shadow-lg w-full h-auto md:w-[921px] md:h-[416px]"
          />
        </div>
      </div>

      {/* Background Hands Image */}
      <img
        src={hands}
        alt="Hands Background"
        className="absolute bottom-0 w-full h-auto opacity-1 z-0 md:w-1920 md:h-630"
      />
    </div>
  );
};

export default HeroSection;
