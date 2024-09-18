import React from "react";
import {motion} from "framer-motion";
import { FaPython, } from 'react-icons/fa';

const Projects = () => {

    return (
      <div className="flex justify-center items-center min-h-screen" id="projects">
    
        {/* Grid with fixed size items */}
        <div className="grid gap-7 p-10 lg:grid-rows-3 lg:grid-cols-1" 
             style={{ gridTemplateRows: '600px 600px 600px', width: '86%' }}> {/* Fixed height for each row */}
          
          {/* Project 1 */}
          <motion.div className="bg-neutral-100 rounded-lg shadow-md p-6 h-full">
            <img
            src="/images/about-me-background.jpg"
            alt="Profile"
            className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-gray-800 text-2xl font-semibold  mb-4 pb-2 drop-shadow-lg">
            SERVICE DESK CHATBOT
            </h2>
            <p className="text-lg  w-1/2">
            This Service desk Chat-Bot enhances the Intranet Website by providing users with quick answers to frequently asked questions (FAQs) and basic support. Built using the Rasa framework, this Chat-Bot is designed to streamline user interactions and provide efficient support.
            </p>
            
            <motion.div        
                    className="flex items-center gap-2 text-gray-800 mt-2 text-lg p-3 bg-gray-200 rounded shadow-lg cursor-pointer w-40"
                  >
                    <span className="text-xl">{<FaPython />}</span> 
                    Python
            </motion.div>


            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-red-800 text-white px-6 py-2 mt-5 rounded-full flex items-center justify-center drop-shadow-xl">
              View Project
            </motion.button>

          </motion.div>
          
          {/* Project 2 */}
          <motion.div className="bg-white rounded-lg shadow-md p-6 h-full">

            <img
            src="/images/skills-background.jpg"
            alt="Profile"
            className="w-full h-60 object-cover rounded-lg mb-4"
            />

            <h2 className="text-gray-800 text-2xl font-semibold mb-4  border-neutral-600 pb-2 drop-shadow-lg">
              PROJECT NAME
            </h2>
            <p className="text-lg w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae libero excepturi consequatur at hic sapiente quia voluptatem saepe quaerat nobis. Atque totam ab debitis tempora. Dolorem deleniti explicabo earum ratione.
            </p>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-red-800 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl">
              View Project
            </motion.button>
          </motion.div>
          
          {/* Project 3 */}
          <motion.div className="bg-white rounded-lg shadow-md p-6 h-full">
            <h2 className="text-gray-800 text-4xl font-semibold mb-4 border-b-2 border-red-700 pb-2 drop-shadow-lg">
              PROJECT NAME
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt pariatur veniam architecto odio voluptas est recusandae deserunt minus unde quod illo non ex sequi incidunt, totam illum perspiciatis dolorem.
            </p>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-red-700 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl">
              View Project
            </motion.button>
          </motion.div>
          
        </div>
      </div>
    );
}

export default Projects;
