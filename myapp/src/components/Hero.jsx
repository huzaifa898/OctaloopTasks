import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Logo from '../Images/logo.png';
import Hero from '../Images/Hero.png';
import ppl from '../Images/ppl.png';
import wallet from '../Images/wallet.png';
import imgee from '../Images/imgee.png';
import imgee2 from '../Images/imgee2.png';
import imgee3 from '../Images/imgee3.png';
import imgee4 from '../Images/imgee4.png';
import imgee5 from '../Images/imgee5.png';
//import imgee6 from '../Images/imgee6.png';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showStyles, setShowStyles] = useState(false);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [nftType, setNftType] = useState('Single NFT');
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

  const handleAddStylesClick = () => {
    setShowStyles(true);
  };

  const handleCloseStylesClick = () => {
    setShowStyles(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setShowForm(false);
      setShowStyles(false);
    }
  };

  const handleStyleSelect = (style) => {
    setSelectedStyles((prevSelectedStyles) => {
      if (prevSelectedStyles.includes(style)) {
        return prevSelectedStyles.filter((s) => s !== style);
      } else {
        return [...prevSelectedStyles, style];
      }
    });
  };

  const handleConfirmClick = () => {
    if (nftType === 'Collection') {
      navigate('/collection');
    } else {
      navigate('/mntnft');
    }
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
      <div className="flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0 md:space-x-4 mx-auto max-w-full mt-8">
        {/* Single NFT Dropdown */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-md w-full max-w-xs">
          <select
            className="bg-transparent outline-none text-gray-700 font-apex cursor-pointer w-full"
            value={nftType}
            onChange={(e) => setNftType(e.target.value)}
          >
            <option>Single NFT</option>
            <option>Collection</option>
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
        <button
          className="flex items-center bg-gray-100 rounded-lg p-2 shadow-md space-x-2"
          onClick={handleAddStylesClick}
        >
          <span className="text-gray-700 font-apex">Add Styles</span>
          <FaPlus className="text-gray-700" />
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay" onClick={handleOutsideClick}>
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
                <button
                  type="button"
                  className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
                  onClick={handleConfirmClick}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Styles Modal */}
      {showStyles && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto modal-overlay" onClick={handleOutsideClick}>
          <div className="bg-white p-8 rounded-lg shadow-lg relative" style={{ width: '504px', height: '1400px', gap: '0px', opacity: '1' }}>
            <h2 className="text-2xl text-center text-black mt-52 font-apex mb-4">Select Styles</h2>
            
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600"
              onClick={handleCloseStylesClick}
            >
              &times;
            </button>
            <div className="grid grid-cols-2 gap-4 ">
              {/* Square for None Style */}
              <div className={`w-[211px] h-[238px] bg-gray-200 rounded-lg flex items-center justify-center mt-8 ${selectedStyles.includes('None') ? 'border-4 border-red-500' : ''}`} onClick={() => handleStyleSelect('None')}>
                <span className="text-gray-700 font-apex">None</span>
                {selectedStyles.includes('None') && <span className="absolute text-red-500 font-apex">Selected</span>}
              </div>
              {/* Square for Cartoon Style */}
              <div className={`w-[211px] h-[238px] bg-gray-200 rounded-lg flex flex-col items-center justify-center mt-8 ${selectedStyles.includes('Cartoon') ? 'border-4 border-red-500' : ''}`} onClick={() => handleStyleSelect('Cartoon')}>
                <img
                  src={imgee}
                  alt="Cartoon Style"
                  className="w-[201px] h-[179px] rounded-[15px_0px_0px_0px]"
                />
                <button
                  className="w-[201px] h-[44px] bg-white text-black font-apex rounded-[8px_0px_0px_0px] mt-2"
                >
                  Cartoon
                </button>
                {selectedStyles.includes('Cartoon') && <span className="absolute text-red-500 font-apex">Selected</span>}
              </div>
              {/* Additional Boxes */}
               <div className={`w-[211px] h-[238px] bg-gray-200 rounded-lg flex flex-col items-center justify-center ${selectedStyles.includes('Style 2') ? 'border-4 border-red-500' : ''}`} onClick={() => handleStyleSelect('Style 2')}>
                <img
                  src={imgee2}
                  alt="Style 2"
                  className="w-[201px] h-[179px] rounded-[15px_0px_0px_0px]"
                />
                <button
                  className="w-[201px] h-[44px] bg-white text-black font-apex rounded-[8px_0px_0px_0px] mt-2"
                >
                  Style 2
                </button>
                {selectedStyles.includes('Style 2') && <span className="absolute text-red-500 font-apex">Selected</span>}
              </div>
              <div className={`w-[211px] h-[238px] bg-gray-200 rounded-lg flex flex-col items-center justify-center ${selectedStyles.includes('Style 3') ? 'border-4 border-red-500' : ''}`} onClick={() => handleStyleSelect('Style 3')}>
                <img
                  src={imgee3}
                  alt="Style 3"
                  className="w-[201px] h-[179px] rounded-[15px_0px_0px_0px]"
                />
                <button
                  className="w-[201px] h-[44px] bg-white text-black font-apex rounded-[8px_0px_0px_0px] mt-2"
                >
                  Style 3
                </button>
                {selectedStyles.includes('Style 3') && <span className="absolute text-red-500 font-apex">Selected</span>}
              </div>
              <div className={`w-[211px] h-[238px] bg-gray-200 rounded-lg flex flex-col items-center justify-center ${selectedStyles.includes('Style 4') ? 'border-4 border-red-500' : ''}`} onClick={() => handleStyleSelect('Style 4')}>
                <img
                  src={imgee4}
                  alt="Style 4"
                  className="w-[201px] h-[179px] rounded-[15px_0px_0px_0px]"
                />
                <button
                  className="w-[201px] h-[44px] bg-white text-black font-apex rounded-[8px_0px_0px_0px] mt-2"
                >
                  Style 4
                </button>
                {selectedStyles.includes('Style 4') && <span className="absolute text-red-500 font-apex">Selected</span>}
              </div>
              <div className={`w-[211px] h-[238px] bg-gray-200 rounded-lg flex flex-col items-center justify-center ${selectedStyles.includes('Style 5') ? 'border-4 border-red-500' : ''}`} onClick={() => handleStyleSelect('Style 5')}>
                <img
                  src={imgee5}
                  alt="Style 5"
                  className="w-[201px] h-[179px] rounded-[15px_0px_0px_0px]"
                />
                <button
                  className="w-[201px] h-[44px] bg-white text-black font-apex rounded-[8px_0px_0px_0px] mt-2"
                >
                  Style 5
                </button>
                {selectedStyles.includes('Style 5') && <span className="absolute text-red-500 font-apex">Selected</span>}
              </div>
              <div className={`w-[211px] h-[238px] bg-gray-200 rounded-lg flex flex-col items-center justify-center ${selectedStyles.includes('Style 6') ? 'border-4 border-red-500' : ''}`} onClick={() => handleStyleSelect('Style 6')}>
                <img
                  src={imgee}
                  alt="Style 6"
                  className="w-[201px] h-[179px] rounded-[15px_0px_0px_0px]"
                />
                <button
                  className="w-[201px] h-[44px] bg-white text-black font-apex rounded-[8px_0px_0px_0px] mt-2"
                >
                  Style 6
                </button>
                {selectedStyles.includes('Style 6') && <span className="absolute text-red-500 font-apex">Selected</span>}
              </div> 
            </div>
            <div className="flex justify-end mt-8">
              <button
                className="bg-red-600 text-white  font-apex px-4 py-2 rounded-lg hover:bg-red-700"
                onClick={handleCloseStylesClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
