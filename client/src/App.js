import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

function App() {
  const [videoId, setVideoId] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://yt-backend-hdtm.onrender.com', { videoId });
      setVideoUrl(response.data.url);
    } catch (error) {
      console.error('Error fetching video URL:', error.message);
    }
  };

  return (
    <div>
      <h1>YouTube Video Playback</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter YouTube Video ID (unlisted):
          <input type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)} />
        </label>
        <button type="submit">Fetch Video</button>
      </form>
      {videoUrl && <ReactPlayer url={videoUrl} controls />}
    </div>
  );
}

export default App;

