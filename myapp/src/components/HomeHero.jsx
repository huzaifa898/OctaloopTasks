import React from 'react';
import hero1 from '../Images/hero1.png';
import heroimg2 from '../Images/heroimg2.png';
import heroimg3 from '../Images/heroimg3.png';
import heroimg4 from '../Images/heroimg4.png';
import heroimg5 from '../Images/heroimg5.png';
import hands from '../Images/hands.png';

import './HomeHero.css'; // Import the CSS file


const HeroSection = () => {
  

  




  return (
    <div className="relative overflow-hidden h-screen">
     

      {/* Heading and Tagline */}
      <div
        className="absolute text-center"
        style={{ top: "15%", left: "50%", transform: "translateX(-50%)" }}
      >
        <h1
          className="font-apex font-normal tracking-[0.04em] text-center decoration-skip-ink"
          style={{
            fontSize: "clamp(32px, 5vw, 96px)", // Dynamically adjusts between 32px (mobile) and 96px (desktop)
            lineHeight: "clamp(40px, 6vw, 102px)", // Dynamically adjusts between 40px and 102px
            marginBottom: "20px",
          }}
        >
          DISCOVER, CREATE & <br /> SELL ARTWORKS.
        </h1>
        <p
          className="font-apex font-light tracking-[0.03em] text-center decoration-skip-ink"
          style={{
            fontSize: "clamp(14px, 3vw, 18px)", // Adjusts between 14px (mobile) and 18px (desktop)
            lineHeight: "clamp(18px, 4vw, 21.09px)", // Adjusts between 18px and 21.09px
            marginBottom: "40px",
          }}
        >
          Discover and trade unique digital art pieces on our NFT website, where
          creativity meets blockchain technology.
        </p>
      </div>


      {/* Hero Section */}
      <div
        className="absolute flex items-center justify-center mt-15"
        style={{
          width: "921.14px",
          height: "410.96px",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          gap: "0px",
          opacity: "0px",
        }}
      >
        <div
          className="absolute w-[800px] h-[400px] bg-red-500 opacity-30 shadow-lg sm:block hidden"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(100px)",
            marginTop: "20px",
          }}
        ></div>
        <div
          className="absolute transform -rotate-4 left-[-60px] top-[42px] w-[225.69px] h-[300.71px] animate-left-right sm:block hidden"
          style={{ marginTop: "20px" }}
        >
          <img
            src={heroimg3}
            alt="Hero Image 3"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
        <div
          className="absolute transform -rotate-4 left-[80px] top-[19.04px] w-[266.67px] h-[355.31px] animate-left-right sm:block hidden"
          style={{ marginTop: "20px" }}
        >
          <img
            src={heroimg4}
            alt="Hero Image 4"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
        <img
          src={hero1}
          alt="Hero Image 1"
          className="relative z-20 rounded-lg w-[308.36px] h-[410.96px] animate-up-down sm:block hidden"
          style={{
            left: "0px",
            gap: "0px",
            opacity: "0px",
            marginLeft: "-40px",
            marginRight: "-40px",
            marginTop: "20px",
          }}
        />
        <div
          className="absolute transform rotate-4 right-[70px] top-[19.04px] w-[266.67px] h-[355.31px] z-10 animate-right-left sm:block hidden"
          style={{ marginTop: "20px" }}
        >
          <img
            src={heroimg2}
            alt="Hero Image 2"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
        <div
          className="absolute transform rotate-4 right-[-90px] top-[42px] w-[225.69px] h-[300.71px] z-0 animate-right-left sm:block hidden"
          style={{ marginTop: "20px" }}
        >
          <img
            src={heroimg5}
            alt="Hero Image 5"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
      </div>

      {/* Background Hands Image */}
      <img
        src={hands}
        alt="Hands Background"
        className="absolute bottom-0 w-full h-auto opacity-1 z-0"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "1920px",
          maxHeight: "1080px",
          bottom: "-70px",
        }}
      />
    </div>
  );
};

export default HeroSection;
