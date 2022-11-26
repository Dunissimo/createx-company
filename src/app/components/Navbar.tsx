import React, { FC } from "react";
import { NavLink, Link } from "react-router-dom";

import FillButton from "./Buttons/FillButton";
import Container from "./Container";

const Navbar: FC = () => {
  return (
    <nav className="py-[2.25rem]" id="top">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="left flex">
            <Link to="/" className="logo mb-4 lg:mb-0 lg:mr-[3.75rem]">
              <img
                src={
                  process.env.PUBLIC_URL + `/images/homepage/header/logo.svg`
                }
                alt="logo"
              />
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
              <button className="lg:ml-[2.25rem] logIn text-base md:text-lg relative hover:text-[#565454] active:scale-75 before:content-[url('/public/images/homepage/header/Person.png')] before:absolute before:top-[15%] before:left-[-20%]">
                Log in / Register
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
