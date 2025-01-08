import React from "react";
import { FaRegCopy } from "react-icons/fa";
import image1 from "../Images/images1.png";
import image2 from "../Images/images2.png";
import image3 from "../Images/images3.png";
import image4 from "../Images/images4.png";
import image5 from "../Images/images5.png";
import image6 from "../Images/images6.png";
import image7 from "../Images/images7.png";

const cardsData = [
  {
    title: "DRAGON WORLD",
    description: "Amet mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque.",
    image: image1,
  },
  {
    title: "FANTASY",
    description: "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Nunc sed tincidunt.",
    image: image2,
  },
  {
    title: "DRAGON HOUSE",
    description: "Sed vitae orci mollis, ultrices augue id, laoreet tellus.",
    image: image3,
  },
  {
    title: "PRINCESS",
    description: "Sed vitae fermentum neque. Nunc sed tincidunt enim.",
    image: image4,
  },
  {
    title: "SPACE TEAM",
    description: "Nunc sed tincidunt enim, sed ultricies nisl.",
    image: image5,
  },
  {
    title: "SEA CREATURE",
    description: "Nunc sed tincidunt enim, sed ultricies nisl.",
    image: image6,
  },
  {
    title: "PIXEL GIRL",
    description: "Sed vitae fermentum neque. Nunc sed tincidunt enim.",
    image: image7,
  },
  {
    title: "SHADOW FIGHTER",
    description: "Sed vitae fermentum neque. Nunc sed tincidunt enim.",
    image: image7,
  },
];

function PromptExamples() {
  return (
    <div className="bg-gradient-to-r from-white via-pink-50 to-white py-16 px-6">
      <h2 className="text-3xl font-bold text-start ml-80 mb-12">PROMPT EXAMPLES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative flex bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
          >
            {/* Image Section */}
            <div className="relative w-1/3">
              <img src={card.image} alt={card.title} className="object-cover h-full w-full" />
              {/* Copy Icon positioned on the right border of the image */}
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg"
                aria-label="Copy"
              >
                <FaRegCopy className="text-red-600 text-xl" />
              </button>
            </div>

            {/* Text Section */}
            <div className="p-4 w-2/3">
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromptExamples;
