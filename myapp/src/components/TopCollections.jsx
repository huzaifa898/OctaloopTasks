import React from "react";
import IconImage from "../Images/icon.png";
import col from '../Images/col.png';
import col1 from '../Images/col1.png';
import col2 from '../Images/col2.png';
import col4 from '../Images/col4.png';
import col5 from '../Images/col5.png';
import {Link} from 'react-router-dom';

const ExploreCollections = () => {
  const categories = ["Popular", "Trending", "Sports", "Art", "Fantasy", "Photography", "Space"];
  const cards = [
    {
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      items: "1.5k",
      image: col,
    },
    {
      title: "AMAZING CREATION",
      creator: "Sophia Brown",
      items: "2.1k",
      image: col1,
    },
    {
      title: "MAGICAL VIBES",
      creator: "Liam Wilson",
      items: "800",
      image: col2,
    },
    {
      title: "FANTASTIC DESIGN",
      creator: "Emma Davis",
      items: "1.2k",
      image: col2,
    },
    {
      title: "FANTASTIC DESIGN",
      creator: "Emma Davis",
      items: "1.2k",
      image: col4,
    },
    {
      title: "FANTASTIC DESIGN",
      creator: "Emma Davis",
      items: "1.2k",
      image: col5,
    },
    {
      title: "FANTASTIC DESIGN",
      creator: "Emma Davis",
      items: "1.2k",
      image: col2,
    },
    {
      title: "FANTASTIC DESIGN",
      creator: "Emma Davis",
      items: "1.2k",
      image: col2,
    },
  ];

  return (
    <div className="min-h-screen px-4 lg:px-20 py-10">
      {/* Section Heading */}
      <div className="mx-auto max-w-full lg:max-w-screen-xl">
        <h2 className="text-3xl md:text-5xl font-apex text-gray-800 mb-10 text-left">
          EXPLORE OUR COLLECTIONS
        </h2>
      </div>

      {/* Subcategories */}
      <div className="flex justify-start space-x-4 lg:space-x-6 overflow-x-auto mb-12 mx-auto max-w-full lg:max-w-screen-xl">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 lg:px-6 lg:py-3 rounded-full font-semibold ${
              category === "Popular"
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto max-w-full lg:max-w-screen-xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 w-full"
          >
            {/* Card Header */}
            <div className="flex items-center p-4 lg:p-6 space-x-4 lg:space-x-6">
              <img
                src={IconImage}
                alt="Icon"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
              />
              <div>
                <h3 className="text-md lg:text-lg font-semibold">{card.title}</h3>
                <p className="text-sm font-apex text-gray-500">Created by {card.creator}</p>
              </div>
            </div>

            {/* Card Image with Overlay */}
            <div className="relative">
              <Link to='/pxocards'>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 lg:h-64 object-cover"
                />
              </Link>
              <div className="absolute bottom-0 left-0 w-full text-black bg-opacity-60 text-center text-sm font-semibold py-2 rounded-t-lg">
                Items: {card.items}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCollections;
