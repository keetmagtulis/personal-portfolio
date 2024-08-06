import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Socials from './pages/Socials';
import NavBar from './components/NavBar'; // Assuming you have a NavBar component

function App() {
  return (


    <div class=" h-screen absolute inset-0 -z-10 w-full items-center px-5 py-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#808080_100%)]">

    

    <BrowserRouter>
      
    <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </BrowserRouter>

    </div>
  
  );
}

export default App;
