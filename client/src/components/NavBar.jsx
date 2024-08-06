import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css'

const NavBar = () => {
  return (
    <nav className="bg-black flex justify-center items-center max-w-2xl mx-auto py-6 rounded-full">
              <div className="flex space-x-3 justify-center items-center">
                <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-s font-medium">Home</Link>
                <Link to="/about" className="text-white hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-s font-medium">About</Link>
                <Link to="/projects" className="text-white hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-s font-medium">Projects</Link>
                <Link to="/socials" className="text-white hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-s font-medium">Socials</Link>
              </div>

    </nav>
  );
};

export default NavBar;
