import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = ({ onNameSubmit }) => {
  const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.toLowerCase() === "vrinly") {  // Convert name to lowercase for comparison
      const fartSound = new Audio('/sounds/fart.mp3');  // Ensure the path is correct
      fartSound.play();
      onNameSubmit(name);
      navigate('/main');
    } else {
      setIsError(true);
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: isError ? 'url(/images/images.jpg)' : 'url(/images/bg.jpg)' }}  // Ensure the path is correct
    >
      <form onSubmit={handleSubmit} className="text-center p-4 bg-white rounded-lg shadow-md">
        {!isError && <h1 className="text-2xl mb-4">Enter your name</h1>}
        {isError ? (
          <h1 className="text-red-500 text-4xl">YANG BENER GA BEB?! REFRESH PAGENYA SKRG TRUS ISI LAGI :D</h1>
        ) : (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded mb-4 w-full"
              placeholder="Your name"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Welcome;
