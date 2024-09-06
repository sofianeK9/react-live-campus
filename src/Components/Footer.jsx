import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Mon Blog</h2>
          <p className="text-sm">© 2024 Mon Blog. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
