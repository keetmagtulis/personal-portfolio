import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from 'react-router-dom';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a0bf4d20-f6d2-45f5-96f2-cb38926bc616");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

    return (

      <div className="flex justify-center items-center min-h-screen" id="contact"
      
      >

        <div className="flex flex-col items-center bg-neutral-100 rounded-lg shadow-md p-8 w-full max-w-2xl">
          <h1 className="text-neutral-800 text-3xl font-semibold mb-6">CONTACT ME</h1>
          
          <form onSubmit={onSubmit} className="w-full">
            {/* Name Input */}
            <div className="mb-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-800"
                required 
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-800"
                required 
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <textarea 
                name="message" 
                placeholder="Type your message here" 
                rows="5" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-800"
                required 
              />
            </div>

            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center justify-center bg-red-800 text-white px-6 py-3 mt-5 rounded-full drop-shadow-xl w-40 mx-auto"
              type="submit"
            >
              Send Email
            </motion.button>
          </form>

          <h1></h1>

            <div className="flex items-center mt-5">
            <RouterLink to="https://github.com/keetmagtulis" target="_blank">
              <motion.img
                whileHover={{ scale: 1.3}}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src="/images/github-sign.png" alt="" className="w-10 h-10 mx-2" />
            </RouterLink>

            <RouterLink to="https://www.linkedin.com/in/kit-magtulis-0532362b7/" target="_blank">
              <motion.img 
              whileHover={{ scale: 1.3}}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src="/images/linkedin.png" alt="Github" className="w-10 h-10 mx-2" />
            </RouterLink>
            
            <RouterLink to="mailto:magtuliskit8@gmail.com" target="_blank">
              <motion.img 
              whileHover={{ scale: 1.3}}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src="/images/email.png" alt="" className="w-10 h-10 mx-2" />
            </RouterLink>
            
            <RouterLink to="https://www.messenger.com/t/100054884522654" target="_blank">
              <motion.img 
              whileHover={{ scale: 1.3}}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src="/images/facebook.png" alt="" className="w-10 h-10 mx-2" />
            </RouterLink>
          </div>
        </div>
      </div>

    );

}

export default Contact; 