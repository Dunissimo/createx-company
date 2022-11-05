import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About/About";
import CoursesList from "../pages/Courses/CoursesList";
import EventsList from "../pages/Events/EventsList";
import Blog from "../pages/Blog/Blog";
import Contacts from "../pages/Contacts/Contacts";

import Course from "../pages/Courses/Course";
import Event from "../pages/Events/Event";
import Post from "../pages/Blog/Post";

import store from "../../redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/courses"
            element={<CoursesList count={9} isFlex={true} />}
          />
          <Route path="/events" element={<EventsList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route
            path="/courses/:id"
            element={
              <Course
                course={{
                  id: 0,
                  type: "",
                  title: "",
                  price: 0,
                  author: "",
                  imgName: "",
                }}
                isFlex
              />
            }
          />
          <Route path="/events/:id" element={<Event />} />
          <Route path="/blog/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </Provider>

    // ! Сделать нормальную архитектуру приложения, продумать роутинг, разобраться с компонентами.
  );
}

export default App;
