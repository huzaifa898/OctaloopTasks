import React, { useState } from "react";
import Collection from "../Images/collections.png";  // Example image

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
    <div className="flex flex-col items-center justify-center w-full">
      <div
        className="flex flex-col lg:flex-row items-center justify-between w-full px-4 md:px-6 py-10 lg:py-20"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        {/* Tagline */}
        <div className="text-center lg:text-left mb-8 lg:mb-0 w-full lg:w-1/2">
          <h1
            className="font-apex text-red-600 mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            style={{
              fontFamily: "Apex Mk2",
              lineHeight: "1.2",
              letterSpacing: "0.04em",
              textDecorationSkipInk: "none",
            }}
          >
            NFT
          </h1>
          <span
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{
              fontFamily: "Apex Mk2",
              letterSpacing: "0.04em",
              textDecorationSkipInk: "none",
            }}
          >
            COLLECTIONS
          </span>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end mt-16 w-full lg:w-1/2">
          <img
            src={Collection}
            alt="NFT Collection"
            className="w-full h-auto object-contain"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
