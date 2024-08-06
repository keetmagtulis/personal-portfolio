import React from "react";
import '../../src/styles/index.css'; // Ensure this file imports Tailwind CSS correctly


const Home = () => {
  return (
    
    <div>
      
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-3/12 h-3/6 rounded-full overflow-hidden border-none">
          
          <img src="/images/Graduation Picture.jpg" alt="Profile" className="w-full h-full object-cover"/>
        
        </div>

        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 translate-x-1/2 text-white">
          
          <h1>Hi! My name is Kit</h1>
          <p>Welcome to my Portfolio</p>
        
        </div>

    </div>
    

  );
};

export default Home;
