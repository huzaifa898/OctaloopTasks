import React, { useState } from "react";
import Mask1 from "../Images/mask1.png";
import Mask2 from "../Images/Mask2.png";
import Mask3 from "../Images/Mask3.png";
import Mask4 from "../Images/Mask4.png";
import image7 from "../Images/images7.png";
import bg from "../Images/bg.png"; // Background image
import prvbtn from "../Images/prvbtn.png";
import nextbtn from "../Images/nextbtn.png";
import fry from '../Images/fry.png';

const FeaturedCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, image: Mask1, price: "142.02", name: "Stella Nova" },
    { id: 2, image: Mask2, price: "142.02", name: "Jane Smith" },
    { id: 3, image: Mask3, price: "142.02", name: "Alex Taylor" },
    { id: 4, image: Mask4, price: "142.02", name: "Chris Brown" },
    { id: 5, image: Mask4, price: "142.02", name: "Sara Wilson" },
    { id: 6, image: Mask4, price: "142.02", name: "David Lee" },
  ];

  const cardsPerSlide = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerSlide < cards.length ? prevIndex + cardsPerSlide : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0
        ? Math.floor(cards.length / cardsPerSlide) * cardsPerSlide
        : currentIndex - cardsPerSlide
    );
  };

  return (
    <div className="py-10 px-4 sm:px-6 mt-[100px] lg:px-8">
      <div className="container mx-auto max-w-7xl relative">
        {/* Title and Subtext */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5 px-4">
          <div className="text-left w-full md:w-auto">
            <h2 className="font-apex text-[48px] sm:text-[64px] font-normal leading-[76.8px] tracking-[0.04em] text-left">
              Featured Collection
            </h2>
            <p className="font-apex text-[14px] sm:text-[18px] font-light leading-[21.09px] tracking-[0.03em] text-left">
              Explore our exclusive featured collection, showcasing innovative
              designs.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-4 md:mt-0 hidden sm:flex">
            <button onClick={handlePrev} className="focus:outline-none">
              <img
                src={prvbtn}
                alt="Previous"
                className="w-16 h-16 hover:scale-110 transition-transform"
              />
            </button>

            <button onClick={handleNext} className="focus:outline-none">
              <img
                src={nextbtn}
                alt="Next"
                className="w-16 h-16 hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.slice(currentIndex, currentIndex + cardsPerSlide).map((card) => (
            <div
              key={card.id}
              className="relative w-full xl:w-[308px] rounded-lg py-8 px-4 flex flex-col items-center text-center bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: '97% 80%',
              }}
            >
              {/* Profile Section */}
              <div className="flex items-center mb-4 w-full relative top-10 lg:top-6 sm:mt-9">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="ml-2">
                  <h3 className="font-semibold text-left uppercase">
                    {card.name}
                  </h3>
                  <p className="text-gray-500 text-sm text-left">@{card.name}</p>
                </div>
              </div>

              {/* Main Image */}
              <div className="w-full mb-4 relative top-7 lg:top-6">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-auto rounded object-cover"
                />
              </div>

              {/* Footer Section */}
              <div className="flex justify-between items-center w-full relative top-6">
                <button className="bg-red-500 w-56px h-36px font-roboto leading-4 tracking-tight text-white py-4 px-4 sm:py-3 xl:px-4 rounded relative bottom-16 left-3">
                  Buy
                </button>
                <p className="text-gray-700 py-3 font-roboto w-123px sm:py-2 px-4 lg:px-3 lg:py-2 rounded bg-white flex items-center gap-1 relative bottom-16 right-2">
                  Price:{" "}
                  <img
                    className="w-5 h-5 bg-black rounded-full"
                    src={fry} // Replace with your logo path
                    alt="logo"
                  />{" "}
                  ${card.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;