import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import Row from "../../components/Row";
import Title from "../../components/Title";

const Questions: FC = () => {
  const left = <img src="./images/contactsPage/illustration.png" alt="" />;

  const right = (
    <div className="mt-12 lg:mt-0">
      <Title text={{ h3: "Any questions?", h2: "Drop us a line" }} />
      <form action="post" className="contacts-form mt-6">
        <div className="name w-full flex flex-col lg:flex-row">
          <label
            htmlFor="first"
            className="mb-4 lg:mb-0 lg:w-1/2 flex flex-col"
          >
            First Name*
            <input
              type="text"
              required
              placeholder="Your first name"
              name="firstName"
              id="first"
            />
          </label>

          <label htmlFor="second" className="lg:w-1/2 flex flex-col">
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
        <div className="email&phone my-6 flex flex-col lg:flex-row">
          <label
            htmlFor="email"
            className="mb-4 lg:mb-0 lg:w-1/2 flex flex-col"
          >
            Email*
            <input
              type="email"
              required
              placeholder="Your working email"
              name="email"
              id="email"
            />
          </label>

          <label htmlFor="phone" className="lg:w-1/2 flex flex-col">
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
        <div className="flex flex-col lg:flex-row justify-between mt-8">
          <label
            htmlFor="agree"
            className="ml-4 opacity-50 lg:w-1/2 mb-8 lg:mb-0"
          >
            {/* TODO: сделать стилизация checkbox */}
            <input type="checkbox" name="agree" id="agree" />I agree to receive
            communications from Createx Online School
          </label>
          <FillButton text="Send message" />
        </div>
      </form>
    </div>
  );

  return (
    <ErrorBoundary>
      <div className="py-20">
        <Container>
          <Row left={left} right={right} />
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default Questions;
