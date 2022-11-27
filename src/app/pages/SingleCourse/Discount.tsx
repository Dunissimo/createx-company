import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";

interface IProps {
  discount: number | string;
}

const Discount: FC<IProps> = ({ discount }) => {
  return (
    <ErrorBoundary>
      <div className="max-w-[85%] mx-auto py-20 px-12 bg-[#FEDBD3]">
        <Container>
          <div className="mb-8 head flex flex-col lg:flex-row items-center text-center lg:text-left lg:justify-between">
            <p className="text-3xl font-black mb-8 lg:mb-0">
              {discount}% discount for early birds!
            </p>
            <div className="timer flex items-center gap-8">
              <div className="days text-center">
                <p className="text-xl">06</p>
                <p className="font-normal">days</p>
              </div>
              <div className="hours text-center">
                <p className="text-xl">18</p>
                <p className="font-normal">hours</p>
              </div>
              <div className="mins text-center">
                <p className="text-xl">24</p>
                <p className="font-normal">mins</p>
              </div>
              <div className="sec text-center">
                <p className="text-xl">12</p>
                <p className="font-normal">sec</p>
              </div>
            </div>
          </div>
          <form
            className="flex flex-col lg:flex-row lg:items-end justify-between"
            action="post"
          >
            <div className="flex flex-col mb-8 lg:mb-0">
              <label
                className="text-gray-800 font-normal mb-2"
                htmlFor="fullName"
              >
                Full name
              </label>
              <input
                placeholder="Your full name"
                className="register-input"
                type="text"
                id="fullName"
              />
            </div>

            <div className="flex flex-col mb-8 lg:mb-0">
              <label className="text-gray-800 font-normal mb-2" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Your working email"
                className="register-input"
                type="email"
                id="email"
              />
            </div>

            <div className="flex flex-col mb-8 lg:mb-0">
              <label className="text-gray-800 font-normal mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                placeholder="Your phone number"
                className="register-input"
                type="phone"
                id="phone"
              />
            </div>

            <FillButton text="Join the course" />
          </form>
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default Discount;
