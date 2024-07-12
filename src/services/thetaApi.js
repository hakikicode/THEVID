import axios from 'axios';

const THETA_API_BASE_URL = 'https://api.thetanetwork.com'; // Replace with actual API URL

export const uploadVideo = async (file) => {
  const formData = new FormData();
  formData.append('video', file);

  try {
    const response = await axios.post(`${THETA_API_BASE_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading video:', error);
    throw error;
  }
};

export const getVideos = async () => {
  try {
    const response = await axios.get(`${THETA_API_BASE_URL}/videos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
