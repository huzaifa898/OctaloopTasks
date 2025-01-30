import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../Images/icon1.png';

function Chosecollection() {
  const navigate = useNavigate();
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    navigate('/nftform'); // Redirect to the Nftform page
  };

  const handleSelectClick = (index) => {
    setSelectedCollection(index);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between w-full max-w-screen-xl py-3 px-4">
        <div className="text-xl font-bold text-red-600">
          <img src={logo} alt="Logo" className="h-10 md:h-24 w-auto" />
        </div>
        <ul className="flex space-x-4 md:space-x-6">
          <Link to="/">
            <li className="text-gray-700 hover:text-red-600 font-apex font-bold cursor-pointer">Home</li>
          </Link>
          <li className="text-red-700 font-bold text-lg md:text-xl font-apex cursor-pointer">AI NFT Generation</li>
        </ul>
        <div className="flex space-x-2">
          <FaSignInAlt className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
          <FaUserPlus className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
        </div>
      </nav>

      {/* Back Button (Now Placed Outside the Box) */}
      <div className="w-full max-w-4xl flex justify-start">
        <button
          onClick={handleBackClick}
          className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700 mb-4"
        >
          Back
        </button>
      </div>

      {/* Collection Box */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-black flex flex-col items-center w-full max-w-4xl">
        <h1 className="text-center font-apex text-xl md:text-2xl">
          Choose Collection
        </h1>

        {/* Collection List */}
        <div className="grid grid-cols-1 gap-4 mt-8 w-full max-w-lg">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-gray-100">
              <div className="flex items-center">
                <img src={icon1} alt="Collection" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
                <div className="ml-4">
                  <h2 className="font-apex text-lg">Collection Name {item}</h2>
                  <p className="text-gray-500">Items: {item * 10}</p>
                </div>
              </div>
              <button
                className={`font-apex px-4 py-2 rounded-lg ${
                  selectedCollection === index ? 'bg-red-600 text-white' : 'bg-red-600 text-white hover:bg-red-700'
                }`}
                onClick={() => handleSelectClick(index)}
              >
                Select
              </button>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="mt-6 md:mt-8 bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Chosecollection;
