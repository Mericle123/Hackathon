import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Frame 2.png';

const Footer = () => {
    return (
        <footer class="bg-gray-200 pt-4 p px-0 text-center mt-8">
        <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-4">
                <img src={logo} alt="Logo" class="w-full h-full object-cover rounded-full" />
            </div>
            <p class="text-gray-700 px-4 mb-4">
                Experience The Next Generation Of Digital Art Auctions Where Your Bids Are Secured On The Blockchain, <br />
                Ensuring Authenticity And Transparency. Trust In A Decentralized Platform That Prioritizes <br />Your Security And Ownership.
            </p>
            <div className="flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
        </div>
        <p class="bg-gray-300 py-6 text-center mt-8 ">©Name 2024</p>
    </footer>
    );
};

export default Footer;