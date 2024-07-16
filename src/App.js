import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import Messages from './components/Messages';
import MemoryTimeline from './components/MemoryTimeline';
import MusicPlaylist from './components/MusicPlaylist';
import Footer from './components/Footer';
import GiphyEmbed from './components/GiphyEmbed';
import Balloon from './components/Balloon';
import './App.css'

const MainContent = ({ name }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const audio = new Audio('/sounds/george.mp3');
      audio.volume = 0.5; // Set the volume to 50%
      audio.play();
    }, 1500); // Play the audio after 3 seconds

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="App">
      <Header name={name} />
      <GiphyEmbed />
      <Balloon color="red" size="large" delay="0s" />
      <Balloon color="blue" size="medium" delay="2s" />
      <Balloon color="green" size="small" delay="4s" />
      <PhotoGallery />
      <Messages />
      <Footer />
    </div>
  );
};

function App() {
  const [name, setName] = useState('');

  const handleNameSubmit = (name) => {
    setName(name);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome onNameSubmit={handleNameSubmit} />} />
        <Route path="/main" element={<MainContent name={name} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
