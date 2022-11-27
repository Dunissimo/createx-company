import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../../redux/store";

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";
import ScrollToTop from "./ScrollToTop";
import Events from "../pages/Events";
import NotFound from "./NotFound";
import SingleCourse from "../pages/SingleCourse";
import ErrorBoundary from "./Indicators/ErrorBoundary";
import SingleEvent from "../pages/SingleEvent";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/courses/:id"
            element={
              <ErrorBoundary>
                <SingleCourse />
              </ErrorBoundary>
            }
          />

          <Route
            path="/events/:id"
            element={
              <ErrorBoundary>
                <SingleEvent />
              </ErrorBoundary>
            }
          />

          {/* <Route path="/events/:id" element={<Event />} /> */}

          {/* <Route path="/blog/:id" element={<Post />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
