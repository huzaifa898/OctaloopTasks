import React from 'react'
import image1 from "../Images/images1.png";
import image2 from "../Images/images2.png";
import image3 from "../Images/images3.png";
import image4 from "../Images/images4.png";
import image5 from "../Images/images5.png";
import image6 from "../Images/images6.png";
import image7 from "../Images/images7.png";
import icon from "../Images/icon.png"
function Profilecards() {
    const nfts = [
        {
          id: 1,
          title: "Stella Nova",
          username: "@stellanova",
          image: image1,
          price: "42.02",
        },
        {
          id: 2,
          title: "Stella Nova",
          username: "@stellanova",
          image: image2,
          price: "42.02",
        },
        {
          id: 3,
          title: "Stella Nova",
          username: "@stellanova",
          image: image3,
          price: "42.02",
        },
        {
          id: 4,
          title: "Stella Nova",
          username: "@stellanova",
          image: image4,
          price: "42.02",
        },
        {
          id: 5,
          title: "Stella Nova",
          username: "@stellanova",
          image: image5,
          price: "42.02",
        },
        {
          id: 6,
          title: "Stella Nova",
          username: "@stellanova",
          image: image6,
          price: "42.02",
        },
        {
          id: 7,
          title: "Stella Nova",
          username: "@stellanova",
          image: image7,
          price: "42.02",
        },
        {
          id: 8,
          title: "Stella Nova",
          username: "@stellanova",
          image: image7,
          price: "42.02",
        },
      ];
  return (
    <div className="py-10  px-5">
      <div className="container max-w-7xl mx-auto">
        {/* Heading */}
        <h1 style={{ marginLeft: "16px" }} className="font-apex text-[64px] font-normal leading-[76.8px] tracking-[0.04em] text-left  decoration-skip-ink" >
          Recently Sold
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
                  <p className="text-sm text-white font-apex bg-black/50 px-3 py-1 rounded-full">
                    ${nft.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  )
}

export default Profilecards