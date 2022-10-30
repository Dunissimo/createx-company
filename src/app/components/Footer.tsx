import React, { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="bg-[#1E212C] text-white">
      <div className="container mx-auto ">
        <div className="body py-20 flex items-start gap-10">
          <div className="info w-2/5">
            <img src="./images/homepage/header/light-logo.svg" alt="logo" />
            <p className="mt-6 mb-8">
              Createx Online School is a leader in online studying. We have lots
              of courses and programs from the main market experts. We provide
              relevant approaches to online learning, internships and employment
              in the largest companies in the country.
            </p>
            <ul className="social-media flex items-center">
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
            </ul>
          </div>
          <div className="map w-1/5 ml-20">
            <h3 className="uppercase tracking-[1px]">SITE MAP</h3>
            <div className="links opacity-50 flex flex-col gap-4 mt-4">
              <Link to="/about">About Us</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/events">Events</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contacts">Contacts</Link>
            </div>
          </div>
          <div className="courses w-1/5">
            <h3 className="uppercase tracking-[1px]">Courses</h3>
            <ul className="courses opacity-50 flex flex-col gap-4 mt-4">
              <li>Marketing</li>
              <li>Management</li>
              <li>HR & Recruting</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
          </div>
          <div className="contact w-1/5">
            <h3 className="uppercase tracking-[1px]">Contact us</h3>
            <div className="opacity-50 flex flex-col gap-4 mt-4">
              <p>(405) 555-0128</p>
              <p>hello@createx.com</p>
            </div>
          </div>
          <div className="signUp w-2/5">
            <h3 className="uppercase tracking-[1px]">
              SIGN UP TO OUR NEWSLETTER
            </h3>
            <form action="post" className="input relative">
              <input
                type="email"
                name="news-email"
                id="footer-email"
                placeholder="Email address"
                className="w-full py-2 px-4 focus:bg-black outline-none text-white mt-6 mb-3"
              />
              <button
                type="submit"
                className="text-4xl absolute top-4 right-2 hover:opacity-50"
              >
                &#8594;
              </button>
            </form>
            <p className="text-[11px]">
              *Subscribe to our newsletter to receive communications and early
              updates from Createx SEO Agency.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 bg-[#292C37] ">
        <div className="container mx-auto flex items-center justify-between">
          <p className="flex">
            © All rights reserved. Made with{" "}
            <img className="mx-2" src="" alt="love" /> by Createx Studio
          </p>
          <a href="#top">GO TO TOP</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
