import React, { useMemo } from "react";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";
import card5 from "../Images/card5.png";
import bg from "../Images/bg.png"; // Background image
import CustomButton from "./CustomButton"; // Import the CustomButton component

const FeaturedCollection = React.memo(() => {
  const cards = useMemo(
    () => [
      { id: 1, image: card1, name: "Stella Nova" },
      { id: 2, image: card2, name: "Jane Smith" },
      { id: 3, image: card3, name: "Alex Taylor" },
      { id: 4, image: card4, name: "Chris Brown" },
      { id: 5, image: card5, name: "Sara Wilson" },
      { id: 6, image: card5, name: "David Lee" },
      { id: 7, image: card1, name: "David Lee" },
      { id: 8, image: card2, name: "David Lee" },
    ],
    []
  );

  return (
    <div className="py-10 px-4 sm:px-6 mt-[100px] lg:px-8">
      <div className="container mx-auto max-w-7xl relative">
        {/* Title and Subtext */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5 px-4">
          <div className="text-left w-full md:w-auto">
            <h2 className="font-apex text-[64px] font-normal leading-[76.8px] tracking-[0.04em] text-left">
              RECENTLY SOLD
            </h2>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative w-full xl:w-[290px] rounded-lg py-8 px-4 flex flex-col items-center text-center bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "100% 93.5%",
              }}
            >
              {/* Profile Section */}
              <div className="flex items-center mb-4 w-full relative top-7 lg:top-9">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="rounded-full w-full h-full object-cover"
                    loading="lazy" // Lazy load image
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
                  loading="lazy" // Lazy load image
                />

                {/* Centered Custom Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <CustomButton
                    text="BUY NOW" // Button label
                    bgColor="bg-blue-600" // Button background color
                    textColor="text-white" // Button text color
                    onClick={() => alert(`Buying ${card.name}`)} // Button click action
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default FeaturedCollection;
