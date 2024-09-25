import React, {useState, useEffect} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/index.css';

const NavBar = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

      let timeoutId;

      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        if(scrollTop > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        // Always show the div when the user is at the top of the page
        if (scrollTop === 0) {
          setIsVisible(true);
          clearTimeout(timeoutId);
          
          return;
        }
    
        // Show the div when the user scrolls
        setIsVisible(true);
    
        // Hide the div after 1.5 seconds of no scrolling if not hovered
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (!isHovered) {
            setIsVisible(false);
          }
        }, 1500);
      };
    
      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);
    
      // Cleanup scroll event listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timeoutId);
      };
    }, [isHovered]);
   



    const handleMouseEnter = () => {
      setIsVisible(true);
      setIsHovered(true);

    };
    
    const handleMouseLeave = () => {
      
      setTimeout(() => {
        if (isHovered) {
          setIsVisible(false);
          setIsHovered(false);
        }
      }, 1000);
    };

  return (

    <motion.nav
      id="home"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex w-full mx-auto py-4 items-center top-0"
      
    >
      {/* Centered Navigation Links */}
        <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`navigation fixed left-1/2 transform -translate-x-1/2 flex mt-4 px-8 py-4 z-40 transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
        
      >
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


      { /*Soc Med Contact Icons*/}
      <div className="ml-auto flex items-center mr-7 mt-2  space-x-3">
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
