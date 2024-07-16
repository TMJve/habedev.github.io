import React from 'react';

const photos = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
];

const PhotoGallery = () => (
  <section className="p-6">
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index + 1}`} className="rounded-lg shadow-md" />
      ))}
    </div>
  </section>
);

export default PhotoGallery;
