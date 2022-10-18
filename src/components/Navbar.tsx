import React, { FC } from "react";
import { Link } from "react-router-dom";

import logo from "../images/homepage/header/logo.svg";

const Navbar: FC = () => {
  return (
    <nav className="px-8 pt-[2.25rem]">
      <div className="container mx-auto  flex items-center justify-between">
        <div className="left flex">
          <div className="logo mr-[3.75rem]">
            <img src={logo} alt="" />
          </div>
          <ul className="links flex">
            <li className="navbar-link">
              <Link to="/about">About Us</Link>
            </li>
            <li className="navbar-link">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="navbar-link">
              <Link to="/events">Events</Link>
            </li>
            <li className="navbar-link">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="navbar-link">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>

        <div className="right flex">
          <button className="bg-gradient-to-l from-[#ff3f3a] to-[#f75e05] mr-[2.25rem] px-12 py-3 rounded text-white hover:opacity-80 hover:underline">
            Get consultation
          </button>
          <button className="logIn ml-4 relative hover:text-[#caa5a5] active:scale-75 before:content-[url('./images/homepage/header/Person.png')] before:mr-4 before:absolute before:top-[33%] before:left-[-25%]">
            Log in / Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
