import React from 'react';
import Ass from '../Images/Ass.png';
import Ass1 from '../Images/Ass1.png';
import Ass2 from '../Images/Ass2.png';
import Ass3 from '../Images/Ass3.png';
import Ass4 from '../Images/Ass4.png';
import Ass5 from '../Images/Ass5.png';
import Ass6 from '../Images/Ass6.png';

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center mt-52">
      <div className="relative w-full max-w-[1320px] h-[931px] flex justify-center items-center">
        {/* Heading */}
        <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl font-apex text-center mt-0">
          Turn your imagination into <br /> digital Asset
        </h1>

        {/* Left Column */}
        <div className="absolute left-[240px] top-0 flex flex-col gap-16 hidden sm:flex">
          <img src={Ass5} alt="Left Image 1" className="w-[110px] h-[110px]" style={{ marginLeft: '10px' }} />
          <img src={Ass6} alt="Left Image 2" className="w-[170px] h-[170px]" style={{ marginLeft: '10px' }} />
          <img src={Ass} alt="Left Image 3" className="w-[120px] h-[120px]" style={{ marginLeft: '0px' }} />
          <img src={Ass1} alt="Left Image 4" className="w-[120px] h-[120px]" style={{ marginLeft: '100px' }} />
        </div>

        {/* Right Column */}
        <div className="absolute top-0 flex flex-col gap-12 hidden sm:flex">
          <img src={Ass2} alt="Right Image 1" className="w-[170px] h-[170px]" style={{ marginLeft: '725px' }} />
          <img src={Ass3} alt="Right Image 2" className="w-[120px] h-[120px]" style={{ marginLeft: '850px' }} />
          <img src={Ass4} alt="Right Image 3" className="w-[130px] h-[130px]" style={{ marginLeft: '850px' }} />
          <img src={Ass} alt="Right Image 4" className="w-[140px] h-[140px]" style={{ marginLeft: '725px' }} />
        </div>

        {/* Center Input Field and Button */}
        <div className="absolute flex flex-col items-center justify-center" style={{ top: '30%', left: '54%', transform: 'translate(-50%, -50%)' }}>
          <div className="relative w-[300px] sm:w-[600px]">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full px-6 py-3 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black pr-20"
            />
            <button
              className="absolute right-0 top-0 mt-1 mr-1 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition duration-300"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
