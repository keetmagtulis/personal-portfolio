import React from "react";


const About= () => {


    return (
      <>
      <div className="max-w-md">

        <h2 className="text-gray-800 text-xl font-bold mb-2">ABOUT ME</h2>
        <p>Hi, I’m Kit. I’m an IT Professional with 2 years of experience focusing on IT and Technical Support, Network Administration, Active Directory Management, and Software Development.</p>
      
      </div>
      
      <div className="grid grid-cols-2"> 
        
      <div> 
        <h2 className="text-gray-800 text-xl font-bold mb-2">SKILLS</h2>
          <p>Network Administration</p>
          <p>Active Directory Management</p>
          <p>Domain Management</p>
          <p>Software Development</p>
          <p>Web Development</p>
          <p>React JS</p>
          <p>Node JS / Express</p>
          <p>Python</p>
          <p>Tailwind / CSS / Bootstrap</p>
          <p>SQL</p>
      </div>

      <div>
        <h2 className="text-gray-800 text-xl font-bold mb-2">WORK EXPERIENCE</h2>
          <p>2023 - Present</p>
          <h3>Junior Technical Support Analyst</h3>
          <p>Philippine EDS Techno-Service, Inc.</p>
          <p>2022 - 2023</p>
          <h3>Costumer Service Representative</h3>
          <p>WNS</p>
          <p>2020 - 2020</p>
          <h3>Technical Support Representative</h3>
          <p>Transcom</p>
      </div>

   
      </div>
 
      </>
    );

}

export default About; 