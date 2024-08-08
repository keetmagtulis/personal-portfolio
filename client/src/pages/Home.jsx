import React from "react";
import '../../src/styles/index.css'; // Ensure this file imports Tailwind CSS correctly

const Home = () => {
  return (
    
      <div className="flex items-center justify-center space-x-16 rounded-lg mx-auto w-9/12 h-5/6 mt-1">
        
        
        <div className="w-1/3 h-96 rounded-full overflow-hidden border-none">
          <img src="/images/Graduation Picture.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        
        <div className="text-white max-w-md">
          <h2 className="text-5xl">SOFTWARE</h2>
          <h1 className="text-7xl mb-2">DEVELOPER</h1>
          <p>Hi, I’m Kit. I’m an IT Professional with 2 years of experience focusing on IT and Technical Support, Network Administration, Active Directory Management, and Software Development.</p>

          <button className="bg-red-700 px-6 py-2 mt-9 rounded-full flex items-center justify-center">Download CV <img src="/images/download-2-24.ico" alt="Download" className="w-3 ml-3 flex items-center justify-center"></img></button>

        </div>

      </div>
    
  );
};

export default Home;
