import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Title from "../../components/Title";

interface IProps {
  discount: number | string;
}

const Register: FC<IProps> = ({ discount }) => {
  const h3 = `Leave a request now and get ${discount}% off!`;
  return (
    <div className="bg-[#F4F5F6]">
      <div className="container mx-auto py-20 flex items-center">
        <div className="left lg:w-1/2">
          <img
            src={
              process.env.PUBLIC_URL + "/images/coursesPage/illustration-2.png"
            }
            alt=""
          />
        </div>
        <div className="right lg:w-1/2">
          <Title
            text={{
              h3,
              h2: "Register for the course",
            }}
          />
          <form action="post" className="mt-10">
            <div className="flex flex-col mb-6">
              <label
                className="mb-2 font-normal text-gray-800"
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
            <div className="flex flex-col mb-6">
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
            <div className="flex flex-col mb-6">
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
            <FillButton text="Join the course" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
