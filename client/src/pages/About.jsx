import React from "react";


const About= () => {


    return (

      <div className="gap-20 mx-auto w-2/3">
      
      <div className="col-span-3">
        <h2 className="text-gray-800 text-5xl font-bold my-5">ABOUT ME</h2>
        <p className="text-lg">My name is Kit, and I’m a guy with a deep curiosity for technology and how things work. I love exploring new innovations and constantly learning about the latest trends. Outside of tech, I enjoy going out, playing games, strumming on my guitar, and diving into good books. Whether it’s understanding the latest gadget or simply enjoying my hobbies, I’m always eager to explore and learn something new. </p>
      </div>

      <div className="grid grid-cols-2 mx-auto w-2/3 mt-10">

      <div className=" flex flex-col">
        <h2 className="text-gray-800 text-4xl font-bold mb-2">SKILLS</h2>
        <p className="text-lg my-1">Network Administration</p>
        <p className="text-lg my-1">Active Directory Management</p>
        <p className="text-lg my-1">Domain Management</p>
        <p className="text-lg my-1">Software Development</p>
        <p className="text-lg my-1">Web Development</p>
        <p className="text-lg my-1">React JS</p>
        <p className="text-lg my-1">Node JS / Express</p>
        <p className="text-lg my-1">Python</p>
        <p className="text-lg my-1">Tailwind / CSS / Bootstrap</p>
        <p className="text-lg my-1">SQL</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-gray-800 text-4xl font-bold mb-2">WORK EXPERIENCE</h2>
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

 
    </div>
    
    );

}

export default About; 