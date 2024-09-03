import React from "react";
import {motion} from 'framer-motion';


const About= () => {


    return (

    <div className="flex justify-center items-center min-h-screen" id="about">
        
        <div className="grid gap-6 p-10 lg:grid-cols-2 w-4/5 ">

      
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-gray-800 text-4xl font-semibold mb-4 border-b-2 border-red-700 pb-2 drop-shadow-lg">ABOUT ME</h2>
              <p className="text-lg">My name is Kit, and I'm a guy with a deep curiosity for technology and how things work. I love exploring new innovations and constantly learning about the latest trends. Outside of tech, I enjoy going out, playing games, strumming on my guitar, and diving into good books. Whether it’s understanding the latest gadget or simply enjoying my hobbies, I’m always eager to explore and learn something new.</p>

              <motion.button 
                whileHover={{ scale: 1.1}}
                whileTap={{scale: 0.8}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-red-700 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl" >
                See More
              </motion.button>

            </div>
          
            <div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-5">
              <h2 className="text-gray-800 text-xl font-bold mb-4 border-b-2 border-red-700 pb-2">SKILLS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-gray-800 text-xl font-bold mb-4 border-b-2 border-red-700 pb-2">WORK EXPERIENCE</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            </div>

            
    
        </div>



    </div>

      
    
    
    );

}

export default About; 