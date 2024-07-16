import React from 'react';

const messages = [
  'Semoga di umur ini u semakin dewasa dan sehat selalu, selalu jadi Vrinly yang i Sayang dan Vrinly yang CUMAN PUNYA I',
  'Selalu sehat di umur 19, SEHAT SELALU SYG, PIJAK-PIJAK!',
  'I love you to the moon and back.. <3',
];

const Messages = () => (
  <section className="p-6 bg-gray-100">
    <h2 className="text-2xl font-bold mb-4">Kata-kata untuk nona Cantik</h2>
    <ul>
      {messages.map((message, index) => (
        <li key={index} className="mb-2 p-4 bg-white rounded-lg shadow-md">
          {message}
        </li>
      ))}
    </ul>
  </section>
);

export default Messages;
