import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import { useModal } from "../../utils/hooks";

import FillButton from "../Buttons/FillButton";
import Container from "../Container";
import Modal from "../Modal";

const Navbar: FC = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const clickHandler = () => {
    openModal();
  };
  return (
    <nav className="py-[2.25rem]" id="top">
      <Container>
        {isOpen ? <Modal close={closeModal} /> : null}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex">
            <Link to="/" className="logo mb-8 lg:mb-0 lg:mr-[3.75rem]">
              <img src={`/images/homepage/header/logo.svg`} alt="logo" />
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
          <div className="flex justify-between">
            <Link to="/contacts" className="mr-12 lg:mr-0">
              <FillButton text="Get consultation" />
            </Link>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={clickHandler}
                className="lg:ml-[2.25rem] logIn text-base md:text-lg relative hover:text-[#565454] active:scale-75 before:content-[url('/public/images/homepage/header/Person.png')] before:absolute before:top-[15%] before:left-[-20%]"
              >
                Log in / Register
              </button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
