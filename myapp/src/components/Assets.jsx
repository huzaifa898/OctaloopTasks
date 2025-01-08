import React from 'react';
import Ass from '../Images/Ass.png'
import Ass1 from '../Images/Ass1.png'
import Ass2 from '../Images/Ass2.png'
import Ass3 from '../Images/Ass3.png'
import Ass4 from '../Images/Ass4.png'
import Ass5 from '../Images/Ass5.png'
import Ass6 from '../Images/Ass6.png'
import Ass7 from '../Images/Ass7.png'
function App() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 relative">
      <div className="w-full max-w-4xl text-center mb-96 relative">
        {/* Tagline */}
        <h1 className="text-3xl font-bold mb-44">TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET</h1>

        {/* Images */}
        {/* Left Side Images */}
        <div className="absolute top-12 left-[-100px]">
          <img
            src={Ass4}
            alt="Left 1"
            className="w-26 h-26 rounded-full mb-4 translate-x-12 translate-y-0"
          />
          <img
            src={Ass5}
            alt="Left 2"
            className="w-110 h-110 rounded-full mb-4 translate-x-12 translate-y-4"
          />
          <img
            src={Ass6}
            alt="Left 3"
            className="w-100 h-100 rounded-full mb-4 translate-x-0 translate-y-16"
          />
          <img
            src={Ass7}
            alt="Left 4"
            className="w-100 h-100 rounded-full translate-x-[96px] translate-y-16"
          />
        </div>

        {/* Search Bar in Middle */}
        <div className="relative inline-block z-10">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-96 p-4 border rounded-full shadow focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            className="absolute right-2 top-2.5 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"
          >
            Generate
          </button>
        </div>

        {/* Right Side Images */}
        <div className="absolute top-12 right-[-100px]">
          <img
            src={Ass3}
            alt="Right 1"
            className="w-80px h-80px rounded-full mb-4 translate-x-[-96px] translate-y-0"
          />
          <img
            src={Ass2}
            alt="Right 2"
            className="w-20 h-20 rounded-full mb-4 translate-x-20 translate-y-4"
          />
          <img
            src={Ass}
            alt="Right 3"
            className="w-40 h-40 rounded-full mb-4 translate-x-20 translate-y-12"
          />
          <img
            src={Ass1}
            alt="Right 4"
            className="w-100px h-100px rounded-full translate-x-[-96px] translate-y-16"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
