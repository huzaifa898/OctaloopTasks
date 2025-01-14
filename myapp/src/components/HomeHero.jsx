import React, { useState } from 'react';
import hero1 from '../Images/hero1.png';
import heroimg2 from '../Images/heroimg2.png';
import heroimg3 from '../Images/heroimg3.png';
import heroimg4 from '../Images/heroimg4.png';
import heroimg5 from '../Images/heroimg5.png';
import hands from '../Images/hands.png';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import icon4 from "../Images/icon4.png";
import './HomeHero.css'; // Import the CSS file

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

      {/* Heading and Tagline */}
      <div className="absolute text-center" style={{ top: "20%", left: "50%", transform: "translateX(-50%)" }}>
        <h1 className="font-apex text-[96px] font-normal leading-[102px] tracking-[0.04em] text-center  decoration-skip-ink" style={{ marginBottom: '20px' }}>
          DISCOVER, CREATE & <br /> SELL ARTWORKS.
        </h1>
        <p className="font-apex text-[18px] font-light leading-[21.09px] tracking-[0.03em] text-center decoration-skip-ink" style={{ marginBottom: '40px' }}>
          Discover and trade unique digital art pieces on our NFT website, where creativity meets blockchain technology.
        </p>
      </div>

      {/* Hero Section */}
      <div
        className="absolute flex items-center justify-center mt-20"
        style={{
          width: "921.14px",
          height: "410.96px",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          gap: "0px",
          opacity: "0px",
        }}
      >
        <div className="absolute w-[800px] h-[400px] bg-red-500 opacity-30 shadow-lg" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", filter: "blur(100px)", marginTop: '20px' }}></div>
        <div className="absolute transform -rotate-4 left-[-60px] top-[42px] w-[225.69px] h-[300.71px] animate-left-right" style={{ marginTop: '20px' }}>
          <img
            src={heroimg3}
            alt="Hero Image 3"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
        <div className="absolute transform -rotate-4 left-[80px] top-[19.04px] w-[266.67px] h-[355.31px] animate-left-right" style={{ marginTop: '20px' }}>
          <img
            src={heroimg4}
            alt="Hero Image 4"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
        <img
          src={hero1}
          alt="Hero Image 1"
          className="relative z-20 rounded-lg w-[308.36px] h-[410.96px] animate-up-down"
          style={{
            left: "0px",
            gap: "0px",
            opacity: "0px",
            marginLeft: "-40px",
            marginRight: "-40px",
            marginTop: '20px',
          }}
        />
        <div className="absolute transform rotate-4 right-[70px] top-[19.04px] w-[266.67px] h-[355.31px] z-10 animate-right-left" style={{ marginTop: '20px' }}>
          <img
            src={heroimg2}
            alt="Hero Image 2"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
        <div className="absolute transform rotate-4 right-[-90px] top-[42px] w-[225.69px] h-[300.71px] z-0 animate-right-left" style={{ marginTop: '20px' }}>
          <img
            src={heroimg5}
            alt="Hero Image 5"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
      </div>

      {/* Background Hands Image */}
      <img
        src={hands}
        alt="Hands Background"
        className="absolute bottom-0 w-full h-auto opacity-1 z-0"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "1920px",
          maxHeight: "1080px",
          bottom: "-170px", // Adjust this value to move the image down
        }}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-80 relative">
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
