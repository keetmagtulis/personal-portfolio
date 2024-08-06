import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
     
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
          <Link to="/contacts" className="text-white hover:text-gray-400">Contacts</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
