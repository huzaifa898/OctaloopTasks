import React from "react";
import logo from '../Images/logo.png'
const ConnectWallet = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Header */}
        <div className="text-center">
          <h1 className="text-lg font-bold mb-2">CONNECT YOUR WALLET</h1>
          <div className="flex items-center justify-center mb-4">
            <img
              src= {logo}
              alt="Fry Networks Logo"
              className="h-12"
            />
          </div>
          <h2 className="text-red-500 text-lg font-semibold">Fry Networks</h2>
        </div>

        {/* Wallet Options */}
        <div className="mt-6 space-y-3">
          <button className="flex items-center w-full border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
            <img
              src="/path/to/pera.png" // Replace with Pera logo path
              alt="Pera Logo"
              className="h-6 mr-2"
            />
            <span>Pera</span>
          </button>

          <button className="flex items-center w-full border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
            <img
              src="/path/to/defly.png" // Replace with Defly logo path
              alt="Defly Logo"
              className="h-6 mr-2"
            />
            <span>Defly</span>
          </button>

          <button className="flex items-center w-full border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
            <img
              src="/path/to/daffi.png" // Replace with Daffi logo path
              alt="Daffi Logo"
              className="h-6 mr-2"
            />
            <span>Daffi</span>
          </button>

          <button className="flex items-center w-full border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50">
            <img
              src="/path/to/walletconnect.png" // Replace with WalletConnect logo path
              alt="WalletConnect Logo"
              className="h-6 mr-2"
            />
            <span>WalletConnect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
