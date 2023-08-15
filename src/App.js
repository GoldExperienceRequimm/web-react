import React from "react";
import Home from "./route/Home";
import About from "./route/About";
import Project from "./route/Project";
import Contact from "./route/Contact";
import { Route, Routes } from "react-router-dom";

function APP() {
  return(
    <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Project" element={<Project />}/>
      <Route path="/Contact" element={<Contact />}/>
    </Routes>
    </div>
  );
}

export default APP;
