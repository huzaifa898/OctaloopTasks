import React, { useState } from 'react';
import main from '../Images/main.png';
import hands from '../Images/hands.png';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Navbar */}
      <div className="absolute top-5 left-0 w-full z-20">
        <nav className="flex justify-between items-center px-4 py-2 mx-auto w-full max-w-screen-xl">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-[65px] h-[100px] object-contain"
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
            <li className="hover:text-red-500 font-apex text-bold text-red-600 underline cursor-pointer">
              Home
            </li>
            <Link to={'/nft'}>
              <li className="hover:text-red-500 font-apex cursor-pointer">
                AI NFT Generation
              </li>
            </Link>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              className="bg-red-500 text-white w-[200px] h-[50px] rounded-md font-apex hover:bg-red-600"
              onClick={openModal}
            >
              Connect Wallet
            </button>
            <Link to='/nft'>
            <button className="border font-apex border-red-500 text-red-500 w-[200px] h-[50px] rounded-md hover:bg-red-500 hover:text-white">
              Create NFT
            </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-800">
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
        </nav>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Modal Content */}
            <h1 className="text-lg font-bold mb-4 text-center">
              CONNECT YOUR WALLET
            </h1>
            <div className="space-y-3">
              <button className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
                <span className="ml-2">Pera</span>
              </button>
              <button className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
                <span className="ml-2">Defly</span>
              </button>
              <button className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
                <span className="ml-2">Daffi</span>
              </button>
              <button className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
                <span className="ml-2">WalletConnect</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-8 h-full relative md:px-6 md:py-16">
        <h1 className="text-2xl font-apex text-gray-900 mb-4 md:text-4xl md:mb-4">
          DISCOVER, CREATE & SELL ARTWORKS.
        </h1>
        <p className="text-base font-apex text-gray-700 mb-8 md:text-lg md:mb-8">
          Discover and trade unique digital art pieces on our NFT website, where
          creativity meets blockchain technology.
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