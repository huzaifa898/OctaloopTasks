import React, { useState } from "react";
import Auc from '../Images/Auc.png';
import Auc4 from '../Images/Auc4.png';
import Auc6 from '../Images/Auc6.png';
import { Link } from "react-router-dom";
import icon from "../Images/icon.png";
import bg from "../Images/bg.png"; // Import the background image

const TrendingNFTs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      image: Auc,
      price: "42.02",
    },
    {
      id: 3,
      title: "Stella Nova",
      username: "@stellanova",
      image: Auc,
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
      image: Auc4,
      price: "42.02",
    },
    {
      id: 8,
      title: "Stella Nova",
      username: "@stellanova",
      image: Auc6,
      price: "42.02",
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-10 px-5">
      <div className="container max-w-7xl mx-auto">
        {/* Heading */}
        <h1 style={{ marginLeft: "16px" }} className="font-apex text-[64px] font-normal leading-[76.8px] tracking-[0.04em] text-left decoration-skip-ink">
        Top Listed  Auctions
        </h1>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="relative w-full xl:w-[290px] rounded-lg py-8 px-4 flex flex-col items-center text-center"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: '100% 92%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Top Section with Icon and Name */}
              <div className="flex items-center mb-4 w-full relative top-4 lg:top-9">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  <img
                    src={icon}
                    alt={nft.username}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="ml-2">
                  <h3 className="font-semibold text-left uppercase">{nft.title}</h3>
                  <p className="text-gray-500 text-sm text-left">@STELLA NOVA</p>
                </div>
              </div>
              {/* Image Section */}
              <div className="relative group w-full mb-4 relative top-7 lg:top-6">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-auto rounded object-cover"
                  style={{ maxWidth: '100%' }} // Ensuring the image fills the width of the container
                />
                {/* Timestamp Display (Center by Default) */}
                <div
                  className="absolute left-1/2 top-1/2 transform font-apex -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-md shadow-lg opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                >
                  12:34:34:54
                </div>
                {/* "Bid Now" Button (Appears and Animates to Exact Center on Hover) */}
                <button
                  className="absolute left-1/2 font-apex top-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-[-50%] bg-red-600 text-white px-6 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
                  onClick={openModal}
                >
                  Bid Now
                </button>
              </div>
            </div>
          ))}
        </div>
         {/* Modal */}
         {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white w-[415px] h-[553px] p-6 rounded-[25px] shadow-lg">
              <button
                className="absolute top-4 right-4 text-gray-800 focus:outline-none"
                onClick={closeModal}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              {/* Modal Content */}
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-lg font-apex text-gray-800 absolute top-[24.82px] left-[135px]">
                  Place your bid
                </h2>
                {/* Label and Input Field */}
                <div className="absolute top-[140px] left-[31px] w-[353px] h-[55px] opacity-1">
                  <label className="block text-gray-700 text-sm font-apex mb-2" htmlFor="bidAmount">
                    Bid Amount
                  </label>
                  <input
                    id="bidAmount"
                    type="text"
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your bid"
                    style={{ padding: "14px 25px", gap: "10px", borderRadius: "8px 0px 0px 0px", border: "1.8px solid red" }}
                  />
                </div>
                {/* Service Fee and Digits */}
                <div className="absolute top-[240px] left-[31px] w-[353px] h-[21px] flex justify-between opacity-1">
                  <span className="text-gray-700 font-apex">Service Fee</span>
                  <span className="text-gray-700 font-apex">0.25 ETH</span>
                </div>
                {/* Red Line */}
                <div className="absolute top-[270px] left-[31px] w-[353px] h-0 border-t-[1.4px] border-red-500 opacity-1"></div>
                {/* Marketplace Fee */}
                <div className="absolute top-[311px] left-[31px] w-[353px] h-[21px] flex justify-between opacity-1">
                  <span className="text-gray-700 font-apex">Marketplace Fee</span>
                  <span className="text-gray-700 font-apex">0.10 ETH</span>
                </div>
                {/* Red Line */}
                <div className="absolute top-[340px] left-[31px] w-[353px] h-0 border-t-[1.4px] border-red-500 opacity-1"></div>
                {/* Total Bid Amount */}
                <div className="absolute top-[371px] left-[31px] w-[353px] h-[21px] flex justify-between opacity-1">
                  <span className="text-gray-700 font-apex">Total Bid Amount</span>
                  <span className="text-gray-700 font-apex">0.60 ETH</span>
                </div>
                {/* Buttons */}
                <div className="absolute top-[400px] left-[31px] w-[353px] flex justify-between opacity-1">
                  <button
                    className="bg-gray-300 text-gray-700 font-apex px-4 py-2 rounded hover:bg-gray-400"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-600 text-white font-apex px-4 py-2 rounded hover:bg-red-700"
                  >
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Explore Button */}
        <div className="flex justify-center items-center mt-10">
          <Link to="/auctionpage">
            <button className="bg-red-500 font-apex text-white px-8 py-3 rounded-lg hover:bg-red-600 transition">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingNFTs;
