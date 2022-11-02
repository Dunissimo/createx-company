import React, { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="bg-[#1E212C] text-white">
      <div className="container mx-auto">
        <div className="body py-20 flex flex-col lg:flex-row items-center lg:items-start gap-2">
          <div className="info w-[90%] lg:w-2/5">
            <img src="./images/homepage/header/light-logo.svg" alt="logo" />
            <p className="mt-6 mb-8">
              Createx Online School is a leader in online studying. We have lots
              of courses and programs from the main market experts. We provide
              relevant approaches to online learning, internships and employment
              in the largest companies in the country.
            </p>
            <ul className="social-media flex gap-6 justify-between lg:justify-start items-center">
              <li className="facebook">
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="gray"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.6">
                      <path
                        d="M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </Link>
              </li>
              <li className="twitter">
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="gray"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.6">
                      <path
                        d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z"
                        fill="gray"
                      />
                    </g>
                  </svg>
                </Link>
              </li>
              <li className="youtube">
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="gray"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.3903 4.11358C22.4182 4.39044 23.2288 5.20086 23.5055 6.22899C24.0197 8.10691 23.9999 12.0213 23.9999 12.0213C23.9999 12.0213 23.9999 15.9158 23.5057 17.7939C23.2288 18.8218 22.4184 19.6324 21.3903 19.9091C19.5122 20.4035 12 20.4035 12 20.4035C12 20.4035 4.50731 20.4035 2.60961 19.8895C1.58148 19.6127 0.771054 18.802 0.4942 17.7741C0 15.9158 0 12.0015 0 12.0015C0 12.0015 0 8.10691 0.4942 6.22899C0.770871 5.20104 1.60125 4.37066 2.60943 4.09399C4.48753 3.59961 11.9998 3.59961 11.9998 3.59961C11.9998 3.59961 19.5122 3.59961 21.3903 4.11358ZM15.8549 12.0016L9.60788 15.5996V8.40355L15.8549 12.0016Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li className="telegram">
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="gray"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.6">
                      <path
                        d="M9.63262 15.1813L9.2687 20.7653C9.78938 20.7653 10.0149 20.5213 10.2853 20.2283L12.7264 17.6833L17.7847 21.7243C18.7124 22.2883 19.366 21.9913 19.6163 20.7933L22.9365 3.8214L22.9374 3.8204C23.2317 2.3244 22.4415 1.73941 21.5377 2.1064L2.02135 10.2574C0.689406 10.8214 0.709573 11.6314 1.79493 11.9984L6.78447 13.6913L18.3742 5.78039C18.9196 5.38639 19.4155 5.60439 19.0076 5.99839L9.63262 15.1813Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </Link>
              </li>
              <li className="instagram">
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="gray"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.6">
                      <path
                        d="M21.9804 7.88005C21.9336 6.81738 21.7617 6.0868 21.5156 5.45374C21.2616 4.78176 20.8709 4.18014 20.359 3.68002C19.8589 3.1721 19.2533 2.77743 18.5891 2.52745C17.9524 2.28127 17.2256 2.10943 16.163 2.06257C15.0923 2.01175 14.7525 2 12.0371 2C9.32172 2 8.98185 2.01175 7.9152 2.05861C6.85253 2.10546 6.12195 2.27746 5.48904 2.52348C4.81692 2.77743 4.2153 3.16814 3.71517 3.68002C3.20726 4.18014 2.81274 4.78573 2.5626 5.44992C2.31643 6.0868 2.14458 6.81341 2.09773 7.87609C2.04691 8.9467 2.03516 9.28658 2.03516 12.002C2.03516 14.7173 2.04691 15.0572 2.09376 16.1239C2.14061 17.1865 2.31261 17.9171 2.55879 18.5502C2.81274 19.2221 3.20726 19.8238 3.71517 20.3239C4.2153 20.8318 4.82088 21.2265 5.48507 21.4765C6.12195 21.7226 6.84856 21.8945 7.91139 21.9413C8.97788 21.9883 9.31791 21.9999 12.0333 21.9999C14.7486 21.9999 15.0885 21.9883 16.1552 21.9413C17.2178 21.8945 17.9484 21.7226 18.5813 21.4765C19.9254 20.9568 20.9881 19.8941 21.5078 18.5502C21.7538 17.9133 21.9258 17.1865 21.9726 16.1239C22.0195 15.0572 22.0312 14.7173 22.0312 12.002C22.0312 9.28658 22.0273 8.9467 21.9804 7.88005ZM20.1794 16.0457C20.1364 17.0225 19.9723 17.5499 19.8355 17.9015C19.4995 18.7728 18.808 19.4643 17.9367 19.8004C17.585 19.9372 17.0538 20.1012 16.0808 20.1441C15.026 20.1911 14.7096 20.2027 12.0411 20.2027C9.37255 20.2027 9.0522 20.1911 8.00113 20.1441C7.02437 20.1012 6.49693 19.9372 6.1453 19.8004C5.71171 19.6402 5.31704 19.3862 4.9967 19.0541C4.6646 18.7298 4.41065 18.3391 4.2504 17.9055C4.11365 17.5539 3.94959 17.0225 3.9067 16.0497C3.8597 14.9948 3.8481 14.6783 3.8481 12.0097C3.8481 9.34122 3.8597 9.02087 3.9067 7.96995C3.94959 6.99319 4.11365 6.46575 4.2504 6.11412C4.41065 5.68038 4.6646 5.28586 5.00067 4.96536C5.32483 4.63327 5.71553 4.37931 6.14927 4.21921C6.5009 4.08247 7.03231 3.9184 8.00509 3.87537C9.05999 3.82851 9.37652 3.81676 12.0449 3.81676C14.7174 3.81676 15.0337 3.82851 16.0848 3.87537C17.0616 3.9184 17.589 4.08247 17.9406 4.21921C18.3742 4.37931 18.7689 4.63327 19.0892 4.96536C19.4213 5.28967 19.6753 5.68038 19.8355 6.11412C19.9723 6.46575 20.1364 6.99701 20.1794 7.96995C20.2262 9.02484 20.238 9.34122 20.238 12.0097C20.238 14.6783 20.2262 14.9908 20.1794 16.0457Z"
                        fill="white"
                      />
                      <path
                        d="M12.0371 6.86423C9.20069 6.86423 6.89937 9.1654 6.89937 12.002C6.89937 14.8385 9.20069 17.1397 12.0371 17.1397C14.8736 17.1397 17.1748 14.8385 17.1748 12.002C17.1748 9.1654 14.8736 6.86423 12.0371 6.86423ZM12.0371 15.3347C10.197 15.3347 8.70438 13.8422 8.70438 12.002C8.70438 10.1617 10.197 8.66924 12.0371 8.66924C13.8774 8.66924 15.3698 10.1617 15.3698 12.002C15.3698 13.8422 13.8774 15.3347 12.0371 15.3347Z"
                        fill="white"
                      />
                      <path
                        d="M18.5776 6.6611C18.5776 7.32346 18.0405 7.86053 17.378 7.86053C16.7156 7.86053 16.1785 7.32346 16.1785 6.6611C16.1785 5.99858 16.7156 5.46167 17.378 5.46167C18.0405 5.46167 18.5776 5.99858 18.5776 6.6611Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </Link>
              </li>
              <li className="linkedIn">
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="gray"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.6">
                      <path
                        d="M21.995 22L22 21.9992V14.6642C22 11.0758 21.2275 8.31167 17.0325 8.31167C15.0158 8.31167 13.6625 9.41833 13.11 10.4675H13.0517V8.64667H9.07416V21.9992H13.2158V15.3875C13.2158 13.6467 13.5458 11.9633 15.7017 11.9633C17.8258 11.9633 17.8575 13.95 17.8575 15.4992V22H21.995Z"
                        fill="white"
                      />
                      <path
                        d="M2.32999 8.6475H6.47666V22H2.32999V8.6475Z"
                        fill="white"
                      />
                      <path
                        d="M4.40167 2C3.07583 2 2 3.07583 2 4.40167C2 5.7275 3.07583 6.82583 4.40167 6.82583C5.7275 6.82583 6.80333 5.7275 6.80333 4.40167C6.8025 3.07583 5.72667 2 4.40167 2Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>
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
            <ul className="courses opacity-50 flex lg:flex-col flex-wrap justify-around lg:justify-start gap-4 mt-4">
              <li>Marketing</li>
              <li>Management</li>
              <li>HR & Recruting</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
          </div>
          <div className="contact mt-6 lg:mt-0 lg:w-1/5 text-center lg:text-left">
            <h3 className="uppercase tracking-[1px]">Contact us</h3>
            <div className="opacity-50 flex lg:flex-col gap-12 lg:gap-4 mt-4">
              <p className="contact-phone before:content-[url(/public/images/homepage/footer/iphone-contact.svg)] before:mr-[5px]">
                (405) 555-0128
              </p>
              <p className="contact-mail before:content-[url(/public/images/homepage/footer/mail-contact.svg)] before:mr-[5px]">
                hello@createx.com
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
            <p className="text-[11px]">
              *Subscribe to our newsletter to receive communications and early
              updates from Createx SEO Agency.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 bg-[#292C37] ">
        <div className="container w-[90%] xl:w-auto mx-auto flex text-xs lg:text-base items-center justify-between">
          <p className="flex">
            © All rights reserved. Made with{" "}
            <img
              className="mx-1"
              src="./images/homepage/footer/love.svg"
              alt="love"
            />{" "}
            by Createx Studio
          </p>
          <a href="#top">GO TO TOP</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
