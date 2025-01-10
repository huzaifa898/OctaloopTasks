import React from "react";
import { FaEthereum } from "react-icons/fa"; // Example for Floor Price icon
import icon from '../Images/icon.png'
const TopSellers = () => {
  const sellers = [
    {
      id: "01",
      name: "Jacob Jones",
      avatar: icon, // Replace with actual avatar URLs
      volume: "$154.00",
      followers: "100",
      percent: "+237.67%",
      floorPrice: "4,901",
      items: "9.8k",
    },
    {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
        volume: "$154.00",
        followers: "100",
        percent: "+237.67%",
        floorPrice: "4,901",
        items: "9.8k",
      },
      {
        id: "01",
        name: "Jacob Jones",
        avatar: icon, // Replace with actual avatar URLs
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
    // Add more rows as needed to match your data
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        padding: "20px",
      }}
    >
      <div className="w-full max-w-6xl">
        {/* Dropdown for category */}
        <div className="flex justify-between items-center mb-6">
          <select
            className="p-2 border rounded-md"
            style={{ width: "150px" }}
          >
            <option>Category</option>
            {/* Add more categories if needed */}
          </select>
          <span>Last 30 days</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-transparent">
          <div className="space-y-6"> {/* Added space between rows */}
            {/* Heading row */}
            <div
              className="w-full bg-gray-200 shadow-md rounded-lg p-4 flex items-center justify-between"
              style={{
                height: "80px", // Uniform height for the heading row
                gap: "10px", // Ensure spacing between columns if necessary
              }}
            >
              <div className="font-semibold">ID</div>
              <div className="font-semibold">Name</div>
              <div className="font-semibold">Volume</div>
              <div className="font-semibold">Followers</div>
              <div className="font-semibold">Percent</div>
              <div className="font-semibold">Floor Price</div>
              <div className="font-semibold">Items</div>
            </div>

            {/* Data rows */}
            {sellers.map((seller, index) => (
              <div
                key={index}
                className="w-full bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
                style={{
                  height: "80px", // Uniform height for each row
                  gap: "10px", // Ensure spacing between columns if necessary
                }}
              >
                {/* Collections */}
                <div className="flex items-center">
                  <span className="font-medium pr-4">{seller.id}</span>
                  <img
                    src={seller.avatar}
                    alt={seller.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <span className="font-semibold">{seller.name}</span>
                </div>

                {/* Volume */}
                <div className="text-center">{seller.volume}</div>

                {/* Followers */}
                <div className="text-center">{seller.followers}</div>

                {/* Percent */}
                <div className="text-center text-green-500">{seller.percent}</div>

                {/* Floor Price */}
                <div className="flex items-center justify-center space-x-1">
                  <FaEthereum className="text-gray-500" />
                  <span>{seller.floorPrice}</span>
                </div>

                {/* Items */}
                <div className="text-center">{seller.items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
