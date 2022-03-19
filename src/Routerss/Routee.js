import React from 'react';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Tests from "../Pages/Tests";

import {
    Routes,
    Route,
  } from "react-router-dom";

  
const Routee = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/tests" element={<Tests/>}/>
        </Routes>



    </div>
  )
}

export default Routee;