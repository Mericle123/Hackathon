import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/Frame 2.png'; // Replace with the actual path to your logo

const Navbar = () => {
  return (
    <nav className="bg-[#F2F2F2] py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-3" />
        <Link to="/" className="text-xl font-semibold text-[#212121]">LOGO</Link>
        <div className="hidden md:flex space-x-6 ml-12">
          <Link to="/create" className="text-[#757575] hover:text-black font-medium">Create</Link>
          <Link to="/nft" className="text-[#757575] hover:text-black font-medium">Owned NFT</Link>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-black hover:bg-[#333333] text-white font-bold py-3 px-6 rounded-lg mr-4 text-sm hidden md:block">
          Connect Wallet
        </button>
        <button className="bg-black rounded-full h-10 w-10 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 4.944a13.937 13.937 0 019.874 12.86m-4.555 0C5.342 21.118 7.086 22 9 22h8c1.914 0 3.658-.882 3.889-1.894m-6.185 0a13.942 13.942 0 00-6.562-11.282m0 0a13.938 13.938 0 00-3.863 3.855m1.194-13.73l8.847 8.848m-4.424-4.425l8.846-8.847m0 0V4m0 5h.01" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
