import React, { FC } from "react";
import { Link } from "react-router-dom";

import FillButton from "./Buttons/FillButton";

const Navbar: FC = () => {
  return (
    <nav className="px-8 pt-[2.25rem]">
      <div className="container mx-auto lg:flex items-center justify-between">
        <div className="left flex">
          <Link to="/" className="logo mb-4 lg:mb-0 lg:mr-[3.75rem]">
            <img src="./images/homepage/header/logo.svg" alt="logo" />
          </Link>
          <ul className="links hidden lg:flex gap-4 xl:gap-12">
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

        <div className="right flex justify-between">
          <Link to="/contacts">
            <FillButton text="Get consultation" />
          </Link>
          <Link
            to="/logIn"
            className="flex flex-col items-center justify-center"
          >
            <button className="logIn lg:ml-2 text-base md:text-lg relative hover:text-[#caa5a5] active:scale-75 before:content-[url('/public/images/homepage/header/Person.png')] before:mr-4 before:absolute before:top-[20%] before:left-[-25%]">
              Log in / Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
