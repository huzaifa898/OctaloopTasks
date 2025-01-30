import React, { useEffect, useRef, useState } from 'react';
import hero1 from '../Images/hero1.png';
import heroimg2 from '../Images/heroimg2.png';
import heroimg3 from '../Images/heroimg3.png';
import heroimg4 from '../Images/heroimg4.png';
import heroimg5 from '../Images/heroimg5.png';
import left1 from '../Images/left1.png'; // Replace with your left-side image
import right1 from '../Images/right1.png'; // Replace with your right-side image

import './HomeHero.css'; // Import the CSS file

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current?.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.75;

      if (sectionTop < triggerPoint) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="relative   overflow-hidden min-h-screen">
      {/* Heading and Tagline */}
      <div
        className="absolute text-center"
        style={{
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          padding: '0 10px', // Prevent text from being too close to the edges
        }}
      >
        <h1
          className="font-apex font-normal tracking-[0.04em] text-center decoration-skip-ink"
          style={{
            fontSize: 'clamp(32px, 8vw, 96px)', // Dynamically adjusts between 32px (mobile) and 96px (desktop)
            lineHeight: 'clamp(40px, 10vw, 102px)', // Dynamically adjusts between 40px and 102px
            marginBottom: '20px',
          }}
        >
          DISCOVER, CREATE & <br /> SELL ARTWORKS.
        </h1>
        <p
          className="font-apex font-light tracking-[0.03em] text-center decoration-skip-ink"
          style={{
            fontSize: 'clamp(14px, 4vw, 18px)', // Adjusts between 14px (mobile) and 18px (desktop)
            lineHeight: 'clamp(18px, 5vw, 21.09px)', // Adjusts between 18px and 21.09px
            marginBottom: '40px',
          }}
        >
          Discover and trade unique digital art pieces on our NFT website, where
          creativity meets blockchain technology.
        </p>
      </div>

      {/* Hero Section */}
      <div
        className="absolute flex items-center justify-center mt-0 sm:flex-row flex-col"
        style={{
          width: '751.14px',
          height: '410.96px',
          top: '63%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          gap: '0px',
          opacity: '0px',
        }}
      >
        {/* Background Blur */}
        <div
          className="absolute w-[800px] h-[400px] bg-red-500 opacity-30 shadow-lg sm:block hidden"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(100px)',
            marginTop: '20px',
          }}
        ></div>

        {/* Image 3 */}
        <div
          className="absolute transform -rotate-4 sm:left-[-60px] sm:top-[42px] w-[225.69px] h-[300.71px] animate-left-right sm:block hidden"
          style={{ marginTop: '20px' }}
        >
          <img
            src={heroimg3}
            alt="Hero Image 3"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>

        {/* Image 4 */}
        <div
          className="absolute transform -rotate-4 sm:left-[80px] sm:top-[19.04px] w-[266.67px] h-[355.31px] animate-left-right sm:block hidden"
          style={{ marginTop: '20px' }}
        >
          <img
            src={heroimg4}
            alt="Hero Image 4"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>

        {/* Main Hero Image */}
        <img
          src={hero1}
          alt="Hero Image 1"
          className="relative z-20 rounded-lg w-[308.36px] h-[410.96px] animate-up-down sm:block hidden"
          style={{
            left: '0px',
            gap: '0px',
            opacity: '0px',
            marginLeft: '-40px',
            marginRight: '-40px',
            marginTop: '20px',
          }}
        />

        {/* Image 2 */}
        <div
          className="absolute transform rotate-4 sm:right-[70px] sm:top-[19.04px] w-[266.67px] h-[355.31px] z-10 animate-right-left sm:block hidden"
          style={{ marginTop: '20px' }}
        >
          <img
            src={heroimg2}
            alt="Hero Image 2"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>

        {/* Image 5 */}
        <div
          className="absolute transform rotate-4 sm:right-[-90px] sm:top-[42px] w-[225.69px] h-[300.71px] z-0 animate-right-left sm:block hidden"
          style={{ marginTop: '20px' }}
        >
          <img
            src={heroimg5}
            alt="Hero Image 5"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden flex mt-10 flex-col items-center justify-center w-full gap-4">


          <img
            src={hero1}
            alt="Hero Image 1"
            className="w-[308.36px] h-[410.96px] rounded-lg"
          /> 
          

        </div>
      </div>


      {/* Left and Right Images Fully Aligned */}
     <div className="relative min-h-screen" ref={sectionRef}>
  {/* Left Image */}
  {/* Left Image */}
<img
  src={left1}
  alt="Left Background"
  className={`left-image ${animate ? 'animate-left' : ''} hidden sm:block`} // Hide on mobile
  style={{
    width: '548.8px',
    height: '613.89px',
    top: '80%', // Lowered from 75% to 85%
    left: '-6%',
    transform: 'translateY(-50%)',
    maxHeight: '100vh', // Prevents overflow
    objectFit: 'contain', // Ensures full image is visible
  }}
/>

{/* Right Image */}
<img
  src={right1}
  alt="Right Background"
  className={`right-image ${animate ? 'animate-right' : ''} hidden sm:block`} // Hide on mobile
  style={{
    width: '548.8px',
    height: '613.89px',
    top: '80%', // Lowered from 75% to 85%
    right: '-6%',
    transform: 'translateY(-50%)',
    maxHeight: '100vh', // Prevents overflow
    objectFit: 'contain', // Ensures full image is visible
  }}
/>

</div>



    </div>
  );
};

export default HeroSection;
