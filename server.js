const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dummy video data
let videos = [
  { id: 1, title: "Video 1", url: "https://example.com/video1" },
  // Add more dummy videos
];

app.get('/videos', (req, res) => {
  res.json(videos);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
