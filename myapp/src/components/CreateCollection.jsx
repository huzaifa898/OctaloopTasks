import React, { useState } from "react";
import logo from '../Images/logo.png';
import mnt from '../Images/mnt.png';
import { FaSignInAlt, FaUserPlus, FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../Images/icon1.png';

function Nftform() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/mntnft');
  };

  const [traits, setTraits] = useState([{ key: "blue", value: "fox" }]);
  const [newTraitKey, setNewTraitKey] = useState("");
  const [newTraitValue, setNewTraitValue] = useState("");
  const [showTraitForm, setShowTraitForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const addTrait = () => {
    if (newTraitKey && newTraitValue) {
      setTraits([...traits, { key: newTraitKey, value: newTraitValue }]);
      setNewTraitKey("");
      setNewTraitValue("");
      setShowTraitForm(false);
    }
  };

  const removeTrait = (index) => {
    setTraits(traits.filter((_, i) => i !== index));
  };

  const handleCreateNewCollectionClick = () => {
    navigate('/newcollection');
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-0">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-3 w-full max-w-screen-xl">
        <div className="text-xl font-bold text-red-600">
          <img src={logo} alt="Logo" className="h-10 w-auto md:h-24 md:w-24" />
        </div>
        <ul className="flex space-x-4 md:space-x-6">
          <Link to="/">
            <li className="text-gray-700 hover:text-red-600 font-apex font-bold cursor-pointer">Home</li>
          </Link>
          <li className="text-red-700 font-bold text-xl font-apex cursor-pointer">AI NFT Generation</li>
        </ul>
        <div className="flex space-x-2">
          <FaSignInAlt className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
          <FaUserPlus className="text-gray-700 hover:text-red-600 text-xl cursor-pointer" />
        </div>
      </nav>

      {/* Navigation Buttons */}
      <div className="flex justify-start mt-10 w-full max-w-screen-xl">
        <button
          onClick={handleBackClick}
          className="bg-gray-200 text-gray-700 font-apex px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Back
        </button>
        <button
          className="bg-transparent text-gray-700 font-apex px-4 py-2 rounded-lg border ml-4"
          style={{
            width: '129px',
            height: '51px',
            borderRadius: '15px 0px 0px 0px',
            border: '2.8px solid rgba(231, 231, 231, 1)',
          }}
        >
          Single NFT
        </button>
      </div>

      {/* Main Content */}
      <div className="mt-8 relative w-full max-w-screen-xl">
        {/* Image and Selection Tag */}
        <div className="relative md:block hidden">
          <img
            src={mnt}
            alt="NFT"
            className="w-[296px] h-[309px] rounded-[20px_0_0_0]"
          />
          <div className="absolute top-40 left-28 bg-gray-200 text-black font-apex px-2 py-1 rounded-br-lg">
            Selected
          </div>
        </div>

        {/* Choose File Button */}
        <div className="mt-4">
          <input type="file" onChange={handleFileChange} className="w-full" />
          {selectedFile && <p className="mt-2 font-apex text-gray-700">{selectedFile.name}</p>}
        </div>

        {/* Form Section */}
        <div
          className="absolute bg-white p-8 rounded-lg shadow-lg w-full md:w-[900px] top-20 md:left-[426px] left-0 mx-4 md:mx-0"
        >
          <h1 className="text-center font-apex text-2xl mb-6">Create Collection</h1>
          <form>
            {/* Item Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-apex mb-2">Collection Name*</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Name your Collection"
              />
            </div>

            {/* Token Symbol Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-apex mb-2">Token Symbol*</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="$ CGPT, for example"
              />
            </div>

            {/* Description Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-apex mb-2">Description</label>
              <p className="text-sm text-gray-500 mb-2">
                The description will be included on the item's detail page underneath its image.
              </p>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Provide a detailed description of your item"
                style={{ height: "140px" }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <Link to='/profile'>
                <button
                  type="submit"
                  className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Continue
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Add Traits Form Modal */}
    </div>
  );
}

export default Nftform;
