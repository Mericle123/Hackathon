//hackathon home
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./Home.css";
class NFTGallery extends React.Component {
  render() {
    const nfts = [
      {
        title: "Creative Creature",
        floor: "<0.01ETH",
        volume: "<0.01ETH",
        image:
          "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631",
      },
      {
        title: "Creative Creature 2",
        floor: "<0.01ETH",
        volume: "<0.01ETH",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkP290uEH2BjU5Hrlqu2hOmj1mzege9IVzuw&s",
      },
      {
        title: "Creative Creature 3",
        floor: "<0.01ETH",
        volume: "<0.01ETH",
        image:
          "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg",
      },
      {
        title: "Creative Creature 4",
        floor: "<0.01ETH",
        volume: "<0.01ETH",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLveLVD-nNoGpwfhTuLszqxxc8kYOnO4sGaQ&s",
      },
      {
        title: "Creative Creature 5",
        floor: "<0.01ETH",
        volume: "<0.01ETH",
        image:
          "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg",
      },
      {
        title: "Creative Creature 6",
        floor: "<0.01ETH",
        volume: "<0.01ETH",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LNvfLgBFBV66189Bjjmb3gtz05c8Gey21Q&s",
      },
      {
        title: "Big Hugs 1",
        floor: "<0.01ETH",
        volume: "<0.01ETH",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xTSC6LxkBGTT-nosr6sb_MekBIBbN4GxJg&s",
      },
      {
        title: "Big Hugs 2",
        floor: "<0.01ETH",
        volume: "<0.01ETH",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfxjFtOhgggT9GczfuDT2Km2WiFno8W15cA&s",
      },
      {
        title: "Big Hugs 3",
        floor: "<0.01ETH",
        volume: "<0.01ETH",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lEbQ48-fDA3mz4WRlFUJEzrKYZcwhilqGw&s",
      },
    ];

    return (
      <>
        <div>
          <Navbar />
        </div>
        <div className="bg-gray-100 min-h-screen">
          <main className="p-4">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Trending in Gaming</h2>
              <div className="grid grid-cols-4 gap-4">
                {nfts.slice(0, 8).map((nft, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <img
                      src={nft.image}
                      alt={nft.title}
                      className="h-48 w-full object-cover mb-2 rounded"
                    />
                    <h3 className="font-large">
                      <strong>{nft.title}</strong>
                    </h3>
                    <p>Floor: {nft.floor}</p>
                    <p>24h Volume: {nft.volume}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-4">Trending in Art</h2>
              <div className="grid grid-cols-4 gap-4">
                {nfts.slice(0, 8).map((nft, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <img
                      src={nft.image}
                      alt={nft.title}
                      className="h-48 w-full object-cover mb-2 rounded"
                    />
                    <h3 className="font-medium">{nft.title}</h3>
                    <p>Floor: {nft.floor}</p>
                    <p>24h Volume: {nft.volume}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
          <div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default NFTGallery;
