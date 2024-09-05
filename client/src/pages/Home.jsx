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
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          className="w-1/3 h-96 rounded-full overflow-hidden border-none">
        
          
          <img src="/images/profile_picture.jpg" alt="Profile" className="w-full h-full object-cover" />
        
        </motion.div>
        
        <motion.div 
          initial={{opacity: 0, x:'100vw'}}
          animate={{opacity: 1, x: 0}}
          transition={{type: 'spring', stiffness: 70, delay: 0.3}}
          className=" max-w-md">
          
          <h2 className="text-stone-900 text-5xl font-semibold">SOFTWARE</h2>
          <h1 className="text-stone-900 text-7xl mb-2 font-bold">DEVELOPER</h1>
          <p>Hi, I’m Kit. I’m an IT Professional with 2 years of experience focusing on IT and Technical Support, Network Administration, Active Directory Management, and Software Development.</p>

          <motion.button 
            whileHover={{ scale: 1.1}}
            whileTap={{scale: 0.8}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-red-700 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl" 
            onClick={onButtonClick}>
            Download CV <img src="/images/download.ico" alt="Download" className="w-3 ml-3 flex items-center justify-center"></img>
          </motion.button>

        </motion.div>

      </div>
    
  );
};

export default Home;
