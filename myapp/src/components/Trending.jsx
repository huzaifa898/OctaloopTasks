import React from "react";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";
import card5 from "../Images/card5.png";
import bg from "../Images/bg.png";
import fry from "../Images/fry.png";

const TrendingNFTs = ({ heading = "Trending NFTs" }) => {
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
      image: card5,
      price: "42.02",
    },
    {
      id: 7,
      title: "Stella Nova",
      username: "@stellanova",
      image: card1,
      price: "42.02",
    },
    {
      id: 8,
      title: "Stella Nova",
      username: "@stellanova",
      image: card2,
      price: "42.02",
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 mt-[100px] lg:px-8">
      <div className="container mx-auto max-w-7xl relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-5 px-4">
          <div className="text-left w-full md:w-auto">
            <h2 className="font-apex text-[64px] font-normal leading-[76.8px] tracking-[0.04em] text-left">
              {heading}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="relative w-full xl:w-[290px] rounded-lg py-8 px-4 flex flex-col items-center text-center bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: '100% 82%',
              }}
            >
              {/* Profile Section */}
              <div className="flex items-center mb-4 w-full relative top-10 lg:top-6 sm:mt-9">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  <img
                    src={nft.image}
                    alt={`Profile image of ${nft.title}`}
                    className="rounded-full w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="ml-2">
                  <h3 className="font-semibold text-left uppercase">{nft.title}</h3>
                  <p className="text-gray-500 text-sm text-left">{nft.username}</p>
                </div>
              </div>

              {/* Main Image */}
              <div className="w-full mb-4 relative top-7 lg:top-6">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-auto rounded object-cover"
                  loading="lazy"
                />
              </div>

              {/* Footer Section */}
              <div className="flex justify-between items-center w-full relative top-6">
                <button className="bg-red-500 w-56px h-36px font-roboto leading-4 tracking-tight text-white py-4 px-4 sm:py-3 xl:px-4 rounded relative bottom-16 left-2">
                  Buy
                </button>
                <p className="text-gray-700 py-3 font-roboto w-123px sm:py-2 px-4 lg:px-3 lg:py-2 rounded bg-white flex items-center gap-1 relative bottom-16 right-2">
                  Price:{" "}
                  <img className="w-5 h-5 bg-black rounded-full" src={fry} alt="logo" /> 
                  ${nft.price || "N/A"} {/* Default to N/A if no price */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNFTs;
