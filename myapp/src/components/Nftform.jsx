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

  return (
    <div className="flex flex-col items-center">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-3" style={{ width: '1320px', height: '100px' }}>
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
      <div className="flex justify-start mt-10" style={{ width: '1320px' }}>
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
      <div className="mt-8 relative" style={{ width: '1320px' }}>
        {/* Image and Selection Tag */}
        <img
          src={mnt}
          alt="NFT"
          style={{ width: '296px', height: '309px', borderRadius: '20px 0px 0px 0px' }}
        />
        <div className="absolute top-40 left-28 bg-gray-200 text-black font-apex px-2 py-1 rounded-br-lg">
          Selected
        </div>

        {/* Form Section */}
        <div
          className="absolute bg-white p-8 rounded-lg shadow-lg"
          style={{ width: "900px", top: "0px", left: "426px" }}
        >
          <h1 className="text-center font-bold text-2xl mb-6">MINT YOUR NFT</h1>
          <form>
            {/* Item Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-apex mb-2">Item Name*</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Name your NFT"
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

            {/* Choose Collection */}
            <div className="mb-4 flex justify-between items-center">
              <label className="block text-gray-700 font-apex mb-2">Choose Collection</label>
              <Link to='/choosecollection'>
              <p className="text-sm text-gray-500 mb-2">Choose from Existing</p>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              (This is the collection where your item will appear)
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="p-2 border border-gray-300 rounded-lg w-full text-center"
              >
                + Create new collection
              </button>
              <div className="p-2 border border-gray-300 rounded-lg w-full flex items-center">
                <img
                  src={icon1}
                  alt="Wonderful Artwork"
                  className="w-10 h-10 mr-2 rounded-full"
                />
                <span>Wonderful Artwork</span>
              </div>
            </div>

            {/* Add Traits Section */}
            <div className="mb-4">
              <label className="block text-gray-700 font-apex mb-2">Add Traits</label>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, laudantium.</p>
              {traits.map((trait, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border p-2 rounded-lg mb-2"
                >
                  <span>{trait.key} : {trait.value}</span>
                  <button
                    type="button"
                    onClick={() => removeTrait(index)}
                    className="text-red-500"
                  >
                    X
                  </button>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowTraitForm(true)}
                  className="p-2 bg-white text-black border border-gray-300 rounded-lg flex items-center gap-2"
                >
                  <FaPlus /> Add Traits
                </button>
              </div>
              <div className="mt-4 border-t-2 border-transparent border-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Mint NFT
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Add Traits Form Modal */}
      {showTraitForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-[618px] h-[342px] top-0 gap-0 border-t-8 border-t-gray-300">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600"
              onClick={() => setShowTraitForm(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl text-center font-apex mb-4">Add Trait</h2>
            <form>
              <div className="mb-4 mt-16 flex gap-4 justify-center">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-apex mb-2">Trait Type</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    value={newTraitKey}
                    onChange={(e) => setNewTraitKey(e.target.value)}
                    placeholder="ype"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 font-apex mb-2">Trait Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    value={newTraitValue}
                    onChange={(e) => setNewTraitValue(e.target.value)}
                    placeholder="Name "
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
                  onClick={addTrait}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nftform;
