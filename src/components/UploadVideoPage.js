import React, { useState } from 'react';
import { web3, contract } from '../blockchain';

const UploadVideoPage = () => {
  const [videoUrl, setVideoUrl] = useState('');

  const uploadVideo = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      await contract.methods.uploadVideo(videoUrl).send({ from: accounts[0] });
      console.log('Video uploaded successfully');
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={uploadVideo}>Upload</button>
    </div>
  );
};

export default UploadVideoPage;
