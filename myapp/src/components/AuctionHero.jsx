import React from "react";
import auchero3 from "../Images/auchero3.png"; 
import auchero2 from "../Images/auchero2.png";
import auchero4 from "../Images/auchero4.png";
import auchero1 from "../Images/auchero1.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-6 py-4 sm:h-screen h-auto">
        {/* Title Section */}
        <h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-apex text-red-600 mb-8"
          style={{
            fontWeight: "900",
            lineHeight: "1.1",
            letterSpacing: "0.02em",
          }}
        >
          AUCTIONS
        </h1>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl px-4">
          {/* Top Row Image */}
          <div className="flex justify-center">
            <img
              src={auchero3}
              alt="Image 1"
              className="rounded-lg shadow-md w-full h-[250px] object-cover"
            />
          </div>

          {/* Mid Images with bottom alignment */}
          <div className="flex justify-center mt-4 sm:mt-0">
            <img
              src={auchero2}
              alt="Image 2"
              className="rounded-lg shadow-md w-full h-[150px] object-cover object-bottom"
            />
          </div>

          <div className="flex justify-center mt-4 sm:mt-0">
            <img
              src={auchero4}
              alt="Image 3"
              className="rounded-lg shadow-md w-full h-[150px] object-cover object-bottom"
            />
          </div>

          {/* Bottom Row Image */}
          <div className="flex justify-center">
            <img
              src={auchero1}
              alt="Image 4"
              className="rounded-lg shadow-md w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
