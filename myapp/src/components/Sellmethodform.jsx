import React from "react";
import mnt1 from "../Images/mnt1.png";
import price from "../Images/price.png";
import auction from "../Images/auction.png";
import fry from "../Images/fry.png";
import { Link } from "react-router-dom";

const PreviewSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-16 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-[1320px] h-auto md:h-[799px] rounded-2xl bg-white shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full md:w-[296px] h-[309px] md:h-auto bg-gray-200">
          <img
            src={mnt1}
            alt="Preview Item"
            className="w-full h-50 object-cover rounded-t-2xl md:rounded-l-2xl"
          />
          {/* Tag */}
          <div className="absolute bottom-4 left-4 bg-white text-black text-sm md:text-base font-apex px-4 py-1 rounded-lg shadow-lg">
            Preview Your Item
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-between w-full p-6 md:p-8">
          {/* Title */}
          <h1 className="text-center text-xl md:text-2xl font-apex mb-6">
            Royal Samurai
          </h1>
          <p className="font-apex text-lg mb-4">Select Your Sell Method</p>

          {/* Sell Method */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Fixed Price */}
            <button className="flex flex-col items-center justify-center w-full md:w-[208px] h-[217px] bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <img
                src={price}
                alt="Fixed Price"
                className="w-16 h-16 md:w-32 md:h-32 mb-2"
              />
              <p className="font-apex text-base">Fixed Price</p>
            </button>

            {/* Auction */}
            <button className="flex flex-col items-center justify-center w-full md:w-[208px] h-[217px] bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <img
                src={auction}
                alt="Auction"
                className="w-16 h-16 md:w-32 md:h-32 mb-2"
              />
              <p className="font-apex text-base">Auction</p>
            </button>
          </div>

          {/* Price Input */}
          <label htmlFor="price" className="block text-lg font-apex mb-2">
            Price
          </label>
          <div className="flex items-center gap-4 mb-6">
            <img src={fry} alt="Icon" className="w-8 h-8" />
            <input
              id="price"
              type="text"
              placeholder="Enter price for one item"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Schedule Listing */}
          <label htmlFor="schedule" className="block text-lg font-apex mb-2">
            Schedule Listing
          </label>
          <select
            id="schedule"
            className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option>1 month</option>
            <option>2 months</option>
            <option>3 months</option>
          </select>

          {/* Submit Button */}
          <Link to="/profile">
            <button className="w-full md:w-40 py-3 text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg hover:scale-105 transition duration-300">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
