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
    <div className="py-16 px-4 md:px-6">
      <h2 className="text-3xl font-apex text-start ml-4 mb-12 md:ml-20 lg:ml-80">
        PROMPT EXAMPLES
      </h2>
      <div className="grid grid-cols-1 gap-6 max-w-[1320px] mx-auto md:grid-cols-2">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow mx-auto"
            style={{ width: "100%", maxWidth: "577px", height: "auto" }}
          >
            {/* Image Section */}
            <div className="relative w-full sm:w-1/3 lg:w-full">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full h-[200px] sm:h-full"
              />
              {/* Copy Icon positioned on the right border of the image */}
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg sm:top-1/4 sm:right-1 sm:transform-none sm:-translate-y-0"
                aria-label="Copy"
              >
                <FaRegCopy className="text-red-600 text-xl" />
              </button>
            </div>

            {/* Text Section */}
            <div className="p-4 w-full sm:w-2/3 lg:w-full">
              <h3 className="text-lg font-apex text-gray-800">{card.title}</h3>
              <p className="text-sm font-apex text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromptExamples;
