import React from "react";
import {
  FaBars,
  FaFileAlt,
  FaClock,
  FaList,
  FaTags,
  FaInfoCircle,
  FaFilter,
} from "react-icons/fa";
import pxico from "../Images/pxico.png";

const PixacioSection = () => {
  return (
    <div className="min-h-screen px-4 py-8 md:px-12 lg:px-16 xl:px-24 mt-28">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1400px]">
        
        {/* Left Side */}
        <div className="flex flex-col items-center lg:items-start">
          
          {/* Image */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-[514px] h-[300px] lg:h-[572px]">
            <img
              src={pxico}
              alt="Pixacio Item"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg mt-4 w-full max-w-[546px]">
            <div className="flex items-center mb-2">
              <FaBars className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Description</h3>
            </div>
            <p className="text-gray-600">
              By Stella Nova
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eu feugiat felis.
            </p>
          </div>

          {/* Traits */}
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg mt-4 w-full max-w-[546px]">
            <div className="flex items-center mb-4">
              <FaFileAlt className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Traits</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-100 p-2 md:p-4 rounded-lg text-center">
                  <h4 className="text-sm font-medium">Floor</h4>
                  <p className="text-gray-600">12.75 AUD</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="max-w-[700px]">
          <h1 className="text-3xl font-bold mb-0 mt-4 lg:mt-16">PIXACIO</h1>
          <p className="text-gray-600 font-apex mb-6">Owned by Stella Nova</p>

          {/* Sell Box */}
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg mb-6">
            <div className="flex items-center mb-4">
              <FaClock className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Sale ends 18 November 2023</h3>
            </div>
            <p className="text-gray-600 mb-2">Current Price</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <span className="text-2xl font-bold">5.001 FRY</span>
              <div className="flex gap-4 mt-4 md:mt-0">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Buy Now
                </button>
                <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Make Offer
                </button>
              </div>
            </div>
          </div>

          {/* Listings Box */}
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg mb-6">
            <div className="flex items-center mb-4">
              <FaList className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Listings</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm min-w-[500px]">
                <thead>
                  <tr className="text-gray-600">
                    <th>Price</th>
                    <th>USD Price</th>
                    <th>Quantity</th>
                    <th>From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0.008 FRY</td>
                    <td>$4.25</td>
                    <td>2</td>
                    <td>160D55</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Offers Box */}
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg mb-6">
            <div className="flex items-center mb-4">
              <FaTags className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Offers</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm min-w-[600px]">
                <thead>
                  <tr className="text-gray-600">
                    <th>Price</th>
                    <th>USD Price</th>
                    <th>Quantity</th>
                    <th>Floor Difference</th>
                    <th>From</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map((_, index) => (
                    <tr key={index}>
                      <td>0.008 FRY</td>
                      <td>$4.25</td>
                      <td>2</td>
                      <td>44% below</td>
                      <td>160D55</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Details Box */}
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Details</h3>
            </div>
            <ul className="text-gray-600 text-sm">
              <li>Contract Address: 0x84B8...1713</li>
              <li>Token ID: 7926</li>
              <li>Token Standard: ERC-721</li>
              <li>Chain: Algorand</li>
              <li>Creator Earnings: 6.5%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full Width Item Activity */}
      <div className="bg-white mt-8 p-6 rounded-xl shadow-lg mx-auto max-w-[1320px] w-full overflow-x-auto">
        <div className="flex items-center mb-4">
          <FaList className="text-gray-700 mr-2" />
          <h3 className="text-lg font-bold">Item Activity</h3>
        </div>
        <div className="flex items-center mb-4">
          <FaFilter className="text-gray-700 mr-2" />
          <input type="text" placeholder="Filter activities..." className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <table className="w-full text-left min-w-[800px]">
          <thead>
            <tr className="text-gray-600">
              <th>Event</th>
              <th>Price</th>
              <th>From</th>
              <th>To</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr key={i}>
                <td>List</td>
                <td>0.008 FRY</td>
                <td>294693</td>
                <td>1 days</td>
                <td>1 days ago</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PixacioSection;
