import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import icon from '../Images/icon.png';
import { Link } from 'react-router-dom';

const TopSellers = () => {
  const [sortBy, setSortBy] = useState('volume');
  const sellers = [
    {
      id: "01",
      name: "Jacob Jones",
      avatar: icon,
      volume: "$154.00",
      followers: "100",
      percent: "+237.67%",
      floorPrice: "4,901",
      items: "9.8k",
    },
    {
      id: "02",
      name: "Sarah Smith",
      avatar: icon,
      volume: "$300.00",
      followers: "150",
      percent: "+180.45%",
      floorPrice: "5,500",
      items: "7.8k",
    },
    {
      id: "03",
      name: "John Doe",
      avatar: icon,
      volume: "$100.00",
      followers: "75",
      percent: "+150.67%",
      floorPrice: "4,200",
      items: "6.8k",
    },
  ];

  // Sort the sellers by selected criteria
  const sortedSellers = [...sellers].sort((a, b) => {
    if (sortBy === "volume") {
      return parseFloat(b.volume.replace('$', '').replace(',', '')) - parseFloat(a.volume.replace('$', '').replace(',', ''));
    }
    if (sortBy === "followers") {
      return parseInt(b.followers) - parseInt(a.followers);
    }
    return 0;
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Dropdown for category */}
        <div className="flex justify-between items-center mb-6">
          <select
            className="p-2 border rounded-md w-40 bg-white shadow-sm"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="volume">Volume</option>
            <option value="followers">Followers</option>
            <option value="percent">Percent</option>
          </select>
          <span className="text-sm text-gray-600">Last 30 days</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-transparent">
          <div className="space-y-4">
            {/* Heading row */}
            <div className="w-full bg-gray-200 shadow-md rounded-lg p-4 flex items-center justify-between text-xs sm:text-sm md:text-base">
              <div className="w-1/12 text-center">ID</div>
              <div className="w-2/12 text-left">Name</div>
              <div className="w-1/12 text-center">Volume</div>
              <div className="w-2/12 hidden sm:block text-center">Followers</div>
              <div className="w-1/12 hidden md:block text-center">Percent</div>
              <div className="w-2/12 hidden lg:block text-center">Floor Price</div>
              <div className="w-1/12 text-center">Items</div>
            </div>

            {/* Data rows */}
            {sortedSellers.map((seller, index) => (
              <div
                key={index}
                className="w-full bg-white shadow-md rounded-lg p-4 flex flex-wrap sm:flex-nowrap items-center justify-between text-xs sm:text-sm md:text-base"
              >
                {/* ID */}
                <div className="w-1/12 text-center font-medium">{seller.id}</div>

                {/* Name */}
                <Link
                  to="/jocab"
                  className="w-2/12 flex items-center mb-2 sm:mb-0 text-left truncate"
                >
                  <img
                    src={seller.avatar}
                    alt={seller.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="font-semibold truncate">{seller.name}</span>
                </Link>

                {/* Volume */}
                <div className="w-1/12 text-center">{seller.volume}</div>

                {/* Followers */}
                <div className="w-2/12 hidden sm:block text-center">
                  {seller.followers}
                </div>

                {/* Percent */}
                <div className="w-1/12 hidden md:block text-center text-green-500">
                  {seller.percent}
                </div>

                {/* Floor Price */}
                <div className="w-2/12 hidden lg:flex items-center justify-center space-x-1">
                  <FaEthereum className="text-gray-500" />
                  <span>{seller.floorPrice}</span>
                </div>

                {/* Items */}
                <div className="w-1/12 text-center">{seller.items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
