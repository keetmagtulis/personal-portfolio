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
      className="flex w-full mx-auto py-4 items-center top-0"
      id="home"
    >
      {/* Centered Navigation Links */}
      <div className="fixed left-1/2 transform -translate-x-1/2 flex space-x-3 bg-neutral-100  shadow-lg  rounded-full p-3 z-40 ">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer text-neutral-700 px-2 py-2 rounded-md text-s font-normal"
        >
          <motion.div
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >HOME
          </motion.div>
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer text-neutral-700 px-2 py-2 rounded-md text-s font-normal"
        >
          <motion.div
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.9 }}
            
          >ABOUT
          </motion.div>

        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer text-neutral-700  px-2 py-2 rounded-md text-s font-normal"
        >

          <motion.div
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >PROJECTS
          </motion.div>
          
        </Link>
        <RouterLink
          to="/socials"
          className="text-neutral-700  px-2 py-2 rounded-md text-s font-normal"
        >
          <motion.div
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >CONTACT
          </motion.div>
          
        </RouterLink>
      </div>

      { /*Soc Med Contact Icons*/}
      <div className="ml-auto flex items-center mr-7">
        <RouterLink to="https://github.com/keetmagtulis">
          <motion.img
            whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          src="/images/github-sign.png" alt="" className="w-7 h-7 mx-2" />
        </RouterLink>

        <RouterLink to="https://www.linkedin.com/in/kit-magtulis-0532362b7/">
          <motion.img 
           whileHover={{ scale: 1.1}}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
          src="/images/linkedin.png" alt="Github" className="w-7 h-7 mx-2" />
        </RouterLink>
        
        <RouterLink to="mailto:magtuliskit8@gmail.com">
          <motion.img 
           whileHover={{ scale: 1.1}}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
          src="/images/email.png" alt="" className="w-7 h-7 mx-2" />
        </RouterLink>
        
        <RouterLink to="https://www.messenger.com/t/100054884522654">
          <motion.img 
           whileHover={{ scale: 1.1}}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
          src="/images/facebook.png" alt="" className="w-7 h-7 mx-2" />
        </RouterLink>
      </div>
    </motion.nav>
  );
};

export default NavBar;
