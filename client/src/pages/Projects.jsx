import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {Link as RouterLink} from "react-router-dom";


const Projects = () => {

  const scrollRef = useRef(null);

  const project1_images = [
    "/images/project1-images/chatbot.png",
    "/images/project1-images/ai-chatbot.png",
    "/images/project1-images/chatbot-github.png",
  ]

  const project2_images = [
      "images/project2-images/nike-v2k.png",
      "images/project2-images/nike-aj1.png",
      "images/project2-images/designed-shoes.png",
  ]

  useEffect(() => {

    const interval = setInterval(() =>{
      setCurrentIndex((prev) => prev === project1_images.length - 1 ? 0 : prev + 1)
    }, 4000);

    return () => clearInterval(interval);

    }, [project1_images.length]);

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
      <div className="flex justify-center items-center min-h-screen" id="projects">
    
        {/* Grid with fixed size items */}
        <div className="grid gap-7 p-10 lg:grid-rows-3 lg:grid-cols-1" 
             style={{ gridTemplateRows: '600px 600px 600px', width: '86%' }}> {/* Fixed height for each row */}
          
        {/* Project 1 */}
        <motion.div
        className="bg-gradient-to-r from-black from-0% via-gray-900 via-50% to-blue-700 to-100% rounded-lg p-6 h-full flex items-center justify-between drop-shadow-2xl"
        initial= {{ opacity: 0, x: 50}}
        whileInView={{opacity: 1, x: 0 ,  
        transition: {
        delay: 0.3,
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        }}}

        viewport={{root: scrollRef}}>

          {/* Text Section */}
          <div className="w-1/2 px-5">
            <h2 className="text-neutral-100 text-6xl font-semibold mb-2 drop-shadow-lg">
              SERVICE DESK CHATBOT
            </h2>
            <p className="text-lg font-light text-neutral-300 mb-4">
              This Service desk Chat-Bot enhances the Intranet Website by providing users with quick answers to frequently asked questions (FAQs) and basic support. Built using the Rasa framework, this Chat-Bot is designed to streamline user interactions and provide efficient support.
            </p>
            <div className="flex flex-wrap mt-5 space-x-3">
              <img src="/images/python.png" alt="Error" className="w-10 h-10 bg-transparent" />
              <img src="/images/javascript.png" alt="Error" className="w-10 h-10 bg-transparent" />
              <img src="/images/HTML.png" alt="Error" className="w-10 h-10 bg-transparent" />
              <img src="/images/CSS3.png" alt="Error" className="w-10 h-10 bg-transparent" />
            </div>
            
            <RouterLink 
             to="https://github.com/keetmagtulis/service-desk-chatbot" target="_blank"
            >
                
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-transparent border border-neutral-100 text-white px-6 py-2 mt-7 rounded-full flex items-center justify-center drop-shadow-xl">
                View Project
              </motion.button>

            </RouterLink>
 
          </div>

          {/* Image Section */}
          <div className="w-1/2 flex justify-center items-center relative">
            <motion.img
              key={project1_images[currentIndex]}
              src={project1_images[currentIndex]}
              alt="Chatbot Project Images"
              className=" rounded-lg mb-4"
              initial={{opacity: 0, scale: 0.9, x: 50}}
              animate={{opacity: 1, scale: 1, x: 0}}
              exit={{opacity: 0, scale: 0.9, x: -50}}
              transition={{duration: 0.7}}
            />
          </div>
        </motion.div>

          {/* Project 2 */}
          <motion.div
          className="bg-gradient-to-r from-black from-0% via-neutral-900 via-50% to-neutral-700 to-100% rounded-lg p-6 h-full flex items-center justify-between drop-shadow-2xl"
          initial= {{ opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0 ,  
          transition: {
          delay: 0.3,
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          }}}

          viewport={{root: scrollRef}}>

            {/* Text Section */}
            <div className="w-1/2 px-5">
              <h2 className="text-neutral-100 text-6xl font-semibold mb-1 drop-shadow-lg">
                SHOEPIFY 
              </h2>
              <h3 className="text-neutral-400 text-xl font-light mb-4 drop-shadow-lg">E-COMMERCE WEBSITE</h3>
              <p className="text-lg  text-neutral-300 mb-4 font-light">
                Shoe-pify is a shoe e-commerce website where customers can customize and design their shoes on their own liking and make it a reality. Website comes with an administrator feature where you can check your sales and productivity.
              </p>
              <div className="flex flex-wrap mt-5 space-x-3">
                <img src="/images/javascript.png" alt="Error" className="w-10 h-10 bg-transparent" />
                <img src="/images/react.png" alt="Error" className="w-10 h-10 bg-transparent" />
                <img src="/images/HTML.png" alt="Error" className="w-10 h-10 bg-transparent" />
                <img src="/images/CSS3.png" alt="Error" className="w-10 h-10 bg-transparent" />
              </div>
              
              <RouterLink 
              to="" target="_blank"
              >
                  
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-transparent border border-neutral-100 text-white px-6 py-2 mt-7 rounded-full flex items-center justify-center drop-shadow-xl">
                  View Project
                </motion.button>

              </RouterLink>
  
            </div>

            {/* Image Section */}
            <div className="w-1/2 flex justify-center items-center relative">
              <motion.img
                key={project2_images[currentIndex]}
                src={project2_images[currentIndex]}
                alt="Chatbot Project Images"
                className=" rounded-lg mb-4"
                initial={{opacity: 0, scale: 0.9, x: 50}}
                animate={{opacity: 1, scale: 1, x: 0}}
                exit={{opacity: 0, scale: 0.9, x: -50}}
                transition={{duration: 0.7}}
              />
            </div>
        </motion.div>

          {/* Project 3 */}
          <motion.div className="bg-gradient-to-r from-black from-0% via-neutral-900 via-50% to-neutral-700 to-100% rounded-lg shadow-md p-6 h-full"
          initial= {{ opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0 ,  
          transition: {
          delay: 0.3,
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          }}}
          viewport={{root: scrollRef}}>
          </motion.div>


                              
        </div>
      </div>
    );
}

export default Projects;
