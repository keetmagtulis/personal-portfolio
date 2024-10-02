import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/index.css';
import { useEffect, useState } from 'react';

const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [isHovered, setIsHovered] = useState(false);

  useEffect(()=> {
    
    const handleScroll = () => {

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if( scrollTop > 55) {
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


  const handleMouseEnter = () => {
    setShowNav(true);
    setIsHovered(true);
  };

  const hoveredNavBar = () => {

    setShowNav(true);
    setIsHovered(true);

  };

 
  const handleMouseLeave = () => {
   
    setTimeout(() => {
      if (isHovered) {
        setShowNav(false);
        setIsHovered(false);
      }
    }, 3500);
  };





  return (

    <div>

    <motion.nav
      id="home"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex w-full py-4 items-center top-0"
      
    >
      <div className={`navigation flex mx-auto translate-x-24 px-8 z-40 transition-all duration-500 ease-in-out`} >
        
        <ul className='unordered-list'>

        {/* <Link
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
        
        </Link> */}

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


    <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed bottom-5 transform -translate-x-1/2  rounded-lg flex items-center z-50 justify-center   ${ isScrolled ? 'scroll-top-show': 'scroll-top'}`}
        style={{left:'50%'}} 
      >

        <motion.button
        className='h-3 w-72 rounded-lg flex items-center bg-neutral-800 justify-center  cursor-pointer border border-neutral-700'
        whileHover={{scale:1.1}}
        >

        </motion.button>
      
      </motion.div>
    
    <AnimatePresence>
        {showNav && (



              <motion.div 
                className={`bottom-10 fixed transform -translate-x-1/2  flex items-center justify-center z-50 w-1/3`}
                style={{left:'50%'}} 
                initial={{ opacity: 0,}} 
                animate={{ opacity: 1, }} 
                exit={{ opacity: 0,}} 
                transition={{ duration: 0.3 }} 
              >
                <motion.div
                  onMouseEnter={hoveredNavBar}
                  onMouseLeave={handleMouseLeave}
                  className={`flex items-center justify-center bg-neutral-800 rounded-lg w-full h-20 space-x-2`}
                  initial={{ opacity: 0, translateY: 20 }} 
                  animate={{ opacity: 1, translateY: 0 }} 
                  exit={{ opacity: 0, translateY: 20 }}   
                  transition={{ duration: 0.3, ease: "easeInOut" }}>    
                    <Link
                          to="home"
                          spy={true}
                          smooth={true}
                          duration={400}
                          offset={0}
                          className='cursor-pointer'
                          
                        >
                        <motion.button
                        className="px-4 py-2 text-white w-full h-16"
                        whileHover={{scale:1.1, background: "rgb(90,90,90,0.5)"}}
                        onClick={() => setShowNav(false)}>HOME
                        
                        </motion.button>
                    </Link>

                    <Link
                          to="about"
                          spy={true}
                          smooth={true}
                          duration={400}
                          offset={-20}
                          className='cursor-pointer'
                          
                        >
                        <motion.button
                        className="px-4 py-2 text-white w-full h-16"
                        whileHover={{scale:1.1, background: "rgb(90,90,90,0.5)"}}
                        onClick={() => setShowNav(false)}>ABOUT
                        
                        </motion.button>
                    </Link>

                    <Link
                          to="projects"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={10}
                          className='cursor-pointer'
                          
                        >
                        <motion.button
                        className="px-4 py-2  text-white w-full h-16"
                        whileHover={{scale:1.1, background: "rgb(90,90,90,0.5)"}}
                        onClick={() => setShowNav(false)}>PROJECTS
                        
                        </motion.button>
                    </Link>

                    <Link
                          to="contact"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={10}
                          className='cursor-pointer'
                          
                        >
                        <motion.button
                        className="px-4 py-2  text-white w-full h-16"
                        whileHover={{scale:1.1, background: "rgb(90,90,90,0.5)"}}
                        onClick={() => setShowNav(false)}>CONTACT
                        
                        </motion.button>
                    </Link>
                </motion.div>
              
              </motion.div>
     
        )}
      </AnimatePresence>


    </div>

  );
};

export default NavBar;
