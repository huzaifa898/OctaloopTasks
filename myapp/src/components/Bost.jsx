import React from "react";
import icon from "../Images/icon.png";
import Bost from "../Images/Bost.png";

function BoostNFTSection() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-12 py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Text and Button */}
        <div className="text-white flex flex-col justify-center">
  <h1 className="text-5xl text-black font-bold leading-snug mb-6">
    BOOST YOUR NFTs: <br /> ENHANCE VISIBILITY <br /> AND VALUE
  </h1>
  <p className="text-lg text-black mb-8">
    The Boost feature is a premium service that allows NFT creators and
    collectors to elevate their listings on our marketplace. By boosting
    an NFT, you can ensure it appears prominently in search results,
    featured sections, and on the homepage, maximizing exposure to
    potential buyers.
  </p>
  {/* Button Adjustments */}
  <div className="flex justify-start"> {/* Ensures button is aligned to the left */}
    <button className="inline-flex items-center px-2 py-1 bg-red-500 text-white text-sm hover:bg-red-600">
      Boost <span className="ml-2">🚀</span>
    </button>
  </div>
</div>


        {/* Right Side: Images */}
        <div className="relative flex justify-center items-center">
          {/* Background Glow */}
          <div className="absolute w-full h-full bg-green-500 opacity-20 rounded-full blur-3xl" />

          {/* Card 1: Slightly Left */}
          <div className="absolute top-0 left-[-40px] transform">
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
                className="w-48 h-auto " // Reduced opacity
              />
              {/* Overlay: Buttons */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center rounded-b-lg">
                <button className="text-sm">In Stock: 7</button>
                <button className="text-sm">Price: 142.02</button>
              </div>
            </div>
          </div>

          {/* Card 2: Right */}
          <div className="absolute top-16 right-[-40px] transform">
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
                className="w-48 h-auto" // Reduced opacity
              />
              {/* Overlay: Buttons */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center rounded-b-lg">
                <button className="text-sm">In Stock: 5</button>
                <button className="text-sm">Price: 120.50</button>
              </div>
            </div>
          </div>

          {/* Card 3: Align to Card 1, Add more space between 1 and 3 */}
          <div className="absolute bottom-[-80px] left-[-40px] transform"> {/* Increased bottom margin */}
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
                className="w-48 h-28   opacity-90" // Reduced opacity
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
