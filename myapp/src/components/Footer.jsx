import React from "react";
import { FaTelegram } from "react-icons/fa";
import Logo  from '../Images/logo.png'
function Footer() {
  return (
    <div className="bg-gray-50">
      {/* Email Section */}
      <div className="bg-gradient-to-r from-white via-pink-50 to-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready for Next NFT Drop?</h2>
        <div className="relative max-w-lg mx-auto">
          <input
            type="email"
            placeholder="info@gmail.com"
            className="w-full p-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <button
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-red-700 hover:bg-red-800 text-white p-3 rounded-full shadow-lg transition"
            aria-label="Send"
          >
            <FaTelegram className="text-lg" />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <img
                  src={Logo}
                  alt="Fry Networks Logo"
                  className="h-12 w-12 mr-2"
                />
                <h3 className="text-xl font-semibold">Fry Networks</h3>
              </div>
              <p className="text-sm">
                NFT ALGO is the world's leading NFTs marketplace where you can discover,
                sell and bid NFTs and get rich.
              </p>
              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <a href="#" className="hover:text-gray-200">
                  <FaTelegram className="text-xl" />
                </a>
                <a href="#" className="hover:text-gray-200">
                  <FaTelegram className="text-xl" />
                </a>
                <a href="#" className="hover:text-gray-200">
                  <FaTelegram className="text-xl" />
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-2">About</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About NFT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Live Auctions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Activity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
