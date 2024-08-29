import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css'

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center w-full mx-auto py-1">
              <div className="flex space-x-3 justify-center items-center">
                <Link to="/" className="text-gray-700 hover:underline px-2 py-2 rounded-md text-s font-normal">HOME</Link>
                <Link to="/about" className="text-gray-700 hover:underline px-2 py-2 rounded-md text-s font-normal">ABOUT</Link>
                <Link to="/projects" className="text-gray-700 hover:underline  px-2 py-2 rounded-md text-s font-normal">PROJECTS</Link>
                <Link to="/socials" className="text-gray-700 hover:underline  px-2 py-2 rounded-md text-s font-normal">SOCIALS</Link>
              </div>

              <div className='flex justify-end py-1'>
                <Link to="https://github.com/keetmagtulis">
                  <img src="/images/github-sign.png" alt="" className='size-7 mx-2'/>
                </Link>
                <Link to="https://www.linkedin.com/in/kit-magtulis-0532362b7/">
                  <img src="/images/linkedin.png" alt="Github" className='size-7 mx-2'/>
                </Link>
                <Link to="mailto:magtuliskit8@gmail.com">
                  <img src="/images/email.png" alt="" className='size-7 mx-2'/>
                </Link>
                <Link to="https://www.messenger.com/t/100054884522654">
                <img src="/images/facebook.png" alt="" className='size-7 mx-2'/>
                </Link>
              </div>

    </nav>
  );
};

export default NavBar;
