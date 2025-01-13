import React, { useState } from "react";
import Mask1 from '../Images/mask1.png';
import Mask2 from '../Images/Mask2.png';
import Mask3 from '../Images/Mask3.png';
import Mask4 from '../Images/Mask4.png';
import image7 from '../Images/images7.png';    

const FeaturedCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, image: Mask1, price: "142.02", title: "Card 1", name: "John Doe", description: "Creative Designer" },
    { id: 2, image: Mask2, price: "142.02", title: "Card 2", name: "Jane Smith", description: "Web Developer" },
    { id: 3, image: Mask3, price: "142.02", title: "Card 3", name: "Alex Taylor", description: "Digital Marketer" },
    { id: 4, image: Mask4, price: "142.02", title: "Card 4", name: "Chris Brown", description: "Product Manager" },
    { id: 5, image: image7, price: "142.02", title: "Card 5", name: "Sara Wilson", description: "UI/UX Designer" },
    { id: 6, image: image7, price: "142.02", title: "Card 6", name: "David Lee", description: "Data Scientist" },
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
    <div className="py-10 px-5">
      <div className="relative max-w-6xl mx-auto">
        {/* Title and Subtext */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <div>
            <h2 className="text-3xl font-apex ml-4 md:ml-0">
              Featured Collection
            </h2>
            <p className="text-gray-500 font-apex ml-4 md:ml-0">
              Explore our exclusive featured collection, showcasing innovative.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-red-500 shadow-lg"
            >
              &#9664; {/* Previous */}
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-red-500 shadow-lg"
            >
              &#9654; {/* Next */}
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-4 overflow-hidden">
          {cards.slice(currentIndex, currentIndex + cardsPerSlide).map((card) => (
            <div
              key={card.id}
              className="relative w-full md:w-[270px] mx-2 mb-4 md:mb-0 p-4 bg-white rounded-lg shadow-lg transition-all duration-500 ease-in-out transform scale-100"
            >
              {/* Profile Section at the Top */}
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">
                  {card.name.charAt(0)} {/* Placeholder for an icon */}
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">{card.name}</p>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>
              </div>

              {/* Card Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-lg object-cover w-full h-[200px]"
                  style={{ objectFit: 'cover' }}
                />
                {/* Buttons on the bottom of the image */}
                <div className="absolute inset-x-0 bottom-0 flex justify-between p-2">
                  <button className="bg-red-500 font-apex text-white px-4 py-2 text-sm rounded-lg hover:bg-red-600">
                    Buy
                  </button>
                  <p className="bg-white font-apex bg-opacity-75 text-gray-800 font-bold px-3 py-2 rounded-lg">
                    Price: {card.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
