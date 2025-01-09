import React from "react";
import sell from '../Images/Sell.png';
import sell1 from '../Images/sell1.png';
import sell2 from '../Images/sell2.png';
import sell3 from '../Images/sell3.png';
import sell4 from '../Images/sell4.png';
import { Link } from "react-router-dom";

const CollectionCard = ({ title, creator, creatorImage, images }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto">
      <div className="grid grid-cols-2 gap-2 mb-4">
        {images.slice(0, 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Artwork"
            className="rounded-lg w-full h-32 object-cover"
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {images.slice(2, 6).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Artwork"
            className="rounded-lg w-full h-24 object-cover"
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <img
          src={creatorImage}
          alt={creator}
          className="w-10 h-10 rounded-full border-2 border-blue-500"
        />
        <div>
          <p className="font-bold text-lg">{title}</p>
          <p className="text-gray-500 text-sm">Created by {creator}</p>
        </div>
      </div>
    </div>
  );
};

const TopCollections = () => {
  const collections = [
    {
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: sell,
      images: [
        sell,
        sell1,
        sell2,
        sell3,
        sell4,
        sell4,
      ],
    },
    {
      title: "AMAZING CREATIONS",
      creator: "Emily Smith",
      creatorImage: sell1,
      images: [
        sell1,
        sell,
        sell2,
        sell3,
        sell4,
        sell2,
      ],
    },
    {
      title: "FANTASTIC DESIGNS",
      creator: "Michael Brown",
      creatorImage: sell2,
      images: [
        sell2,
        sell3,
        sell4,
        sell,
        sell1,
        sell3,
      ],
    },
    // Add more collections here
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Top Collections</h2>
        <Link to='/veiwcollection'>
          <h2 className="text-blue-600 font-medium hover:underline">
            View More Collection
          </h2>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection, index) => (
          <CollectionCard
            key={index}
            title={collection.title}
            creator={collection.creator}
            creatorImage={collection.creatorImage}
            images={collection.images}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCollections;
