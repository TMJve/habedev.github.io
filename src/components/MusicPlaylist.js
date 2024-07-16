import React from 'react';

const playlist = [
  { title: 'Song 1', artist: 'Artist 1', src: 'song1.mp3' },
  { title: 'Song 2', artist: 'Artist 2', src: 'song2.mp3' },
];

const MusicPlaylist = () => (
  <section className="p-6">
    <h2 className="text-2xl font-bold mb-4">Music Playlist</h2>
    <ul>
      {playlist.map((song, index) => (
        <li key={index} className="mb-2">
          <div className="font-semibold">{song.title}</div>
          <div className="text-gray-600">{song.artist}</div>
          <audio controls className="w-full mt-2">
            <source src={song.src} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </li>
      ))}
    </ul>
  </section>
);

export default MusicPlaylist;
