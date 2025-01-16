import React from "react";
import mnt1 from '../Images/mnt1.png'
import price from '../Images/price.png'
import auction from '../Images/auction.png'
import fry from '../Images/fry.png'
import { Link } from 'react-router-dom';
const PreviewSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-48">
      <div className="flex flex-col md:flex-row w-[1320px] h-[799px] rounded-2xl bg-white shadow-lg overflow-hidden">
        {/* Image Section */}
        <div
          className="relative"
          style={{
            width: '296px',
            height: '309px',
            top: '0px',
            left: '0px',
            gap: '0px',
            borderRadius: '20px 0px 0px 0px',
            opacity: '1',
          }}
        >
          <img
            src={mnt1}
            alt="Preview Item"
            className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl"
          />
          {/* Tag */}
         <div className="font-apex">
              Preiew Your Item
         </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-between w-full md:w-[994px] p-8">
          {/* Title */}
          <h1 className="text-center text-2xl font-apex mb-6">Royal Samurai</h1>
          <p className="font-apex">Select Your Sell Method</p>

          {/* Sell Method */}
          <div className="flex mb-4">
            <button
              className="flex flex-col items-center justify-left"
              style={{
                width: '207.87px',
                height: '217px',
                gap: '0px',
                opacity: '1',
              }}
            >
              <img
                src={price}
                alt="Fixed Price"
                className="w-32 h-32 mb-2"
              />
            </button>
            <button
              className="flex flex-col items-center justify-left"
              style={{
                width: '207.87px',
                height: '217px',
                gap: '0px',
                opacity: '1',
              }}
            >
              <img
                src={auction}
                alt="Auction"
                className="w-32 h-32 mb-2"
              />
            </button>
          </div>

          {/* Price Input */}
          <label htmlFor="schedule" className="block text-lg font-apex mb-2">
              Price
            </label>
          <div className="flex items-center gap-4 mb-6">
            <img
              src={fry}
              alt="Icon"
              className="w-8 h-8"
            />
            <input
              type="text"
              placeholder="Enter price for one item"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Schedule Listing */}
          <div className="mb-6">
            <label htmlFor="schedule" className="block text-lg font-apex mb-2">
              Schedule Listing
            </label>
            <select
              id="schedule"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>1 month</option>
              <option>2 months</option>
              <option>3 months</option>
            </select>
          </div>

          {/* Submit Button */}
          <Link to='/profile'>
          <button className="self-left w-40 py-3 text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg hover:scale-105 transition duration-300">
            Submit
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
