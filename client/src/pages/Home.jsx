import React from "react";
import '../../src/styles/index.css'; // Ensure this file imports Tailwind CSS correctly
import { motion } from "framer-motion";




const Home = () => {

  const onButtonClick = () => {
    const pdfUrl = "/Kit _Magtulis_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Kit_Magtulis_CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


  return (
    
      <div className="flex items-center justify-center space-x-16 rounded-lg mx-auto w-3/4 min-h-auto mt-32 mb-32">
        
        
        <motion.div 

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            whileHover={{scale:1.1, rotate: 360, transition: {
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 7,
                stiffness: 300,
                restDelta: 0.001
            }}
              
            }}
          className="w-1/3 h-96 rounded-full overflow-hidden border-none ">
        
          
          <img src="/images/profile_picture.jpg" alt="Profile" className="w-full h-full object-cover" />
        
        </motion.div>
        
        <motion.div 
          initial={{opacity: 0, x:'100vw'}}
          animate={{opacity: 1, x: 0}}
          transition={{type: 'spring', stiffness: 50, delay: 0.2}}
          
          className=" max-w-md">
          <div>
          <h2 className="text-5xl font-semibold bg-gradient-to-r from-black via-neutral-700 to-neutral-500 bg-clip-text text-transparent">SOFTWARE</h2>
          <h1 className="text-7xl font-semibold bg-gradient-to-r from-black via-neutral-700 to-neutral-500 bg-clip-text text-transparent">DEVELOPER</h1>
          </div>

          <p className="mt-3">Hi, I’m Kit. I’m an IT professional with a deep curiosity for technology and how things work.</p>

          

          <motion.button 
            whileHover={{scale: 1.1,}}
            whileTap={{scale: 0.8}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-neutral-800 text-white px-6 py-2 mt-2 rounded-full flex items-center justify-center drop-shadow-xl"
            onClick={onButtonClick}>
            Download CV <img src="/images/download.ico" alt="Download" className="w-3 ml-3 flex items-center justify-center"></img>   
          </motion.button>


        
        </motion.div>


      </div>
    
  );
};

export default Home;
