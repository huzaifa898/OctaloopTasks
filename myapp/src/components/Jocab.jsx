import React, { useState } from "react";
import logo from "../Images/logo.png";
import jocabImage from "../Images/jocab.png";
import cardImage1 from "../Images/card1.png";
import cardImage2 from "../Images/card2.png";
import cardImage3 from "../Images/card3.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Jocab() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const cards = [
    { name: "ART WORK", items: "Item 1.5k", image: cardImage1 },
    { name: "ART WORK", items: "Item 1.5k", image: cardImage2 },
    { name: "ART WORK", items: "Item 1.5k", image: cardImage3 },
    { name: "ART WORK", items: "Item 1.5k", image: cardImage1 },
    { name: "ART WORK", items: "Item 1.5k", image: cardImage2 },
    { name: "ART WORK", items: "Item 1.5k", image: cardImage3 },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      {/* Navbar */}
      <div className="absolute top-5 left-0 w-full z-20">
        <nav className="flex justify-between items-center px-4 py-2 mx-auto w-full max-w-screen-xl lg:px-8">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-20 sm:w-16 sm:h-24 object-contain"
            />
          </div>
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 font-medium">
            <li className="hover:text-red-500 font-apex text-bold text-red-600 underline cursor-pointer">
              Home
            </li>
            <Link to={"/nft"}>
              <li className="hover:text-red-500 font-apex cursor-pointer">
                AI NFT Generation
              </li>
            </Link>
          </ul>
          <div className="hidden md:flex space-x-3 lg:space-x-4">
            <button className="bg-red-500 text-white w-36 h-12 lg:w-48 lg:h-14 rounded-md font-apex hover:bg-red-600">
              Connect Wallet
            </button>
            <Link to="/nft">
              <button className="border font-apex border-red-500 text-red-500 w-36 h-12 lg:w-48 lg:h-14 rounded-md hover:bg-red-500 hover:text-white">
                Create NFT
              </button>
            </Link>
          </div>
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
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-30`}
        >
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
          </ul>
        </div>
      </div>

      {/* Jocab Collection Title */}
      <div className="text-center mt-20 px-4 sm:mt-36">
        <h1 className="font-apex text-red-500 text-5xl sm:text-6xl lg:text-7xl font-extrabold">
          JOCAB
        </h1>
        <span className="font-apex text-3xl sm:text-4xl lg:text-5xl font-bold">
          COLLECTION
        </span>
      </div>

      {/* Image */}
      <img
        src={jocabImage}
        alt="Jocab"
        className="w-full max-w-screen-lg mt-8 rounded-lg shadow-md"
      />

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 max-w-screen-xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="p-4">
              <h3 className="font-apex text-lg font-bold">{card.name}</h3>
              <p className="font-apex text-sm text-gray-600">{card.items}</p>
            </div>
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Jocab;
