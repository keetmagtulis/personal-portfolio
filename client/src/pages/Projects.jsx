import React from "react";
import {motion} from "framer-motion";


const Projects = () => {

    return (
      <div className="flex justify-center items-center min-h-screen" id="projects">
    
        {/* Grid with fixed size items */}
        <div className="grid gap-7 p-10 lg:grid-rows-3 lg:grid-cols-1" 
             style={{ gridTemplateRows: '600px 600px 600px', width: '86%' }}> {/* Fixed height for each row */}
          
        {/* Project 1 */}
        <motion.div className="bg-gradient-to-br from-neutral-900 to-violet-800 rounded-lg shadow-md p-6 h-full flex items-center justify-between">
          {/* Text Section */}
          <div className="w-1/2">
            <h2 className="text-neutral-100 text-3xl font-semibold mb-2 drop-shadow-lg">
              SERVICE DESK CHATBOT
            </h2>
            <p className="text-lg text-neutral-100 mb-4">
              This Service desk Chat-Bot enhances the Intranet Website by providing users with quick answers to frequently asked questions (FAQs) and basic support. Built using the Rasa framework, this Chat-Bot is designed to streamline user interactions and provide efficient support.
            </p>
            <div className="flex flex-wrap mt-5 space-x-3">
              <img src="/images/python.png" alt="Error" className="w-10 h-10 bg-transparent" />
              <img src="/images/javascript.png" alt="Error" className="w-10 h-10 bg-transparent" />
              <img src="/images/HTML.png" alt="Error" className="w-10 h-10 bg-transparent" />
              <img src="/images/CSS3.png" alt="Error" className="w-10 h-10 bg-transparent" />
            </div>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-transparent border border-neutral-100 text-white px-6 py-2 mt-5 rounded-full flex items-center justify-center drop-shadow-xl">
              View Project
            </motion.button>
          </div>

          {/* Image Section */}
          <div className="w-1/2 flex justify-center">
            <img
              src="/images/chatbot.png"
              alt="Chatbot Project"
              className=" rounded-lg mb-4"
            />
          </div>
        </motion.div>

          {/* Project 2 */}
          <motion.div className="bg-white rounded-lg shadow-md p-6 h-full">

            <img
            src="/images/skills-background.jpg"
            alt="Profile"
            className="w-full h-60 object-cover rounded-lg mb-4"
            />

            <h2 className="text-gray-800 text-2xl font-semibold mb-2 border-neutral-600 pb-2 drop-shadow-lg">
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
                              
        </div>
      </div>
    );
}

export default Projects;
