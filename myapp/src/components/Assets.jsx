import React from 'react';
import Ass from '../Images/Ass.png'
import Ass1 from '../Images/Ass1.png';
import Ass2 from '../Images/Ass2.png';
import Ass3 from '../Images/Ass3.png';
import Ass4 from '../Images/Ass4.png';
import Ass5 from '../Images/Ass5.png';
import Ass6 from '../Images/Ass6.png';

function App() {
  return (
    <div className=" w-full min-h-screen  flex justify-center items-center">
      <div className="relative max-w-[1920px] w-full">
        {/* Left Side Images */}
        <div className="absolute left-0 top-0 hidden lg:block">
          <img
            src={Ass5}
            alt="Left Image 1"
            className=" w-[320px] h-[120px] top-[100px] left-[100px]"
          />
          <img
            src={Ass6}
            alt="Left Image 2"
            className="absolute w-[170px] h-[170px] top-[300px] left-[60px]"
          />
          <img
            src={Ass}
            alt="Left Image 3"
            className="absolute w-[120px] h-[120px] top-[500px] left-[60px]"
          />
          <img
            src={Ass1}
            alt="Left Image 4"
            className="absolute w-[120px] h-[120px] top-[700px] left-[60px]"
          />
        </div>

        {/* Right Side Images */}
        <div className="absolute right-0 top-0 hidden lg:block">
          <img
            src={Ass2}
            alt="Right Image 1"
            className="absolute w-[170px] h-[170px] top-[100px] right-[60px]"
          />
          <img
            src={Ass3}
            alt="Right Image 2"
            className="absolute w-[120px] h-[120px] top-[300px] right-[60px]"
          />
          <img
            src={Ass4}
            alt="Right Image 3"
            className="absolute w-[170px] h-[170px] top-[500px] right-[60px]"
          />
          <img
            src={Ass}
            alt="Right Image 4"
            className="absolute w-[170px] h-[170px] top-[700px] right-[60px]"
          />
        </div>

        {/* Center Input Field */}
        {/* <div
          className="absolute flex flex-col items-center justify-center"
          style={{
            top: '400px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-[737px] px-6 py-3 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition duration-300"
          >
            Generate
          </button>
        </div>

        {/* Mobile Layout */}
        <div className=" flex flex-col items-center mt-8">
          <div className="grid grid-cols-2 gap-4">
            <img src={Ass5} alt="Left Image 1" className="w-20 h-20" />
            <img src={Ass6} alt="Left Image 2" className="w-32 h-32" />
            <img src={Ass} alt="Left Image 3" className="w-20 h-20" />
            <img src={Ass1} alt="Left Image 4" className="w-20 h-20" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <img src={Ass2} alt="Right Image 1" className="w-32 h-32" />
            <img src={Ass3} alt="Right Image 2" className="w-20 h-20" />
            <img src={Ass4} alt="Right Image 3" className="w-32 h-32" />
            <img src={Ass} alt="Right Image 4" className="w-32 h-32" />
          </div>

          <div className="mt-8 w-50 px-4">
            <input
              type="text"
              placeholder="Fantasy Creature holding a sword..."
              className="w-full px-6 py-3 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <button
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition duration-300 w-full"
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
