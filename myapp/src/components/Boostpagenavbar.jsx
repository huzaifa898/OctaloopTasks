
import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
function Boostpagenavbar() {
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
    <div>
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
    </div>
  )
}

export default Boostpagenavbar
