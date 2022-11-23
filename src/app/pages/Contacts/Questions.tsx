import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Title from "../../components/Title";

const Questions: FC = () => {
  return (
    <div className="container mx-auto py-20 flex items-center flex-col lg:flex-row">
      <div className="left lg:w-1/2">
        <img src="./images/contactsPage/illustration.png" alt="" />
      </div>
      <div className="right lg:w-1/2 mt-12 lg:mt-0">
        <Title text={{ h3: "Any questions?", h2: "Drop us a line" }} />
        <form action="post" className="contacts-form mt-6">
          <div className="name w-full flex">
            <label htmlFor="first" className="w-1/2 flex flex-col">
              First Name*
              <input
                type="text"
                required
                placeholder="Your first name"
                name="firstName"
                id="first"
              />
            </label>

            <label htmlFor="second" className="w-1/2 flex flex-col">
              Second Name*
              <input
                required
                type="text"
                placeholder="Your second name"
                name="secondName"
                id="second"
              />
            </label>
          </div>
          <div className="email&phone my-6 flex">
            <label htmlFor="email" className="w-1/2 flex flex-col">
              Email*
              <input
                type="email"
                required
                placeholder="Your working email"
                name="email"
                id="email"
              />
            </label>

            <label htmlFor="phone" className="w-1/2 flex flex-col">
              Phone
              <input
                type="phone"
                placeholder="Your phone number"
                name="phone"
                id="phone"
              />
            </label>
          </div>
          <label htmlFor="message" className="flex flex-col">
            Message*
            <textarea
              placeholder="Your message"
              name="message"
              id="message"
              required
              cols={30}
              rows={10}
            ></textarea>
          </label>
          <div className="flex justify-between mt-8">
            <label htmlFor="agree" className="ml-4 opacity-50 w-1/2">
              <input type="checkbox" name="agree" id="agree" />I agree to
              receive communications from Createx Online School
            </label>
            <FillButton text="Send message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questions;