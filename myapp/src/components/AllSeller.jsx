import React from "react";
import { FaEthereum } from "react-icons/fa";
import icon from '../Images/icon.png';

const TopSellers = () => {
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
      name: "Jacob Jones",
      avatar: "https://via.placeholder.com/40",
      volume: "$154.00",
      followers: "130",
      percent: "+237.67%",
      floorPrice: "4,901",
      items: "9.8k",
    },
    {
      id: "03",
      name: "Jacob Jones",
      avatar: "https://via.placeholder.com/40",
      volume: "$154.00",
      followers: "75",
      percent: "+237.67%",
      floorPrice: "4,901",
      items: "9.8k",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Dropdown for category */}
        <div className="flex justify-between items-center mb-6">
          <select className="p-2 border rounded-md w-40">
            <option>Category</option>
          </select>
          <span>Last 30 days</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-transparent">
          <div className="space-y-4">
            {/* Heading row */}
            <div className="w-full bg-gray-200 shadow-md rounded-lg p-4 flex items-center justify-between text-xs sm:text-sm md:text-base">
              <div>ID</div>
              <div>Name</div>
              <div>Volume</div>
              <div className="hidden sm:block">Followers</div>
              <div className="hidden md:block">Percent</div>
              <div className="hidden lg:block">Floor Price</div>
              <div>Items</div>
            </div>

            {/* Data rows */}
            {sellers.map((seller, index) => (
              <div
                key={index}
                className="w-full bg-white shadow-md rounded-lg p-4 flex flex-wrap sm:flex-nowrap items-center justify-between text-xs sm:text-sm md:text-base"
              >
                {/* ID and Name */}
                <div className="flex items-center mb-2 sm:mb-0 w-full sm:w-auto">
                  <span className="font-medium pr-2">{seller.id}</span>
                  <img
                    src={seller.avatar}
                    alt={seller.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="font-semibold">{seller.name}</span>
                </div>

                {/* Volume */}
                <div className="text-center w-1/3 sm:w-auto">{seller.volume}</div>

                {/* Followers */}
                <div className="hidden sm:block text-center">{seller.followers}</div>

                {/* Percent */}
                <div className="hidden md:block text-center text-green-500">{seller.percent}</div>

                {/* Floor Price */}
                <div className="hidden lg:flex items-center justify-center space-x-1">
                  <FaEthereum className="text-gray-500" />
                  <span>{seller.floorPrice}</span>
                </div>

                {/* Items */}
                <div className="text-center w-1/3 sm:w-auto">{seller.items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
