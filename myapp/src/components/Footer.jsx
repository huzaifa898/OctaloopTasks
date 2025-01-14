import React from "react";
import {
  FaTelegram,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaTiktok,
} from "react-icons/fa";
import Logo from "../Images/logo.png";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Email Section */}
      <div className="text-center py-12 px-4 ">
        <h2 className="text-2xl md:text-3xl font-apex mb-6">
          Ready for the Next NFT Drop?
        </h2>
        <div className="relative max-w-lg mx-auto">
          <input
            type="email"
            placeholder="info@gmail.com"
            className="w-full p-4 rounded-xl text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
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
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-10 rounded mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center">
            <img
              src={Logo}
              alt="Fry Networks Logo"
              className="w-16 h-16 md:w-20 md:h-20 mb-4"
            />
          </div>

          {/* Column 2: Description & Social Media Links */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-apex mb-4">Fry Networks</h3>
            <p className="text-sm md:text-base font-apex mb-4">
              NFT ALGO is the world's leading NFTs marketplace where you can{" "}
              <br className="hidden md:block" />
              discover, sell and bid NFTs and get rich.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="hover:text-gray-200">
                <FaTelegram className="text-lg md:text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaTwitter className="text-lg md:text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaLinkedin className="text-lg md:text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaInstagram className="text-lg md:text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaYoutube className="text-lg md:text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaDiscord className="text-lg md:text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaTiktok className="text-lg md:text-xl" />
              </a>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="text-center">
            <h4 className="text-lg font-apex mb-2">About</h4>
            <ul className="text-sm md:text-base space-y-2">
              <li>
                <a href="#" className="hover:underline font-apex">
                  About NFT
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-apex">
                  Live Auctions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-apex">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-apex">
                  Activity
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
