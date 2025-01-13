import React, { useState } from 'react';
import main from '../Images/main.png';
import hands from '../Images/hands.png';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import icon4 from "../Images/icon4.png";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Navbar */}
      <div className="absolute top-5 left-0 w-full z-20">
        <nav className="flex justify-between items-center px-4 py-2 mx-auto w-full max-w-screen-xl lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-[55px] h-[85px] object-contain sm:w-[65px] sm:h-[100px]"
            />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 font-medium">
            <li className="hover:text-red-500 font-apex text-bold text-red-600 underline cursor-pointer">
              Home
            </li>
            <Link to={'/nft'}>
              <li className="hover:text-red-500 font-apex cursor-pointer">
                AI NFT Generation
              </li>
            </Link>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-3 lg:space-x-4">
            <button
              className="bg-red-500 text-white w-[150px] h-[45px] lg:w-[200px] lg:h-[50px] rounded-md font-apex hover:bg-red-600"
              onClick={openModal}
            >
              Connect Wallet
            </button>
            <Link to="/nft">
              <button className="border font-apex border-red-500 text-red-500 w-[150px] h-[45px] lg:w-[200px] lg:h-[50px] rounded-md hover:bg-red-500 hover:text-white">
                Create NFT
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
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

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-30`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-800 focus:outline-none"
            onClick={closeMenu}
          >
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <ul className="flex flex-col space-y-4 p-6 text-gray-800 font-medium">
            <li
              className="hover:text-red-500 font-apex text-bold text-red-600 underline cursor-pointer"
              onClick={closeMenu}
            >
              Home
            </li>
            <Link to="/nft" onClick={closeMenu}>
              <li className="hover:text-red-500 font-apex cursor-pointer">
                AI NFT Generation
              </li>
            </Link>
            <button
              className="bg-red-500 text-white w-full h-[45px] rounded-md font-apex hover:bg-red-600"
              onClick={() => {
                closeMenu();
                openModal();
              }}
            >
              Connect Wallet
            </button>
            <Link to="/nft" onClick={closeMenu}>
              <button className="border font-apex border-red-500 text-red-500 w-full h-[45px] rounded-md hover:bg-red-500 hover:text-white">
                Create NFT
              </button>
            </Link>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-6 h-full relative md:px-6 lg:px-8">
        <h1 className="text-xl font-apex text-gray-900 mb-4 sm:text-2xl lg:text-3xl xl:text-4xl lg:mb-4">
          DISCOVER, CREATE & SELL ARTWORKS.
        </h1>
        <p className="text-sm font-apex text-gray-700 mb-6 sm:text-base lg:text-lg lg:mb-8">
          Discover and trade unique digital art pieces on our NFT website, where
          creativity meets blockchain technology.
        </p>
        <div className="relative flex items-center justify-center w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
          <img
            src={main}
            alt="Main Art"
            className="relative z-10 rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Background Hands Image */}
      <img
        src={hands}
        alt="Hands Background"
        className="absolute bottom-0 w-full h-auto opacity-1 z-0"
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✖
            </button>
            <h1 className="text-lg font-bold mb-4 text-center">
              CONNECT YOUR WALLET
              <img src={logo} alt="Pera Logo" className="h-12 mr-2" />
            </h1>
            <div className="space-y-3">
              <button className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
                <img src={icon1} alt="Pera Logo" className="h-6 mr-2" />
                <span className="ml-2">Pera</span>
              </button>
              <button className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
                <img src={icon2} alt="Pera Logo" className="h-6 mr-2" />
                <span className="ml-2">Defly</span>
              </button>
              <button className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
                <img src={icon3} alt="Pera Logo" className="h-6 mr-2" />
                <span className="ml-2">Daffi</span>
              </button>
              <button className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
                <img src={icon4} alt="Pera Logo" className="h-6 mr-2" />
                <span className="ml-2">WalletConnect</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
