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
    <div className='flex flex-col items-center'>
      <nav className="flex items-center justify-between py-3" style={{ width: '1320px', height: '100px' }}>
        <div className="text-xl font-bold text-red-600">
          <img src={logo} alt="Logo" className="h-10 w-auto md:h-24 md:w-24" />
        </div>
        <ul className="flex space-x-4 md:space-x-6">
          <Link to="/">
            <li className="text-gray-700 hover:text-red-600 font-apex font-bold cursor-pointer">Home</li>
          </Link>
          <li className="text-red-700 font-bold text-xl font-apex cursor-pointer">AI NFT Generation</li>
        </ul>
        <div className="flex space-x-2">
          <FaSignInAlt className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
          <FaUserPlus className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
        </div>
      </nav>
      <button
        onClick={handleBackClick}
        className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
        style={{
          width: '126px',
          height: '64px',
          position: 'absolute',
          top: '232px',
          left: '300px',
          gap: '0px',
          opacity: '1',
        }}
      >
        Back
      </button>
      <div
        className="bg-white p-8 rounded-lg shadow-lg border-solid flex flex-col items-center"
        style={{
          width: '1164px',
          height: '730px',
          position: 'absolute',
          top: '232px',
          left: '456px',
          gap: '0px',
          opacity: '1',
          border: '1px solid #000000',
        }}
      >
        <h1
          className="text-center font-apex"
          style={{
            width: '399px',
            height: '48px',
            fontSize: '24px',
            lineHeight: '48px',
            marginTop: '16px',
          }}
        >
          Choose Collection
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8" style={{ width: '628px', height: '91px', top: '388px', left: '723px', gap: '0px', opacity: '1' }}>
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-gray-100 mb-4">
              <div className="flex items-center">
                <img src={icon1} alt="Collection" className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h2 className="font-apex text-lg">Collection Name {item}</h2>
                  <p className="text-gray-500">Items: {item * 10}</p>
                </div>
              </div>
              <button
                className={`font-apex px-4 py-2 rounded-lg ${selectedCollection === index ? 'bg-red-600 text-white' : 'bg-red-600 text-white hover:bg-red-700'}`}
                onClick={() => handleSelectClick(index)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700 mt-8"
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '32px',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Chosecollection;
