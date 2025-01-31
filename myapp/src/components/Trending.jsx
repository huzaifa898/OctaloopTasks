// import React from "react";
// import card1 from "../Images/card1.png";
// import card2 from "../Images/card2.png";
// import card3 from "../Images/card3.png";
// import card4 from "../Images/card4.png";
// import card5 from "../Images/card5.png";
// import card6 from "../Images/card6.png";
// import card7 from "../Images/card7.png";
// import card8 from "../Images/card8.png";
// import icon from "../Images/icon.png";
// import bgImage from "../Images/bg.png"; // Background for the card

// const TrendingNFTs = ({ heading = "Trending NFTs" }) => {
//   const nfts = [
//     {
//       id: 1,
//       title: "Stella Nova",
//       username: "@stellanova",
//       image: card1,
//       price: "42.02",
//     },
//     {
//       id: 2,
//       title: "Stella Nova",
//       username: "@stellanova",
//       image: card2,
//       price: "42.02",
//     },
//     {
//       id: 3,
//       title: "Stella Nova",
//       username: "@stellanova",
//       image: card3,
//       price: "42.02",
//     },
//     {
//       id: 4,
//       title: "Stella Nova",
//       username: "@stellanova",
//       image: card4,
//       price: "42.02",
//     },
//     {
//       id: 5,
//       title: "Stella Nova",
//       username: "@stellanova",
//       image: card5,
//       price: "42.02",
//     },
//     {
//       id: 6,
//       title: "Stella Nova",
//       username: "@stellanova",
//       image: card6,
//       price: "42.02",
//     },
//     {
//       id: 7,
//       title: "Stella Nova",
//       username: "@stellanova",
//       image: card7,
//       price: "42.02",
//     },
//     {
//       id: 8,
//       title: "Stella Nova",
//       username: "@stellanova",
//       image: card8,
//       price: "42.02",
//     },
//   ];

//   return (
//     <div className="py-10 px-5">
//       <div className="container max-w-7xl mx-auto">
//         {/* Heading */}
//         <h1
//           style={{ marginLeft: "0px" }}
//           className="font-apex text-[64px] font-normal leading-[76.8px] tracking-[0.04em] text-left decoration-skip-ink"
//         >
//           {heading}
//         </h1>
//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {nfts.map((nft) => (
//             <div
//               key={nft.id}
//               style={{
//                 backgroundImage: `url(${bgImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//               className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 relative border border-gray-200 bg-opacity-50"
//             >
//               {/* Top Section with Icon and Name */}
//               <div className="flex items-center gap-4 p-4 bg-white/70 rounded-t-lg">
//                 {/* Icon */}
//                 <div className="bg-gray-200 p-2 rounded-full">
//                   <img
//                     src={icon}
//                     alt={nft.username}
//                     className="w-10 h-10 rounded-full"
//                   />
//                 </div>
//                 {/* Text */}
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800">
//                     {nft.title}
//                   </h2>
//                   <p className="text-sm text-gray-500">{nft.username}</p>
//                 </div>
//               </div>
//               {/* Image Section */}
//               <div className="relative">
//                 <img
//                   src={nft.image}
//                   alt={nft.title}
//                   className="w-full h-56 object-cover"
//                 />
//                 {/* Buttons on the Image */}
//                 <div className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black/60 to-transparent">
//                   <button className="bg-red-500 font-apex text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition">
//                     Buy
//                   </button>
//                   <p className="text-sm font-apex text-white font-medium bg-black/50 px-3 py-1 rounded-full">
//                     ${nft.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendingNFTs;

import React, { memo } from "react";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";
import card5 from "../Images/card5.png";
import bg from "../Images/bg.png";
import fry from "../Images/fry.png";
import CustomButton from "./CustomButton";

// Memoize individual card to avoid unnecessary re-renders
const Card = memo(({ id, image, price, name }) => {
  const bgStyle = { backgroundImage: `url(${bg})`, backgroundSize: '100% 82%' };
  
  return (
    <div
      key={id}
      className="relative w-full xl:w-[290px] rounded-lg py-8 px-4 flex flex-col items-center text-center bg-center bg-no-repeat"
      style={bgStyle}
    >
      {/* Profile Section */}
      <div className="flex items-center mb-4 w-full relative top-10 lg:top-6 sm:mt-9">
        <div className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
          <img
            src={image}
            alt={`Profile image of ${name}`}
            className="rounded-full w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="ml-2">
          <h3 className="font-semibold text-left uppercase">{name}</h3>
          <p className="text-gray-500 text-sm text-left">@{name}</p>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full mb-4 relative top-7 lg:top-6">
        <img
          src={image}
          alt={name}
          className="w-full h-auto rounded object-cover"
          loading="lazy"
        />
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center w-full relative top-6">
        <CustomButton label="Buy" aria-label={`Buy ${name}`} className="bg-red-500 w-56px h-36px font-roboto leading-4 tracking-tight text-white py-4 px-4 sm:py-3 xl:px-4 rounded relative bottom-16 left-2" />
        
        <p className="text-gray-700 py-3 font-roboto w-123px sm:py-2 px-4 lg:px-3 lg:py-2 rounded bg-white flex items-center gap-1 relative bottom-16 right-2">
          Price:{" "}
          <img className="w-5 h-5 bg-black rounded-full" src={fry} alt="logo" /> 
          ${price || "N/A"} {/* Default to N/A if no price */}
        </p>
      </div>
    </div>
  );
});

const FeaturedCollection = () => {
  const cards = [
    { id: 1, image: card1, price: "142.02", name: "Stella Nova" },
    { id: 2, image: card2, price: "142.02", name: "Jane Smith" },
    { id: 3, image: card3, price: "142.02", name: "Alex Taylor" },
    { id: 4, image: card4, price: "142.02", name: "Chris Brown" },
    { id: 5, image: card5, price: "142.02", name: "Sara Wilson" },
    { id: 6, image: card5, price: "142.02", name: "David Lee" },
    { id: 7, image: card1, price: "142.02", name: "David Lee" },
    { id: 8, image: card2, price: "142.02", name: "David Lee" },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 mt-[100px] lg:px-8">
      <div className="container mx-auto max-w-7xl relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-5 px-4">
          <div className="text-left w-full md:w-auto">
            <h2 className="font-apex text-[64px] font-normal leading-[76.8px] tracking-[0.04em] text-left">
              Trending NFTS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
