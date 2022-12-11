import React, { FC } from "react";
import FillButton from "../Buttons/FillButton";

interface IProps {
  type: string;
  isFlex?: boolean;
}

const RegistrationForm: FC<IProps> = ({ type, isFlex }) => {
  return (
    <form
      action="post"
      className={`mt-10 ${
        isFlex
          ? "flex flex-col lg:flex-row lg:items-end gap-8"
          : "max-w-[80%] flex flex-col gap-8"
      }`}
    >
      <div className="flex flex-col">
        <label className="mb-2 font-normal text-gray-800" htmlFor="fullName">
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
        <label className="mb-2 font-normal text-gray-800" htmlFor="email">
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
        <label className="mb-2 font-normal text-gray-800" htmlFor="phone">
          Phone
        </label>
        <input
          placeholder="Your phone number"
          className="register-input"
          type="phone"
          id="phone"
        />
      </div>
      <FillButton text={`Join the ${type}`} />
    </form>
  );
};

export default RegistrationForm;
