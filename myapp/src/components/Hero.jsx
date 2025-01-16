import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Logo from '../Images/logo.png';
import Hero from '../Images/Hero.png';
import ppl from '../Images/ppl.png';
import wallet from '../Images/wallet.png';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    setShowForm(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  const handlePplClick = () => {
    navigate('/userprofile');
  };

  return (
    <div className="min-h-screen font-apex relative">
      {/* Hero Section */}
      <div className="px-4 py-4 md:px-6 md:py-4">
        {/* Navbar */}
        <nav className="flex items-center justify-between py-3 md:justify-evenly md:space-x-80">
          <div className="text-xl font-bold text-red-600">
            <img src={Logo} alt="Logo" className="h-10 w-auto md:h-24 md:w-24" />
          </div>
          <ul className="flex space-x-4 md:space-x-6">
            <Link to="/">
              <li className="text-gray-700 hover:text-red-600 font-apex text-bold cursor-pointer">Home</li>
            </Link>
            <li className="text-red-700 text-bold text-xl font-apex cursor-pointer">AI NFT Generation</li>
          </ul>
          <div className="flex space-x-2">
           
            <img src={wallet} alt="Wallet Icon" className="h-10 w-10 cursor-pointer" />
            <img src={ppl} alt="People Icon" className="h-10 w-10 cursor-pointer" onClick={handlePplClick} />
          </div>
        </nav>

        {/* Tagline */}
        <div className="text-center mt-8">
          <h1 className="text-2xl font-apex text-gray-800 md:text-4xl">
            CREATE YOUR OWN <span className="text-red-600">MASTERPIECE</span>
          </h1>
        </div>

        {/* Centered Image */}
        <div className="flex justify-center items-center mt-6 mx-auto max-w-full h-auto">
          <img
            className="rounded-lg shadow-md w-full h-auto object-contain md:w-[1320px] md:h-[496px] max-h-[400px] sm:max-h-[350px] lg:max-h-[496px]"
            src={Hero}
            alt="NFT"
          />
        </div>

        <div className="text-center font-apex mt-4">Get OnBoard And Earn Money Like Pro</div>
      </div>

      {/* Search Bar */}
      <div className="mt-8 px-4 md:px-6">
        <div className="bg-gray-100 rounded-lg font-apex flex items-center p-4 shadow-md h-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="flex-grow bg-transparent outline-none text-gray-700"
          />
          <button
            className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
            onClick={handleGenerateClick}
          >
            Generate
          </button>
        </div>
      </div>

      {/* Dropdowns and Add Styles Button */}
      <br />
      <div className="flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0 md:space-x-4 mx-auto max-w-full">
        {/* Single NFT Dropdown */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-md w-full max-w-xs">
          <select className="bg-transparent outline-none text-gray-700 font-apex cursor-pointer w-full">
            <option>Single NFT</option>
            <option>Batch NFT</option>
          </select>
        </div>

        {/* Supply Input */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-apex">Supply</span>
          <input
            type="number"
            defaultValue="10"
            className="bg-gray-100 rounded-lg p-2 outline-none shadow-md w-16 text-center"
          />
        </div>

        {/* Add Styles Button */}
        <button className="flex items-center bg-gray-100 rounded-lg p-2 shadow-md space-x-2">
          <span className="text-gray-700 font-apex">Add Styles</span>
          <FaPlus className="text-gray-700" />
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative" style={{ width: '353px', gap: '0px', borderRadius: '8px', opacity: '1' }}>
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600"
              onClick={handleCloseClick}
            >
              &times;
            </button>
            <h2 className="text-2xl text-center font-apex mb-4">Generate NFT</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-apex mb-2">Type</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Single NFT</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-apex mb-2">Prompt</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  style={{ height: '140px', borderRadius: '8px' }}
                ></textarea>
              </div>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg" style={{ width: '100%', height: '91px', padding: '14px 25px', gap: '10px', borderRadius: '8px', opacity: '1' }}>
                <h3 className="text-gray-700 font-apex mb-2">Payment Methods</h3>
                <div className="flex gap-2">
                  <img src="/path/to/payment-method1.png" alt="Payment Method 1" className="w-8 h-8" />
                  <img src="/path/to/payment-method2.png" alt="Payment Method 2" className="w-8 h-8" />
                  <img src="/path/to/payment-method3.png" alt="Payment Method 3" className="w-8 h-8" />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Link to='/mntnft'>
                <button
                  type="submit"
                  className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Confirm
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
