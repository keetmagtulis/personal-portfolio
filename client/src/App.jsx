import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavBar from './components/NavBar'; 

function App() {
  return (


    <div class="inset-0 w-full min-h-screen bg-gradient-to-b from-neutral-200 from-0% via-neutral-300 via-70% to-neutral-600 to-100%">

    

    <BrowserRouter>
      
    <NavBar />
    <Home />
    <About />
    <Projects />
    <Contact />
    
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>

    </div>
  
  );
}

export default App;
