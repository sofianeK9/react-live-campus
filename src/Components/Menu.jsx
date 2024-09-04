import React from 'react';
import { Link } from 'react-router-dom'; 

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <Link to="/" className="hover:text-gray-400">Mon Blog</Link>
        </div>
        <div className="space-x-4">
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
            to="/post"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
