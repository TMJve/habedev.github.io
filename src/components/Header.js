import React from 'react';

const Header = ({ name }) => (
  <header className="bg-purple-500 text-white p-6">
    <h1 className="text-3xl font-bold">Happy Birthday, {name}!</h1>
  </header>
);

export default Header;
