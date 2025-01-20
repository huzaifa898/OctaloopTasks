import React, { useState } from "react";
import logo from "../Images/logo.png";
import jocabImage from "../Images/jocab.png"; // Import the image
import cardImage1 from "../Images/card1.png"; // Import card images
import cardImage2 from "../Images/card2.png";
import cardImage3 from "../Images/card3.png";
import Footer from "./Footer"; // Import the Footer component
import { Link } from "react-router-dom";

function Jocab() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const cards = [
    { name: "ART WORK", items: "Item 1.5k", image: cardImage1 },
    { name: "ART WORK", items: "Item 1.5k", image: cardImage2 },
    { name: "ART WORK", items: "Item 1.5k", image: cardImage3 },
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
            <Link to={"/nft"}>
              <li className="hover:text-red-500 font-apex cursor-pointer">
                AI NFT Generation
              </li>
            </Link>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-3 lg:space-x-4">
            <button className="bg-red-500 text-white w-[150px] h-[45px] lg:w-[200px] lg:h-[50px] rounded-md font-apex hover:bg-red-600">
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
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
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
          </ul>
        </div>
      </div>

      {/* Content */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          width: "755px",
          height: "186px",
          gap: "0px",
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h1
          className="font-apex"
          style={{
            fontFamily: "Apex Mk2",
            color:"red",
            fontSize: "96px",
            fontWeight: "700",
            lineHeight: "115.2px",
            letterSpacing: "0.04em",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          JOCAB
        </h1>
        <span
          style={{
            fontFamily: "Apex Mk2",
            fontSize: "64px",
            fontWeight: "700",
            lineHeight: "76.8px",
            letterSpacing: "0.04em",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          COLLECTION
        </span>
      </div>

      {/* Image */}
      <img
        src={jocabImage}
        alt="Jocab"
        style={{
          width: "1320px",
          height: "631px",
          top: "317px",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
          gap: "0px",
          opacity: "0px",
        }}
      />

      {/* New Section */}
      <div
        className="absolute"
        style={{
          width: "414px",
          height: "77px",
          top: "1103px",
          left: "300px",
          gap: "0px",
          opacity: "0px",
        }}
      >
        <h2
          style={{
            fontFamily: "Apex Mk2",
            fontSize: "64px",
            fontWeight: "400",
            lineHeight: "76.8px",
            letterSpacing: "0.04em",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Collection
        </h2>
      </div>

      {/* Cards Section */}
      <div
        className="absolute grid grid-cols-1 md:grid-cols-3 gap-0"
        style={{
          width: "1319px",
          height: "1230px",
          top: "1215px",
          left: "300px",
          gap: "0px",
          borderRadius: "15px 0px 0px 0px",
          opacity: "0px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
            style={{
              width: "417px",
              height: "285px",
              borderRadius: "15px 0px 0px 0px",
              opacity: "0px",
              
            }}
          >
            <div className="p-4">
              <h3
                style={{
                  fontFamily: "Apex Mk2",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "28.8px",
                  letterSpacing: "0.04em",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {card.name}
              </h3>
              <p
                style={{
                  fontFamily: "Apex Mk2",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "21.6px",
                  letterSpacing: "0.04em",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {card.items}
              </p>
            </div>
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="absolute"
        style={{
          width: "1320px",
          height: "532px",
          top: "2660px",
          left: "300px",
          gap: "0px",
          opacity: "0px",
         
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default Jocab;