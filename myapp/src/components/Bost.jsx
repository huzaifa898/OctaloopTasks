import React from "react";
import icon from "../Images/icon.png";
import Bost from "../Images/Bost.png";

function BoostNFTSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4 md:px-12 md:py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
        {/* Left Side: Text and Button */}
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl text-black font-bold leading-snug mb-4 md:mb-6">
            BOOST YOUR NFTs: <br /> ENHANCE VISIBILITY <br /> AND VALUE
          </h1>
          <p className="text-base md:text-lg text-black mb-4 md:mb-8">
            The Boost feature is a premium service that allows NFT creators and
            collectors to elevate their listings on our marketplace. By boosting
            an NFT, you can ensure it appears prominently in search results,
            featured sections, and on the homepage, maximizing exposure to
            potential buyers.
          </p>
          {/* Button Adjustments */}
          <div className="flex justify-start">
            <button className="inline-flex items-center px-2 py-1 bg-red-500 text-white text-sm hover:bg-red-600">
              Boost <span className="ml-2">🚀</span>
            </button>
          </div>
        </div>

        {/* Right Side: Images */}
        <div className="relative flex justify-center items-center hidden md:flex">
          {/* Background Glow */}
          <div className="absolute w-full h-full bg-green-500 opacity-20 rounded-full blur-3xl" />

          {/* Card 1: Slightly Left */}
          <div className="absolute top-0 left-[-20px] md:left-[-40px] transform">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              {/* White space for icon and name */}
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={icon} alt="Icon" className="w-8 h-8" />
                <span className="text-black font-semibold">NFT 1 Name</span>
              </div>
              {/* Image */}
              <img
                src={Bost}
                alt="NFT 1"
                className="w-32 md:w-48 h-auto"
              />
              {/* Overlay: Buttons */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center rounded-b-lg">
                <button className="text-sm">In Stock: 7</button>
                <button className="text-sm">Price: 142.02</button>
              </div>
            </div>
          </div>

          {/* Card 2: Right */}
          <div className="absolute top-16 right-[-20px] md:right-[-40px] transform">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              {/* White space for icon and name */}
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={icon} alt="Icon" className="w-8 h-8" />
                <span className="text-black font-semibold">NFT 2 Name</span>
              </div>
              {/* Image */}
              <img
                src={Bost}
                alt="NFT 2"
                className="w-32 md:w-48 h-auto"
              />
              {/* Overlay: Buttons */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center rounded-b-lg">
                <button className="text-sm">In Stock: 5</button>
                <button className="text-sm">Price: 120.50</button>
              </div>
            </div>
          </div>

          {/* Card 3: Align to Card 1, Add more space between 1 and 3 */}
          <div className="absolute bottom-[-40px] md:bottom-[-80px] left-[-20px] md:left-[-40px] transform">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              {/* White space for icon and name */}
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={icon} alt="Icon" className="w-8 h-8" />
                <span className="text-black font-semibold">NFT 3 Name</span>
              </div>
              {/* Image */}
              <img
                src={Bost}
                alt="NFT 3"
                className="w-32 md:w-48 h-28 opacity-90"
              />
              {/* Overlay: Buttons */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center rounded-b-lg">
                <button className="text-sm">In Stock: 3</button>
                <button className="text-sm">Price: 99.99</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoostNFTSection;
