import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from 'react-router-dom';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false); 
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); 

  const onSubmit = async (event) => {
    event.preventDefault();

    const formPayload = new FormData(event.target);
    formPayload.append("access_key", "a0bf4d20-f6d2-45f5-96f2-cb38926bc616");

    const object = Object.fromEntries(formPayload);
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
      setMessageSent(true); 
      setFormData({ name: '', email: '', message: '' }); 

      
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen" id="contact">
      <div className="flex flex-col items-center bg-neutral-100 rounded-lg shadow-md p-8 w-full max-w-2xl">
        <h1 className="text-neutral-800 text-3xl font-semibold mb-6">CONTACT ME</h1>

        {/* Success Message */}
        {messageSent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-200 text-neutral-900 p-4 rounded-md mb-4 text-semibold"
          >
            Message sent successfully!
          </motion.div>
        )}

        <form onSubmit={onSubmit} className="w-full">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Type your message here"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center justify-center bg-neutral-800 text-white px-6 py-3 mt-5 rounded-full drop-shadow-xl w-40 mx-auto"
            type="submit"
          >
            Send Email
          </motion.button>
        </form>

        <h2
        className={`mt-5 font-light`}
        >SOCIAL LINKS:</h2>

          {/* Social Links */}
          <div className="flex items-center mt-0 space-x-2">
            <RouterLink to="https://github.com/keetmagtulis" target="_blank">
              <motion.img
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src="/images/github-sign.png"
                alt="GitHub"
                className="w-8 h-8 "
              />
            </RouterLink>

            <RouterLink to="https://www.linkedin.com/in/kit-magtulis-0532362b7/" target="_blank">
              <motion.img
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src="/images/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </RouterLink>

            <RouterLink to="mailto:magtuliskit8@gmail.com" target="_blank">
              <motion.img
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src="/images/email.png"
                alt="Email"
                className="w-10 h-10"
              />
            </RouterLink>

            <RouterLink to="https://www.facebook.com/kitdominic.magtulis" target="_blank">
              <motion.img
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src="/images/facebook.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </RouterLink>
          </div>
      </div>
    </div>
  );
};

export default Contact;
