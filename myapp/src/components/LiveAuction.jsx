import React from "react";
import Auc from '../Images/Auc.png';
import Auc2 from '../Images/Auc2.png';
import Auc3 from '../Images/Auc3.png';
import Auc4 from '../Images/Auc4.png';
import Auc6 from '../Images/Auc6.png';
import Auc7 from '../Images/Auc7.png';
import Auc8 from '../Images/Auc8.png';
import icon from "../Images/icon.png";

const TrendingNFTs = () => {
  const nfts = [
    {
      id: 1,
      title: "Stella Nova",
      username: "@stellanova",
      image: Auc,
      price: "42.02",
    },
    {
      id: 2,
      title: "Stella Nova",
      username: "@stellanova",
      image: Auc2,
      price: "42.02",
    },
    {
      id: 3,
      title: "Stella Nova",
      username: "@stellanova",
      image: Auc3,
      price: "42.02",
    },
    {
      id: 4,
      title: "Stella Nova",
      username: "@stellanova",
      image: Auc4,
      price: "42.02",
    },
    {
      id: 5,
      title: "Stella Nova",
      username: "@stellanova",
      image: Auc4,
      price: "42.02",
    },
    {
      id: 6,
      title: "Stella Nova",
      username: "@stellanova",
      image: Auc6,
      price: "42.02",
    },
    {
      id: 7,
      title: "Stella Nova",
      username: "@stellanova",
      image: Auc7,
      price: "42.02",
    },
    {
      id: 8,
      title: "Stella Nova",
      username: "@stellanova",
      image: Auc8,
      price: "42.02",
    },
    {
        id: 8,
        title: "Stella Nova",
        username: "@stellanova",
        image: Auc8,
        price: "42.02",
      },
      {
        id: 7,
        title: "Stella Nova",
        username: "@stellanova",
        image: Auc7,
        price: "42.02",
      },
      {
        id: 6,
        title: "Stella Nova",
        username: "@stellanova",
        image: Auc6,
        price: "42.02",
      },
      {
        id: 6,
        title: "Stella Nova",
        username: "@stellanova",
        image: Auc6,
        price: "42.02",
      },
  ];

  return (
    <div className="py-10 px-5">
      <div className="container max-w-6xl mx-auto">
        {/* Heading */}
        <h1 style={{ marginLeft: "16px" }} className="text-4xl font-extrabold text-gray-800 mb-8">
          LIVE AUCTIONS
        </h1>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 relative border border-gray-200"
            >
              {/* Top Section with Icon and Name */}
              <div className="flex items-center gap-4 p-4">
                {/* Icon */}
                <div className="bg-gray-200 p-2 rounded-full">
                  <img
                    src={icon}
                    alt={nft.username}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                {/* Text */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {nft.title}
                  </h2>
                  <p className="text-sm text-gray-500">{nft.username}</p>
                </div>
              </div>
              {/* Image Section */}
              <div className="relative">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-56 object-cover"
                />
                {/* Buttons on the Image */}
                <div className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition">
                    Buy
                  </button>
                  <p className="text-sm text-white font-medium bg-black/50 px-3 py-1 rounded-full">
                    ${nft.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Explore Button */}
        <div className="flex justify-center items-center mt-10">
         
        </div>
      </div>
    </div>
  );
};

export default TrendingNFTs;
