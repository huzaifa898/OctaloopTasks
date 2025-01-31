// CustomButton.js
import React from 'react';

const CustomButton = ({ text, bgColor, textColor, onClick }) => {
  return (
    <button
      className={`py-2 px-6 rounded ${bgColor} ${textColor} opacity-90 hover:opacity-100 transition`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
