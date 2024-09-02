//hackathon home
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import "./Home.css"
class NFTGallery extends React.Component {
  render() {
    const nfts = [
      { title: 'Creative Creature', floor: '<0.01ETH', volume: '<0.01ETH', image: 'https://via.placeholder.com/150' },
      { title: 'Creative Creature 2', floor: '<0.01ETH', volume: '<0.01ETH', image: 'https://via.placeholder.com/150/' },
      { title: 'Creative Creature 3', floor: '<0.01ETH', volume: '<0.01ETH', image: 'https://via.placeholder.com/150' },
      { title: 'Creative Creature 4', floor: '<0.01ETH', volume: '<0.01ETH', image: 'https://via.placeholder.com/150/' },
      { title: 'Creative Creature 5', floor: '<0.01ETH', volume: '<0.01ETH', image: 'https://via.placeholder.com/150/FFFFFF' },
      { title: 'Creative Creature 6', floor: '<0.01ETH', volume: '<0.01ETH', image: 'https://via.placeholder.com/150/FFFFFF' },
      { title: 'Big Hugs 1', floor: '<0.01ETH', volume: '<0.01ETH', image: 'https://via.placeholder.com/150/FFFFFF' },
      { title: 'Big Hugs 2', floor: '<0.01ETH', volume: '<0.01ETH', image: 'https://via.placeholder.com/150/FFFFFF' },
      { title: 'Big Hugs 3', floor: '<0.01ETH', volume: '<0.01ETH', image: 'https://via.placeholder.com/150/FFFFFF' },
    ];

    return (
      <div className="bg-gray-100 min-h-screen">
        <header className="p-4 bg-white shadow-md">
          <div className="text-lg font-bold">LOGO</div>
          <nav >
            <button className="mr-4">Create</button>
            <button className='mr-4'>Owned NFT</button>
          </nav>
          <button className="bg-black text-white px-4 py-2 rounded ml">Connect Wallet</button>
          <button className="bg-black text-white px-4 py-2 rounded">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
          </button>
        </header>
        <main className="p-4">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Trending in Gaming</h2>
            <div className="grid grid-cols-3 gap-4">
              {nfts.slice(0, 8).map((nft, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={nft.image} alt={nft.title} className="h-48 w-full object-cover mb-2 rounded" />
                  <h3 className="font-medium">{nft.title}</h3>
                  <p>Floor: {nft.floor}</p>
                  <p>24h Volume: {nft.volume}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-4">Trending in Art</h2>
            <div className="grid grid-cols-3 gap-4">
              {nfts.slice(0, 8).map((nft, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={nft.image} alt={nft.title} className="h-48 w-full object-cover mb-2 rounded" />
                  <h3 className="font-medium">{nft.title}</h3>
                  <p>Floor: {nft.floor}</p>
                  <p>24h Volume: {nft.volume}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default NFTGallery;
