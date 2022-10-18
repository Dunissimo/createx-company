import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Events from "../pages/Events";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";

import Course from "../pages/Course";
import Event from "../pages/Event";
import Post from "../pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path="/course" element={<Course />} />
        <Route path="/event" element={<Event />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
