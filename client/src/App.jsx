import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import NavBar from './components/NavBar'; // Assuming you have a NavBar component

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
