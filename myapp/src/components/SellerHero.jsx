import React from "react";
import SellerTop from "../Images/SellerTop.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      {/* Content */}
      <div className="max-w-[1320px] w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-16">
        {/* Tagline */}
        <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0 px-4">
          <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[64px] font-bold text-red-600 mb-4">
            <span className="text-black font-Apex leading-[1.2] tracking-[0.04em]">
              TOP
            </span>{" "}
            <br />
            <span className="font-Apex text-[64px] sm:text-[96px] md:text-[128px] leading-[1.2] tracking-[0.04em]">
              SELLER
            </span>
          </h1>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center lg:px-8">
          <img
            src={SellerTop}
            alt="NFT Collection"
            className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[700px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
