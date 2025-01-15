import React, { useState, useEffect } from 'react';
import logo from '../Images/logo.png';
import mnt from '../Images/mnt.png';
import mnt1 from '../Images/mnt1.png';
import mnt2 from '../Images/mnt2.png';
import mnt3 from '../Images/mnt3.png';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaCheck } from 'react-icons/fa';
function Mntnft() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [showMintButton, setShowMintButton] = useState({});

  const handleImageClick = (image) => {
    if (selectedImages.includes(image)) {
      setSelectedImages(selectedImages.filter((img) => img !== image));
      setShowMintButton((prev) => ({ ...prev, [image]: true }));
      setTimeout(() => {
        setShowMintButton((prev) => ({ ...prev, [image]: false }));
      }, 3000); // Hide button after 3 seconds
    } else {
      setSelectedImages([...selectedImages, image]);
      setShowMintButton((prev) => ({ ...prev, [image]: false }));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <nav className="flex items-center justify-between py-3" style={{ width: '1320px', height: '100px' }}>
        <div className="text-xl font-bold text-red-600">
          <img src={logo} alt="Logo" className="h-10 w-auto md:h-24 md:w-24" />
        </div>
        <ul className="flex space-x-4 md:space-x-6">
          <Link to="/">
            <li className="text-gray-700 hover:text-red-600 font-apex text-bold cursor-pointer">Home</li>
          </Link>
          <li className="text-red-700 text-bold text-xl font-apex cursor-pointer">AI NFT Generation</li>
        </ul>
        <div className="flex space-x-2">
          <FaSignInAlt className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
          <FaUserPlus className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
        </div>
      </nav>
      <div className="flex justify-between items-center mt-4" style={{ width: '1320px', height: '100px' }}>
        <div className="flex items-center">
          <button className="bg-transparent text-gray-700 font-apex px-4 py-2 rounded-lg border border-gray-300">
            Single NFT
          </button>
          <span className="ml-4 text-gray-700 font-apex">4/4 Generated</span>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-gray-700 font-apex">Select NFT to Mint</span>
          <Link to='/nftform'>
          <button className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700">
            Mint NFT
          </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 gap-4" style={{ width: '1320px' }}>
        {[mnt, mnt1, mnt2, mnt3].map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`mnt${index}`}
              className={`w-72 h-64 ${selectedImages.includes(image) ? 'opacity-50' : ''}`}
              onClick={() => handleImageClick(image)}
            />
            {selectedImages.includes(image) && (
              <FaCheck className="absolute top-2 right-2 text-green-500 text-2xl" />
            )}
            {showMintButton[image] && (
              <button
                className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700 mt-4 animate-slide-up"
                style={{ position: 'absolute', bottom: '-50px', left: '50%', transform: 'translateX(-50%)' }}
              >
                Mint NFT
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mntnft;