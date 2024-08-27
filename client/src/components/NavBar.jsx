import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css'

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center w-full mx-auto py-1">
              <div className="flex space-x-3 justify-center items-center">
                <Link to="/" className="text-gray-700 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-s font-medium">HOME</Link>
                <Link to="/about" className="text-gray-700 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-s font-medium">ABOUT</Link>
                <Link to="/projects" className="text-gray-700 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-s font-medium">PROJECTS</Link>
                <Link to="/socials" className="text-gray-700 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-s font-medium">SOCIALS</Link>
              </div>

    </nav>
  );
};

export default NavBar;
