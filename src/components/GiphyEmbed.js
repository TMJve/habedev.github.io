import React from 'react';

const GiphyEmbed = () => {
  return (
    <div className="flex justify-center my-4">
      <iframe 
        src="https://giphy.com/embed/kaMwwM91UCxstRfvA3" 
        width="670" 
        height="850" 
        frameBorder="0" 
        className="giphy-embed" 
        allowFullScreen
        title="Giphy Embed"
      ></iframe>
      <p><a href="https://giphy.com/gifs/BookCameo-funny-cute-happy-birthday-kaMwwM91UCxstRfvA3"></a></p>
    </div>
  );
}

export default GiphyEmbed;
