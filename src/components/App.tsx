import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
      <h1>App</h1>
      <div className="flex justify-between my-8">
        <Link to="/">1</Link>
        <Link to="/about">2</Link>
        <Link to="/courses">3</Link>
        <Link to="/events">4</Link>
        <Link to="/blog">5</Link>
        <Link to="/contacts">6</Link>
        <Link to="/course">7</Link>
        <Link to="/event">8</Link>
        <Link to="/post">9</Link>
      </div>
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
