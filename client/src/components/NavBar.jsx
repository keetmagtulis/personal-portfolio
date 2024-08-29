import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const NavBar = () => {
  return (
    <nav className="relative flex w-full mx-auto py-1 items-center">
      {/* Centered Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-3">
        <Link
          to="/"
          className="text-gray-700 hover:underline px-2 py-2 rounded-md text-s font-normal"
        >
          HOME
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:underline px-2 py-2 rounded-md text-s font-normal"
        >
          ABOUT
        </Link>
        <Link
          to="/projects"
          className="text-gray-700 hover:underline px-2 py-2 rounded-md text-s font-normal"
        >
          PROJECTS
        </Link>
        <Link
          to="/socials"
          className="text-gray-700 hover:underline px-2 py-2 rounded-md text-s font-normal"
        >
          SOCIALS
        </Link>
      </div>

      <div className="ml-auto flex items-center">
        <Link to="https://github.com/keetmagtulis">
          <img src="/images/github-sign.png" alt="" className="w-7 h-7 mx-3" />
        </Link>
        <Link to="https://www.linkedin.com/in/kit-magtulis-0532362b7/">
          <img src="/images/linkedin.png" alt="Github" className="w-7 h-7 mx-3" />
        </Link>
        <Link to="mailto:magtuliskit8@gmail.com">
          <img src="/images/email.png" alt="" className="w-7 h-7 mx-3" />
        </Link>
        <Link to="https://www.messenger.com/t/100054884522654">
          <img src="/images/facebook.png" alt="" className="w-7 h-7 mx-3" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
