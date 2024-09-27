import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/index.css';
import { useEffect, useState } from 'react';

const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false) 

  useEffect(()=> {
    
    const handleScroll = () => {

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if( scrollTop > 50) {
          setIsScrolled(true);
      } else {
          setIsScrolled(false);
      }
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []) 

  return (

    <motion.nav
      id="home"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex w-full py-4 items-center top-0"
      
    >
      <div className={`navigation flex mx-auto translate-x-32 px-8 z-40 transition-all duration-500 ease-in-out`} >
        
        <ul className='unordered-list'>

        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}
          className="link"
        >
          <motion.div className="pages">
            HOME
          </motion.div>
        
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="link" 
        >
          <motion.div className="pages">
            ABOUT
          </motion.div>
        </Link>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="link"
        >
          <motion.div className="pages">
            PROJECTS
          </motion.div>
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="link"
        >
          <motion.div className="pages">
           CONTACT
          </motion.div>
        </Link>

        </ul>
   
      </div>

      <motion.div className={`bottom-2 right-2 fixed bg-neutral-800 h-12 w-12 rounded-lg flex items-center justify-center ${ isScrolled ? 'scroll-top-show': 'scroll-top'}`}
        whileHover={{scale: 1.1}} 
        whileTap= {{scale: 0.9}} 
        transition={{type: "spring", stiffness: 500, damping: 20}}
          >
      
      <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}
          className='cursor-pointer'
          
        >
        <motion.button 
        ><img src="/images/up-arrow.png" alt="" className='w-7 h-7' /></motion.button>
    
        </Link>
      </motion.div>

      <div className="flex space-x-3 mr-5">
        <RouterLink to="https://github.com/keetmagtulis" target="_blank">
          <motion.img
            whileHover={{ scale: 1.3}}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          src="/images/github-sign.png" alt="" className="w-7 h-7" />
        </RouterLink>

        <RouterLink to="https://www.linkedin.com/in/kit-magtulis-0532362b7/" target="_blank">
          <motion.img 
           whileHover={{ scale: 1.3}}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
          src="/images/linkedin.png" alt="Github" className="w-7 h-7" />
        </RouterLink>
        
        <RouterLink to="mailto:magtuliskit8@gmail.com" target="_blank">
          <motion.img 
           whileHover={{ scale: 1.3}}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
          src="/images/email.png" alt="" className="w-7 h-7 " />
        </RouterLink>
        
        <RouterLink to="https://www.messenger.com/t/100054884522654" target="_blank">
          <motion.img 
           whileHover={{ scale: 1.3}}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
          src="/images/facebook.png" alt="" className="w-7 h-7 " />
        </RouterLink>
      </div>
    </motion.nav>
  );
};

export default NavBar;
