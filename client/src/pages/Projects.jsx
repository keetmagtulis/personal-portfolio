import React from "react";
import {motion} from "framer-motion";

const Projects= () => {


    return (

      <div className="flex justify-center items-center min-h-auto" id="projects">
        
      <div className="grid gap-6 p-10 lg:grid-cols-3 w-4/5 ">

    
          <motion.div 
            
            className="bg-white rounded-lg shadow-md p-6">
              
              <h2 className="text-gray-800 text-4xl font-semibold mb-4 border-b-2 border-red-700 pb-2 drop-shadow-lg">PROJECT NAME</h2>
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae saepe nostrum quidem beatae minima unde exercitationem, aliquam maxime eaque sit maiores impedit, molestiae consequuntur, deserunt praesentium voluptatem itaque nulla.</p>

              <motion.button 
                  whileHover={{ scale: 1.1}}
                  whileTap={{scale: 0.8}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-red-700 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl" >
                  View Project
                </motion.button>


          </motion.div>
        
          <motion.div 
            
            className="bg-white rounded-lg shadow-md p-6">
              
              <h2 className="text-gray-800 text-4xl font-semibold mb-4 border-b-2 border-red-700 pb-2 drop-shadow-lg">PROJECT NAME</h2>
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae libero excepturi consequatur at hic sapiente quia voluptatem saepe quaerat nobis. Atque totam ab debitis tempora. Dolorem deleniti explicabo earum ratione.</p>

              <motion.button 
                  whileHover={{ scale: 1.1}}
                  whileTap={{scale: 0.8}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-red-700 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl" >
                  View Project
                </motion.button>


          </motion.div>

          <motion.div 
            
            className="bg-white rounded-lg shadow-md p-6">
              
              <h2 className="text-gray-800 text-4xl font-semibold mb-4 border-b-2 border-red-700 pb-2 drop-shadow-lg">PROJECT NAME</h2>
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt pariatur veniam architecto odio voluptas est recusandae deserunt minus unde quod illo non ex sequi incidunt, totam illum perspiciatis dolorem.</p>

              <motion.button 
                  whileHover={{ scale: 1.1}}
                  whileTap={{scale: 0.8}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-red-700 text-white px-6 py-2 mt-9 rounded-full flex items-center justify-center drop-shadow-xl" >
                  View Project
                </motion.button>


          </motion.div>
        
        
          
  
      </div>


  </div>

    );

}

export default Projects; 