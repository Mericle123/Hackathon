import React, { useState } from 'react';
import Navbar from '../navbar'; 

const CreateNFT = () => {
  const [nftData, setNftData] = useState({
    name: 'Name your NFT',
    supply: 1,
    description: 'Enter a Description',
    externalLink: 'http://collection.io/item.333'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNftData({ ...nftData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle NFT creation logic here
    console.log(nftData);
  };

  return (
    <>
      <div><Navbar/></div>
      <div className="min-h-screen p-6">
        <h1 className="text-2xl font-semibold mb-2">Create an NFT</h1>
        <p className="text-sm mb-8">Once your item is minted, you will not be able to change any of its information.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Drag and Drop section */}
          <div className="bg-gray-200 border-dashed border-2 border-gray-400 h-72 md:h-96 flex flex-col justify-center items-center mb-8 rounded-lg">
            <span className="text-l font-semibold">Drag and Drop Media</span>
            <span className="text-sm">Max Size: 50MB</span>
            <span className="text-sm">JPG, PNG, GIF, SVG, MP4</span>
          </div>

          {/* Right Form Fields */}
          <div className="flex flex-col space-y-2">
            <div>
              <label className="text-sm font-semibold block mb-1" htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={nftData.name}
                onChange={handleChange}
                required
                className="bg-gray-200 w-full text-sm p-1 border border-gray-500 rounded"                
              />
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1" htmlFor="supply">Supply*</label>
              <input
                type="number"
                id="supply"
                name="supply"
                value={nftData.supply}
                onChange={handleChange}
                required
                className="bg-gray-200 w-full text-sm p-1 border border-gray-500 rounded"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1" htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={nftData.description}
                onChange={handleChange}
                className="bg-gray-200 w-full text-sm p-1 border border-gray-500 rounded"
                rows="4"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1" htmlFor="externalLink">External Link</label>
              <input
                type="url"
                id="externalLink"
                name="externalLink"
                value={nftData.externalLink}
                onChange={handleChange}
                className="bg-gray-200 w-full text-sm p-1 border border-gray-500 rounded mb-3"
              />
            </div>
            <button type="submit" className="bg-black text-white py-2 px-2 rounded">
            Create
          </button>
          </div>

          
        </form>
      </div>
    </>
  );
};

export default CreateNFT;
