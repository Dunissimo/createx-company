import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";

interface IProps {
  discount: number | string;
}

const Discount: FC<IProps> = ({ discount }) => {
  return (
    <div className="container mx-auto py-20 px-16 bg-[#FEDBD3]">
      <div className="mb-8 head flex items-center justify-between">
        <p className="text-3xl font-black">
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
      <form className="flex items-end justify-between" action="post">
        <div className="flex flex-col">
          <label className="text-gray-800 font-normal mb-2" htmlFor="fullName">
            Full name
          </label>
          <input
            placeholder="Your full name"
            className="register-input"
            type="text"
            id="fullName"
          />
        </div>

        <div className="flex flex-col">
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

        <div className="flex flex-col">
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
    </div>
  );
};

export default Discount;