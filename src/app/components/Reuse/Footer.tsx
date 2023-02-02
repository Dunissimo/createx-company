import { FC } from "react";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../Container";
import Alert from "../Feedback/Alert";
import SocialMediaIcons from "../SocialMediaIcons";
import { FiSmartphone } from "react-icons/fi";
import { useClipboardWithAlert } from "../../utils/hooks";

const Footer: FC = () => {
  const { isOpen, copyToClipboard } = useClipboardWithAlert();

  return (
    <footer className="bg-[#1E212C] text-white">
      <Container>
        <div className="body py-20 flex flex-col lg:flex-row items-center lg:items-start gap-2">
          <div className="info w-[90%] lg:w-2/5">
            <img src={"./images/homepage/header/light-logo.svg"} alt="logo" />
            <p className="mt-6 mb-8">
              Createx Online School is a leader in online studying. We have lots
              of courses and programs from the main market experts. We provide
              relevant approaches to online learning, internships and employment
              in the largest companies in the country.
            </p>
            <SocialMediaIcons theme="white" />
          </div>
          <div className="map mt-6 lg:mt-0 lg:w-1/5 lg:ml-20 text-center lg:text-left">
            <h3 className="uppercase tracking-[1px]">SITE MAP</h3>
            <div className="links opacity-50 flex lg:flex-col gap-4 mt-4">
              <Link to="/about">About Us</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/events">Events</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contacts">Contacts</Link>
            </div>
          </div>
          <div className="courses mt-6 w-[80%] lg:mt-0 lg:w-1/5 text-center lg:text-left">
            <h3 className="uppercase tracking-[1px]">Courses</h3>
            <div className="courses opacity-50 flex lg:flex-col flex-wrap justify-around lg:justify-start gap-4 mt-4">
              <Link to="/courses?theme=marketing">Marketing</Link>
              <Link to="/courses?theme=management">Management</Link>
              <Link to="/courses?theme=recruting">HR & Recruting</Link>
              <Link to="/courses?theme=design">Design</Link>
              <Link to="/courses?theme=development">Development</Link>
            </div>
          </div>
          <div className="contact mt-6 lg:mt-0 lg:w-1/5 text-center lg:text-left">
            <h3 className="uppercase tracking-[1px]">Contact us</h3>
            <div className="opacity-50 flex lg:flex-col gap-12 lg:gap-4 mt-4">
              <p
                onClick={copyToClipboard}
                className="cursor-pointer contact-phone flex items-center"
              >
                <FiSmartphone className="mr-1" /> (405) 555-0128
              </p>
              <p
                onClick={copyToClipboard}
                className="cursor-pointer contact-mail flex items-center"
              >
                <AiOutlineMail className="mr-1" /> hello@createx.com
              </p>
            </div>
          </div>
          <div className="signUp w-[90%] mt-6 lg:mt-0 lg:w-2/5">
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
            <p className="text-[11px] opacity-50">
              *Subscribe to our newsletter to receive communications and early
              updates from Createx SEO Agency.
            </p>
          </div>
        </div>
      </Container>
      <div className="py-4 bg-[#292C37] ">
        <Container>
          <div className="w-[90%] pb-2 xl:w-auto flex text-xs lg:text-base items-center justify-between">
            <p className="flex">
              © All rights reserved. Made with
              <AiOutlineHeart className="mx-1" size="1.2rem" color="red" />
              by Createx Studio
            </p>
            <a href="#top">GO TO TOP</a>
          </div>
          <div className="pt-4 text-center opacity-50 border-t-2 border-[gray]">
            Developed by{" "}
            <a
              className="underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Dunissimo"
            >
              Dunissimo
            </a>
          </div>
        </Container>
      </div>

      <Alert
        text="Скопировано!"
        position="right-bottom"
        type="success"
        isOpen={isOpen}
      />
    </footer>
  );
};

export default Footer;
