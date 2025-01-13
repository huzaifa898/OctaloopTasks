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
    <div className="relative w-full min-h-screen bg-cover bg-center">
      <div className="relative mx-auto max-w-[1920px]">
        {/* Left Side Images */}
        <div className="hidden lg:block absolute left-0 top-0">
          {/* Image 1 */}
          <img
            src={Ass5}
            alt="Left Image 1"
            className="absolute"
            style={{
              width: '120px',
              height: '120px',
              top: '7268px',
              left: '360px',
            }}
          />
          {/* Image 2 */}
          <img
            src={Ass6}
            alt="Left Image 2"
            className="absolute"
            style={{
              width: '170px',
              height: '170px',
              top: '7455px',
              left: '360px',
            }}
          />
          {/* Image 3 */}
          <img
            src={Ass}
            alt="Left Image 3"
            className="absolute"
            style={{
              width: '120px',
              height: '120px',
              top: '7673px',
              left: '300px',
            }}
          />
          {/* Image 4 */}
          <img
            src={Ass1}
            alt="Left Image 4"
            className="absolute"
            style={{
              width: '120px',
              height: '120px',
              top: '7790px',
              left: '554px',
            }}
          />
        </div>

        {/* Right Side Images */}
        <div className="hidden lg:block absolute right-0 top-0">
          {/* Image 1 */}
          <img
            src={Ass2}
            alt="Right Image 1"
            className="absolute"
            style={{
              width: '170px',
              height: '170px',
              top: '7243px',
              left: '1174px',
            }}
          />
          {/* Image 2 */}
          <img
            src={Ass3}
            alt="Right Image 2"
            className="absolute"
            style={{
              width: '120px',
              height: '120px',
              top: '7335px',
              left: '1450px',
            }}
          />
          {/* Image 3 */}
          <img
            src={Ass4}
            alt="Right Image 3"
            className="absolute"
            style={{
              width: '170px',
              height: '170px',
              top: '7612px',
              left: '1450px',
            }}
          />
          {/* Image 4 */}
          <img
            src={Ass}
            alt="Right Image 4"
            className="absolute"
            style={{
              width: '170px',
              height: '170px',
              top: '7790px',
              left: '1225px',
            }}
          />
        </div>

        {/* Center Field */}
        <div
          className="absolute flex flex-col items-center justify-center"
          style={{
            width: '737px',
            height: '70px',
            top: '7551px',
            left: '591px',
          }}
        >
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-full px-6 py-3 border rounded-full shadow focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"
          >
            Generate
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center mt-8">
          {/* Left Images */}
          <div className="grid grid-cols-2 gap-4">
            <img src={Ass5} alt="Left Image 1" className="w-20 h-20" />
            <img src={Ass6} alt="Left Image 2" className="w-32 h-32" />
            <img src={Ass} alt="Left Image 3" className="w-20 h-20" />
            <img src={Ass1} alt="Left Image 4" className="w-20 h-20" />
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <img src={Ass2} alt="Right Image 1" className="w-32 h-32" />
            <img src={Ass3} alt="Right Image 2" className="w-20 h-20" />
            <img src={Ass4} alt="Right Image 3" className="w-32 h-32" />
            <img src={Ass} alt="Right Image 4" className="w-32 h-32" />
          </div>

          {/* Field */}
          <div className="mt-8 w-full px-4">
            <input
              type="text"
              placeholder="Fantasy Creature holding a sword..."
              className="w-full px-6 py-3 border rounded-full shadow focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 w-full"
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
