import React from 'react';

const Balloon = ({ color, size, delay }) => (
  <div
    className={`balloon ${size}`}
    style={{
      backgroundColor: color,
      animationDelay: delay,
    }}
  ></div>
);

export default Balloon;
