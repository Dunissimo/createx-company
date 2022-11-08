import React, { FC } from "react";
import { NavLink, Link } from "react-router-dom";

import FillButton from "./Buttons/FillButton";

const Navbar: FC = () => {
  return (
    <nav className="px-8 py-[2.25rem]" id="top">
      <div className="container mx-auto lg:flex items-center justify-between">
        <div className="left flex">
          <Link to="/" className="logo mb-4 lg:mb-0 lg:mr-[3.75rem]">
            <img src="./images/homepage/header/logo.svg" alt="logo" />
          </Link>
          <ul className="links hidden lg:flex gap-4 xl:gap-12">
            <li className="navbar-link">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/events">Events</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>

        <div className="right flex justify-between">
          <Link to="/contacts">
            <FillButton text="Get consultation" />
          </Link>
          <Link
            to="/logIn"
            className="flex flex-col items-center justify-center"
          >
            <button className="logIn lg:ml-2 text-base md:text-lg relative hover:text-[#565454] active:scale-75 before:content-[url('/public/images/homepage/header/Person.png')] before:absolute before:top-[15%] before:left-[-20%]">
              Log in / Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
