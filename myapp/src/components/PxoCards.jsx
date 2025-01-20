import React, { useState } from "react";
import { FaDrum, FaChevronDown } from "react-icons/fa"; // Import React icons
import logo from "../Images/logo.png";
import pxocards from "../Images/pxocards.png";
import link1 from "../Images/link1.png";
import link2 from "../Images/link2.png";
import link3 from "../Images/link3.png";
import link4 from "../Images/link4.png";
import Sold from '../components/Sold';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
function PxoCards() {
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

  const dropdownValues = [
    "Popular 15",
    "Price",
    "Background",
    "Clothing",
    "Eye",
    "Body Color",
    "Head",
  ];

  return (
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
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
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

      {/* New Section */}
      <div className="absolute top-[250px] left-[320px] w-[512px] h-[491px] opacity-1">
        <img src={pxocards} alt="Pxo Cards" className="w-full h-full object-cover" />
      </div>

      {/* New Div */}
      <div className="absolute top-[250px] left-[847px] w-[232px] h-[102px] opacity-1">
        <h1 className="font-apex text-[64px] font-normal leading-[102px] tracking-[0.04em] text-left decoration-skip-ink">
          Pixacio
        </h1>
      </div>

      {/* New Boxes */}
      <div className="absolute top-[377px] left-[847px] flex flex-col space-y-4">
        <div className="flex space-x-4">
          <div className="w-[322px] h-[48px] bg-white border border-gray-300 rounded-tl-lg opacity-1 flex justify-between items-center px-4">
            <span className="font-apex text-gray-800">Ite Listed</span>
            <span className="font-apex text-gray-800">4342</span>
          </div>
          <div className="w-[322px] h-[48px] bg-white border border-gray-300 rounded-tl-lg opacity-1 flex justify-between items-center px-4">
            <span className="font-apex text-gray-800">No Of Sold Items </span>
            <span className="font-apex text-gray-800">5322</span>
          </div>
        </div>
        <div className="w-[322px] h-[48px] bg-white border border-gray-300 rounded-tl-lg opacity-1 flex justify-between items-center px-4">
          <span className="font-apex text-gray-800">Vol FRY</span>
          <span className="font-apex text-gray-800">18.5</span>
        </div>
      </div>

      {/* Red Line */}
      <div className="absolute top-[538px] left-[847px] w-[674px] h-0 border-t border-red-500 opacity-1"></div>

      {/* Images */}
      <div className="absolute top-[550px] left-[847px] flex space-x-4">
        <img src={link1} alt="Link 1" className="w-full h-[100px] object-cover" />
        <img src={link2} alt="Link 2" className="w-full h-[100px] object-cover" />
        <img src={link3} alt="Link 3" className="w-full h-[100px] object-cover" />
        <img src={link4} alt="Link 4" className="w-full h-[100px] object-cover" />
      </div>

      {/* Paragraph */}
      <div className="absolute top-[670px] left-[847px] w-[674px]">
        <p className=" text-black text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Delectus asperiores consequatur accusantium maxime dolores,
            voluptates quo quisquam quam nesciunt modi aut. Voluptate
             earum quae beatae illo, qui veritatis quia facere?
        </p>
      </div>

      {/* New Section with Dropdowns */}
      <div className="absolute top-[963px] left-0 w-[292px] h-[600px] bg-white border border-gray-300 rounded-tl-[30px] p-[18px] opacity-1 flex flex-col space-y-4">
        <div className="flex justify-between items-center w-[237.93px] h-[44px]">
          <FaDrum className="w-6 h-6" />
          <FaChevronDown className="w-6 h-6" />
        </div>
        {dropdownValues.map((value, index) => (
          <div key={index} className="flex justify-between items-center w-[237.93px] h-[44px] bg-gray-100 rounded px-2">
            <span className="text-gray-800">{value}</span>
            <FaChevronDown className="w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Sold Cards Section */}
      <div className="absolute top-[800px] left-[02px] w-full h-[411px] opacity-1">
        <Sold heading={false} />
      </div>
      <div className= " absolute top-[1692px] left-[300px]">
        <Footer/>
      </div>
    </div>
  );
}

export default PxoCards;
