import React from 'react';
import Navbar from './Navbar';
import pxico from '../Images/pxico.png';
import Trending from './Trending';
import Footer from './Footer';
function PxoCards() {
  return (
    <div className="bg-gradient-to-b from-white to-pink-200 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col mt-20 md:flex-row items-center justify-center min-h-screen p-4 md:p-8 lg:p-16 gap-8">
        {/* Image Column */}
        <div className="w-full max-w-[521px] h-auto">
          <img
            src={pxico}
            alt="Profile"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-center max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            PIXACIO
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <div className="flex flex-col items-center md:items-start bg-white p-4 rounded-lg shadow-md w-36">
              <span className="text-sm text-gray-500">Items listed</span>
              <span className="text-xl font-semibold text-gray-800">3,027</span>
            </div>
            <div className="flex flex-col items-center md:items-start bg-white p-4 rounded-lg shadow-md w-36">
              <span className="text-sm text-gray-500">Num of Sold Items</span>
              <span className="text-xl font-semibold text-gray-800">120</span>
            </div>
            <div className="flex flex-col items-center md:items-start bg-white p-4 rounded-lg shadow-md w-36">
              <span className="text-sm text-gray-500">Vol FRY</span>
              <span className="text-xl font-semibold text-gray-800">18.5 FRY</span>
            </div>
          </div>

          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <button className="p-2 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300">
              🌐
            </button>
            <button className="p-2 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300">
              🖼️
            </button>
            <button className="p-2 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300">
              🎮
            </button>
            <button className="p-2 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300">
              🔗
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            euismod vulputate ipsum, non molestie magna facilisis a. Cras
            tincidunt sem sed lorem aliquam posuere. Curabitur vel luctus purus,
            in gravida eros ac aliquet facilisis.
          </p>
        </div>
      </div>
           <Trending/>
           <Footer/>
    </div>
  );
}

export default PxoCards;
