"use client";

import axios from "axios";
import { useState } from "react";

export default function Page() {
  const [url, setUrl] = useState('');
  const [audioUrl, setAudioUrl] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/track', { url });

      // Assuming res.data.track.audioBuffer.data is an array of numbers
      const audioBuffer = new Uint8Array(res.data.track.audioBuffer.data);
      console.log(audioBuffer);
      
      // Convert Uint8Array to Blob
      const blob = new Blob([audioBuffer.buffer], { type: 'audio/mp3' });
      const downloadUrl:any = URL.createObjectURL(blob);
      
      // Set the audioUrl state to enable the download button
      setAudioUrl(downloadUrl);
    } catch (error) {
      console.error('Error fetching audio:', error);
    }
  };

  return (
    <div>
      <input 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        type="text" 
        placeholder="Enter URL" 
      />
      <button onClick={handleSubmit}>Submit</button>

      {audioUrl && (
        <div>
          <a href={audioUrl} download="audio.mp3">
            <button>Download Audio</button>
          </a>
        </div>
      )}
    </div>
  );
}

