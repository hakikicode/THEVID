import React, { useEffect, useState } from 'react';
import { getVideos } from '../services/thetaApi';
import VideoCard from './VideoCard';
import Leaderboard from './Leaderboard';

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos();
        setVideos(data);
      } catch (error) {
        console.error('Error loading videos:', error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="homepage">
      <h1>Video NFTs</h1>
      <Leaderboard />
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
