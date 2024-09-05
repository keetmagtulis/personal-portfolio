import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/index.css';

const NavBar = () => {
  return (
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative flex w-full mx-auto py-1 items-center"
    >
      {/* Centered Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-3">
        <RouterLink
          to="/"
          className="text-gray-700 hover:underline px-2 py-2 rounded-md text-s font-normal"
        >
          HOME
        </RouterLink>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer text-gray-700 hover:underline px-2 py-2 rounded-md text-s font-normal"
        >
          ABOUT
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer text-gray-700 hover:underline px-2 py-2 rounded-md text-s font-normal"
        >
          PROJECTS
        </Link>
        <RouterLink
          to="/socials"
          className="text-gray-700 hover:underline px-2 py-2 rounded-md text-s font-normal"
        >
          CONTACT
        </RouterLink>
      </div>

      <div className="ml-auto flex items-center">
        <RouterLink to="https://github.com/keetmagtulis">
          <img src="/images/github-sign.png" alt="" className="w-7 h-7 mx-2" />
        </RouterLink>
        <RouterLink to="https://www.linkedin.com/in/kit-magtulis-0532362b7/">
          <img src="/images/linkedin.png" alt="Github" className="w-7 h-7 mx-2" />
        </RouterLink>
        <RouterLink to="mailto:magtuliskit8@gmail.com">
          <img src="/images/email.png" alt="" className="w-7 h-7 mx-2" />
        </RouterLink>
        <RouterLink to="https://www.messenger.com/t/100054884522654">
          <img src="/images/facebook.png" alt="" className="w-7 h-7 mx-2" />
        </RouterLink>
      </div>
    </motion.nav>
  );
};

export default NavBar;
