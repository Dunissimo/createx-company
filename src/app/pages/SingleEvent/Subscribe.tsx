import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Container from "../../components/Container";

const Subscribe: FC = () => {
  return (
    <div className="mb-20">
      <Container>
        <div className="bg-[#FEDBD3] flex flex-col gap-16 lg:flex-row px-8 py-8 lg:px-20 lg:py-20">
          <div className="lg:w-1/3">
            <img
              loading="lazy"
              src={
                process.env.PUBLIC_URL + "/images/eventsPage/illustration.png"
              }
              alt=""
            />
          </div>
          <div className="lg:w-2/3">
            <h3 className="text-4xl font-black mb-12">
              Don’t want to miss the best events? <br /> Subscribe to our
              newsletter!
            </h3>
            <div className="flex mb-6">
              <input
                className="min-w-[55%] px-4 rounded outline-none border border-gray-300 focus:border-gray-500 hover:border-gray-500 mr-8"
                placeholder="Your working email"
                type="email"
                name="email"
                id="email"
              />
              <FillButton text="Subscribe" />
            </div>
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree" className="text-[#424551] ml-4">
              I agree to receive communications from Createx Online School
            </label>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
