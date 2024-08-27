import React from "react";


const About= () => {


    return (

      <div className="grid grid-cols-3 gap-20 mx-auto w-9/12">
      <div className="col-span-3">
        <h2 className="text-gray-800 text-xl font-bold mb-2">ABOUT ME</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
      <div className="col-span-1 flex flex-col ">
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
      <div className="col-span-2 flex flex-col">
        <h2 className="text-gray-800 text-xl font-bold mb-2">WORK EXPERIENCE</h2>
        <p>2023 - Present</p>
        <h3>Junior Technical Support Analyst</h3>
        <p>Philippine EDS Techno-Service, Inc.</p>
        <p>2022 - 2023</p>
        <h3>Customer Service Representative</h3>
        <p>WNS</p>
        <p>2020 - 2020</p>
        <h3>Technical Support Representative</h3>
        <p>Transcom</p>
      </div>
    </div>
    
    );

}

export default About; 