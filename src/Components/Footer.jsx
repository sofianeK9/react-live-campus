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
        <div className="flex space-x-4">
          <Link
            to="/blogs"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            Créer un article
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
