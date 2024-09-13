import React, { useState, useRef } from "react";
import {motion, AnimatePresence} from 'framer-motion';




const About= () => {

const [selectedId, setSelectedId] = useState(null);

const scrollRef = useRef(null);



    return (

    <div 
    className="flex justify-center items-center min-h-auto" id="about"

    >
        
        <div className="grid gap-6 lg:grid-cols-2 w-4/5 ">

      
            <motion.div 
              layoutId="aboutme"
              initial= {{ opacity: 0}}
              whileHover={{ scale: 1.02}}
              whileTap={{scale: 0.8}}
              whileInView={{opacity: 1, transition: {
                delay: 0.3,
                duration: 1,
              }}}
              viewport={{root: scrollRef}}
              transition={{ type: "delay"}}
              onClick={() => setSelectedId("aboutme")}
                  
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
              
                  {/* Cover Image */}
                  <img
                    src="/images/about-me-background2.jpg"
                    alt="Profile"
                    className="w-full h-52 object-cover rounded-t-md mb-4"
                  />
                
                <h2 className="text-gray-800 text-4xl font-semibold mb-4 border-b-2 border-neutral-300 pb-2 drop-shadow-lg">ABOUT ME</h2>
                <p className="text-lg">
                    My name is Kit, and I’m a guy with a deep curiosity for technology and how things work. I love exploring new innovations, whether it’s the latest software, network configurations, or discovering how different technologies interact. With a background in IT, I have hands-on experience in network administration, database management, Active Directory, and software development, which allows me to tackle a wide range of technical challenges.
                    </p>
                    <br></br>
                    <p className="text-lg"> Outside of my professional interests, I enjoy going out, playing games, strumming my guitar, and diving into good books. I believe that a balance of work and hobbies fuels my creativity and keeps me motivated. Whether it’s understanding the latest tech trends or enjoying my favorite pastimes, I’m always eager to explore, learn, and grow.
                    </p>


            </motion.div>
          
            <div>

            <motion.div 
              layoutId="skills"
              initial= {{ opacity: 0}}
              whileHover={{ scale: 1.02}}
              whileTap={{scale: 0.8}}
              whileInView={{opacity: 1, transition: {
                  delay: 0.3,
                  duration: 1,
              }}}
              viewport={{root: scrollRef}}
              transition={{ type: "delay"}}
              onClick={() => setSelectedId("skills")}
              className="bg-white rounded-lg shadow-md p-6 mb-5 cursor-pointer">

                {/* Cover Image */}
                <img
                    src="/images/skills-background.jpg"
                    alt="skills"
                    className="w-full h-52 object-cover rounded-t-md mb-4"
                  />
                
              
              <h2 className="text-gray-800 text-2xl font-bold mb-4 border-b-2 border-neutral-300 pb-2">SKILLS</h2>
              <p>I am an IT professional with a diverse skill set that includes network administration, active directory management, database management, and software development.</p>

              <motion.button 
                  whileHover={{ scale: 1.1}}
                  whileTap={{scale: 0.8}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => setSelectedId("skills")}
                  className="bg-neutral-900 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl" >
                  See More
                </motion.button>

            </motion.div>
          
            
            <motion.div
              layoutId="experience"
              initial= {{ opacity: 0}}
              whileHover={{ scale: 1.02}}
              whileTap={{scale: 0.8}}
              whileInView={{opacity: 1, transition: {
                delay: 0.3,
                duration: 1,
              }}}
              viewport={{root: scrollRef}}
              transition={{ type: "delay"}}
              onClick={() => setSelectedId("experience")}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer">

              {/* Cover Image */}
              <img
              src="/images/work-exp-background.jpg"
              alt="error"
              className="w-full h-52 object-cover rounded-t-md mb-4"
                  />
                            
              <h2 className="text-gray-800 text-2xl font-bold mb-4 border-b-2 border-neutral-300 pb-2">WORK EXPERIENCE</h2>
              <p>I have diverse experience in IT and customer service, specializing in network administration, active directory management, and technical support. My roles have involved managing network systems, user accounts, and providing tech support. I also have skills in database management and software development.
              </p>

              <motion.button 
                  whileHover={{ scale: 1.1}}
                  whileTap={{scale: 0.8}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => setSelectedId("experience")}
                  className="bg-neutral-900 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl" >
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
              className="fixed inset-0 bg-white p-5 flex flex-col items-center justify-center rounded-md shadow-lg w-10/12 h-5/6 lg:w-1/2 max-w-2xl mx-auto my-auto z-50"
            >
            {selectedId === "aboutme" && (
                <div className="flex flex-col items-center">
                  
             

                  {/* About Me Content with Scroll */}
                  <div className="scrollbar-DEFAULT overflow-y-auto max-h-96 p-4 w-full">
                  
                  

                    <h2 className="text-gray-800 text-4xl font-semibold mb-4 border-b-2 border-red-700 pb-2 drop-shadow-lg">
                      ABOUT ME
                    </h2>
                    <p className="text-lg">
                    My name is Kit, and I’m a guy with a deep curiosity for technology and how things work. I love exploring new innovations, whether it’s the latest software, network configurations, or discovering how different technologies interact. With a background in IT, I have hands-on experience in network administration, database management, Active Directory, and software development, which allows me to tackle a wide range of technical challenges.
                    </p>
                    <p className="text-lg"> Outside of my professional interests, I enjoy going out, playing games, strumming my guitar, and diving into good books. I believe that a balance of work and hobbies fuels my creativity and keeps me motivated. Whether it’s understanding the latest tech trends or enjoying my favorite pastimes, I’m always eager to explore, learn, and grow.
                    </p>
                   

                    
                  </div>
                </div>
            )}


                                
            {selectedId === "skills" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
              
            

               <motion.h2 className="text-gray-800 text-4xl font-semibold mb-4 border-b-2 pb-2 drop-shadow-lg progress-bar"
               
               >SKILLS</motion.h2>
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
          <div  className="w-full max-w-lg" >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
                   
          >
        
          
            <div className="mb-4">
            <h2 className="text-gray-800 text-xl font-bold pb-2">
            WORK EXPERIENCE
            </h2>

              </div>
           
        
            {/* Scrollable Container */}
            <div className="scrollbar-DEFAULT border-l-2 border-gray-600 pl-6 max-h-96 overflow-y-auto pr-2">
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
                <p className="text-gray-800 font-semibold">2023-Present</p>
                <h3 className="text-gray-800 text-lg font-bold mt-1">
                  JUNIOR TECHNICAL SUPPORT ANALYST
                </h3>
                <p className="text-gray-500 mt-2"> 
                  Philippine EDS Techno-Service, Inc. | Iloilo City, Philippines 5000
                </p>
                <p className="mt-2"> 
                  My responsibilities are to configure and maintain network systems, monitor performance, and troubleshoot issues. I implement network security measures and manage user accounts and group policies in Active Directory. Additionally, I provide technical support, resolve hardware and software issues, perform system maintenance, and assist with software updates.
                </p>
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
                <p className="text-gray-500 mt-2"> WNS | Iloilo City, Philippines 5000 </p>
                <br></br>
                <p>As  a  Customer  Service  Representative  for  a  travel  account,  I  assistcustomers  with  booking  flights,  hotels,  and  vacation  packages.  I  handleinquiries related to travel itineraries, cancellations, and changes. I providesupport  for  travel-related  issues,  including  baggage  concerns  andaccommodation problems</p>
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
                <p className="text-gray-500 mt-2"> Transcom | Iloilo City, Philippines 5000 </p>
                <br></br>
                <p>I  handle  technical  support  and  billing  inquiries.  I  assist  customers  withtroubleshooting  issues  related  to  internet,  cable,  and  phone  services.  Iaddress  and  resolve  technical  problems,  including  connectivity  andequipment  malfunctions.  Additionally,  I  manage  billing  inquiries,  processpayments, and address discrepancies</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
          )}


            <motion.button
                
                className="px-4 py-2 bg-black text-white rounded-md mt-3"
                onClick={() => setSelectedId(null)}>Close</motion.button>
            
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </div>

      
    
    
    );

}

export default About; 