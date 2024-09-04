// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GcitNFT is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    struct NFTDetails {
        string title;
        string description;
        uint256 price;
        string tokenURI;
        address payable owner;
        bool isListedForSale;
    }

    mapping(uint256 => NFTDetails) public nftDetails;

    constructor() ERC721("NFTBot", "NFTB") Ownable() {}

    // Function to mint a new NFT and list it for sale
    function mintNft(string memory title, string memory description, string memory tokenURI, uint256 price) public returns (uint256) {
        require(price > 0, "Price must be greater than zero");

        uint256 tokenId = _nextTokenId;
        _nextTokenId++;
        
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        nftDetails[tokenId] = NFTDetails({
            title: title,
            description: description,
            price: price,
            tokenURI: tokenURI,
            owner: payable(msg.sender),
            isListedForSale: true
        });

        return tokenId;
    }

    // Function to approve an address to transfer the specified NFT
    function approveNft(uint256 tokenId, address to) public {
        NFTDetails storage nft = nftDetails[tokenId];
        require(msg.sender == nft.owner, "Only the NFT owner can approve transfers");
        approve(to, tokenId);
    }

    // Function to buy a listed NFT
    function buyNft(uint256 tokenId) public payable {
        NFTDetails storage nft = nftDetails[tokenId];
        require(nft.isListedForSale, "NFT is not listed for sale");
        require(msg.value >= nft.price, "Insufficient Ether sent");

        address seller = nft.owner;
        require(seller != msg.sender, "Buyer cannot be the owner");

        // Transfer Ether to the current owner (seller)
        nft.owner.transfer(msg.value);

        // Transfer the NFT from the seller to the buyer
        safeTransferFrom(seller, msg.sender, tokenId);

        // Update the NFT's owner and set it as not listed for sale
        nft.owner = payable(msg.sender);
        nft.isListedForSale = false;

        // Clear the approval for the token to avoid unauthorized transfers
        approve(address(0), tokenId);
    }

    // Function to get the details of the NFT
    function getNftDetails(uint256 tokenId) public view returns (string memory title, string memory description, uint256 price, string memory tokenURI, address owner, bool isListedForSale) {
        NFTDetails memory details = nftDetails[tokenId];
        return (details.title, details.description, details.price, details.tokenURI, details.owner, details.isListedForSale);
    }

    // Optional: Function to allow NFT owner to list the NFT for sale again
    function listNftForSale(uint256 tokenId, uint256 price) public {
        NFTDetails storage nft = nftDetails[tokenId];
        require(msg.sender == nft.owner, "Only the owner can list this NFT for sale");
        require(price > 0, "Price must be greater than zero");

        nft.price = price;
        nft.isListedForSale = true;
    }
}
