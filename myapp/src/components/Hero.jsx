import React from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import Logo from '../Images/logo.png';
import Hero from '../Images/Hero.png';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="px-4 py-4 md:px-6 md:py-4">
        {/* Navbar */}
        <nav
          className="flex items-center justify-between py-3 md:justify-evenly md:space-x-80"
          style={{ width: '100%', margin: '0 auto' }}
        >
          <div className="text-xl font-bold text-red-600">
            <img src={Logo} alt="Logo" className="h-10 w-auto md:h-100px md:w-99.7px" />
          </div>
          <ul className="flex space-x-4 md:space-x-6">
            <li className="text-gray-700 hover:text-red-600 text-bold cursor-pointer">Home</li>
            <li className="text-red-700 text-bold text-xl cursor-pointer">AI NFT Generation</li>
          </ul>
          <div className="flex space-x-2">
            <FaSignInAlt className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
            <FaUserPlus className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
          </div>
        </nav>

        {/* Tagline */}
        <div
          className="text-center mt-8"
          style={{ width: '100%', margin: '0 auto' }}
        >
          <h1 className="text-2xl font-bold text-gray-800 md:text-4xl">
            CREATE YOUR OWN <span className="text-red-600">MASTERPIECE</span>
          </h1>
        </div>

        {/* Centered Image */}
        <div
          className="flex justify-center mt-6"
          style={{ width: '100%', margin: '0 auto' }}
        >
          <img className="rounded-lg shadow-md w-full h-auto object-cover md:w-1320 md:h-496" src={Hero} alt="NFT" />
        </div>
        <div className="text-center mt-4">Get OnBoard And Earn Money Like Pro</div>
      </div>

      {/* Search Bar */}
      <div
        className="mt-8 px-4 md:px-6"
        style={{ width: '100%', margin: '0 auto' }}
      >
        <div className="bg-gray-100 rounded-lg flex items-center p-4 shadow-md h-full">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="flex-grow bg-transparent outline-none text-gray-700"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Generate
          </button>
        </div>
      </div>

      {/* Dropdowns and Add Styles Button */}
      <br />
      <div
        className="flex justify-evenly items-center space-x-4"
        style={{ width: '100%', margin: '0 auto' }}
      >
        {/* Single NFT Dropdown */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-md">
          <select className="bg-transparent outline-none text-gray-700 cursor-pointer">
            <option>Single NFT</option>
            <option>Batch NFT</option>
          </select>
        </div>

        {/* Supply Input */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Supply</span>
          <input
            type="number"
            defaultValue="10"
            className="bg-gray-100 rounded-lg p-2 outline-none shadow-md w-16 text-center"
          />
        </div>

        {/* Add Styles Button */}
        <button className="flex items-center bg-gray-100 rounded-lg p-2 shadow-md space-x-2">
          <span className="text-gray-700">Add Styles</span>
          <FaPlus className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}

export default App;
