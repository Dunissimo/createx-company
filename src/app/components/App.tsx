import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import About from "../pages/About/About";
import EventsList from "../pages/Events/EventsList";
import Blog from "../pages/Blog/Blog";
import Contacts from "../pages/Contacts/Contacts";

// import Course from "../pages/Courses/Course";
// import Event from "../pages/Events/Event";
// import Post from "../pages/Blog/Post";

import store from "../../redux/store";
import { Provider } from "react-redux";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />

          {/* <Route path="/courses/:id" element={<Course />} /> */}
          {/* <Route path="/events/:id" element={<Event />} /> */}
          {/* <Route path="/blog/:id" element={<Post />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>

    // ! Сделать нормальную архитектуру приложения, продумать роутинг.
  );
}

export default App;
