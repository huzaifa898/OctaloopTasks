import React from "react";
import card1 from '../Images/card1.png'
import card2 from '../Images/card2.png'
import card3 from '../Images/card3.png'
import card4 from '../Images/card4.png'
import card5 from '../Images/card5.png'
import card6 from '../Images/card6.png'
import card7 from '../Images/card7.png'
import card8 from '../Images/card8.png'
import icon from "../Images/icon.png"
const TrendingNFTs = () => {
  const nfts = [
    {
      id: 1,
      title: "Stella Nova",
      username: "@stellanova",
      image: card1,
      price: "42.02",
    },
    {
      id: 2,
      title: "Stella Nova",
      username: "@stellanova",
      image: card2,
      price: "42.02",
    },
    {
      id: 3,
      title: "Stella Nova",
      username: "@stellanova",
      image: card3,
      price: "42.02",
    },
    {
      id: 4,
      title: "Stella Nova",
      username: "@stellanova",
      image: card4,
      price: "42.02",
    },
    {
      id: 5,
      title: "Stella Nova",
      username: "@stellanova",
      image: card5,
      price: "42.02",
    },
    {
      id: 6,
      title: "Stella Nova",
      username: "@stellanova",
      image: card6,
      price: "42.02",
    },
    {
      id: 7,
      title: "Stella Nova",
      username: "@stellanova",
      image: card7,
      price: "42.02",
    },
    {
      id: 8,
      title: "Stella Nova",
      username: "@stellanova",
      image: card8,
      price: "42.02",
    },
  ];

  return (
    <div className="py-10  px-5">
      <div className="container max-w-6xl mx-auto">
        {/* Heading */}
        <h1 style={{ marginLeft: "16px" }} className="text-4xl font-apex text-gray-800 mb-8" >
          Trending NFTs
        </h1>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
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
                  <button className="bg-red-500 font-apex text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition">
                    Buy
                  </button>
                  <p className="text-sm font-apex text-white font-medium bg-black/50 px-3 py-1 rounded-full">
                    ${nft.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNFTs;
