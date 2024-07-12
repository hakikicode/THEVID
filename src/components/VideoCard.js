import React from 'react';
import { web3, contract } from '../blockchain';

const VideoCard = ({ video }) => {
  const mintNFT = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      await contract.methods.mintVideoNFT(video.url, video.metadata).send({ from: accounts[0] });
      console.log('NFT minted successfully');
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };

  return (
    <div className="video-card">
      <h2>{video.title}</h2>
      <video src={video.url} controls />
      <button onClick={mintNFT}>Mint NFT</button>
    </div>
  );
};

export default VideoCard;
