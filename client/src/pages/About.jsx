import React, { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion';




const About= () => {

const [selectedId, setSelectedId] = useState(null);

    return (

    <div className="flex justify-center items-center min-h-auto" id="about">
        
        <div className="grid gap-6 lg:grid-cols-2 w-4/5 ">

      
            <motion.div 
              layoutId="aboutme"
              className="bg-white rounded-lg shadow-md p-6">
                
                <h2 className="text-gray-800 text-4xl font-semibold mb-4 border-b-2 border-red-700 pb-2 drop-shadow-lg">ABOUT ME</h2>
                <p className="text-lg">My name is Kit, and I'm a guy with a deep curiosity for technology and how things work. I love exploring new innovations and constantly learning about the latest trends. Outside of tech, I enjoy going out, playing games, strumming on my guitar, and diving into good books. Whether it’s understanding the latest gadget or simply enjoying my hobbies, I’m always eager to explore and learn something new.</p>

                <motion.button 
                  whileHover={{ scale: 1.1}}
                  whileTap={{scale: 0.8}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => setSelectedId("aboutme")}
                  className="bg-red-700 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl" >
                  See More
                </motion.button>

            </motion.div>
          
            <div>

            <motion.div 
              layoutId="skills"
              className="bg-white rounded-lg shadow-md p-6 mb-5">
              
              <h2 className="text-gray-800 text-xl font-bold mb-4 border-b-2 border-red-700 pb-2">SKILLS</h2>
              <p>I am an IT professional with a diverse skill set that includes network administration, Active Directory management, database management, and software development. I excel in maintaining secure and efficient network environments, managing user access and data integrity, and developing software solutions that streamline processes. My expertise allows me to address a wide range of technical challenges and contribute to the smooth operation of any IT infrastructure.</p>

              <motion.button 
                  whileHover={{ scale: 1.1}}
                  whileTap={{scale: 0.8}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => setSelectedId("skills")}
                  className="bg-red-700 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl" >
                  See More
                </motion.button>

            </motion.div>
          
            
            <motion.div
              layoutId="experience"
              className="bg-white rounded-lg shadow-md p-6">
              
              <h2 className="text-gray-800 text-xl font-bold mb-4 border-b-2 border-red-700 pb-2">WORK EXPERIENCE</h2>
              <p>I have diverse experience in IT and customer service, specializing in network administration, Active Directory management, and technical support. My roles have involved managing network systems, user accounts, and providing tech support. I also have skills in database management and software development. In customer service, I handled technical support and billing for a telecom company, enhancing my problem-solving abilities and service skills.
              </p>

              <motion.button 
                  whileHover={{ scale: 1.1}}
                  whileTap={{scale: 0.8}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => setSelectedId("experience")}
                  className="bg-red-700 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl" >
                  See More
                </motion.button>

            </motion.div>

            </div>

            
    
        </div>

    <AnimatePresence>
        {selectedId && (
          <>
            {/* Blur Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />

            {/* Expandable Card */}
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 bg-white p-10 flex flex-col items-center justify-center rounded-md shadow-lg w-10/12 h-3/4 lg:w-1/2 max-w-xl mx-auto my-auto z-50"
            >
              
              {selectedId === "aboutme" && (
                <div>
                  <h2 className="text-gray-800 text-4xl font-semibold mb-4 border-b-2 border-red-700 pb-2 drop-shadow-lg">ABOUT ME</h2>
                  <p className="text-lg">My name is Kit, and I'm a guy with a deep curiosity for technology and how things work. I love exploring new innovations and constantly learning about the latest trends. Outside of tech, I enjoy going out, playing games, strumming on my guitar, and diving into good books. Whether it’s understanding the latest gadget or simply enjoying my hobbies, I’m always eager to explore and learn something new.</p>

                  <p className="text-lg">Additional Text for about me.</p>


                </div>
              )} 

                                
            {selectedId === "skills" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-gray-800 text-xl font-bold mb-4 border-b-2 border-red-700 pb-2">
                  SKILLS
                </h2>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1, // Adjust the delay between each item
                      },
                    },
                  }}
                >
                  {/* Skill Item */}
                  <motion.li
                    className="text-gray-800 text-lg mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    NETWORK ADMINISTRATION
                  </motion.li>
                  <motion.li
                    className="text-gray-800 text-lg mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    ACTIVE DIRECTORY MANAGEMENT
                  </motion.li>
                  <motion.li
                    className="text-gray-800 text-lg mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    DOMAIN MANAGEMENT
                  </motion.li>
                  <motion.li
                    className="text-gray-800 text-lg mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    SOFTWARE DEVELOPMENT
                  </motion.li>
                  <motion.li
                    className="text-gray-800 text-lg mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    WEB DEVELOPMENT
                  </motion.li>
                  <motion.li
                    className="text-gray-800 text-lg mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    REACT JS
                  </motion.li>
                  <motion.li
                    className="text-gray-800 text-lg mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    NODE JS / EXPRESS
                  </motion.li>
                  <motion.li
                    className="text-gray-800 text-lg mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    PYTHON
                  </motion.li>
                  <motion.li
                    className="text-gray-800 text-lg mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    TAILWIND CSS / BOOTSTRAP
                  </motion.li>
                  <motion.li
                    className="text-gray-800 text-lg mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    SQL
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}

          {selectedId === "experience" && (
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full max-w-lg"
              >
                <h2 className="text-gray-800 text-xl font-bold mb-4 border-b-2 border-red-700 pb-2">WORK EXPERIENCE</h2>
                <div className="relative border-l-2 border-gray-600 pl-6">
                  {/* Experience 1 */}
                  <motion.div
                    className="mb-10 relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {/* Dot on the line */}
                    <div className="absolute -left-6 top-1.5">
                      <div className="w-3 h-3 bg-white rounded-full border-2 border-gray-600"></div>
                    </div>
                    <p className="text-gray-600">2023-Present</p>
                    <h3 className="text-gray-800 text-lg font-bold mt-1">
                      JUNIOR TECHNICAL SUPPORT ANALYST
                    </h3>
                    <p className="text-gray-500">Philippine EDS Techno-Service, Inc. | Iloilo City, Philippines 5000</p>
                  </motion.div>

                  {/* Experience 2 */}
                  <motion.div
                    className="mb-10 relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {/* Dot on the line */}
                    <div className="absolute -left-6 top-1.5">
                      <div className="w-3 h-3 bg-white rounded-full border-2 border-gray-600"></div>
                    </div>
                    <p className="text-gray-600">2022-2023</p>
                    <h3 className="text-gray-800 text-lg font-bold mt-1">
                      CUSTOMER SERVICE REPRESENTATIVE
                    </h3>
                    <p className="text-gray-500">
                      WNS | Iloilo City, Philippines 5000
                    </p>
                  </motion.div>

                  {/* Experience 3 */}
                  <motion.div
                    className="mb-10 relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {/* Dot on the line */}
                    <div className="absolute -left-6 top-1.5">
                      <div className="w-3 h-3 bg-white rounded-full border-2 border-gray-600"></div>
                    </div>
                    <p className="text-gray-600">2020-2020</p>
                    <h3 className="text-gray-800 text-lg font-bold mt-1">
                      TECHNICAL SERVICE REPRESENTATIVE
                    </h3>
                    <p className="text-gray-500">
                      Transcom | Iloilo City, Philippines 5000
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}

          

              <motion.button
                className="px-4 py-2 bg-red-700 text-white rounded-md mt-3"
                onClick={() => setSelectedId(null)}
              >
                Close
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </div>

      
    
    
    );

}

export default About; 