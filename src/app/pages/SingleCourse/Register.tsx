import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import Row from "../../components/Row";
import Title from "../../components/Title";

interface IProps {
  discount: number | string;
}

const Register: FC<IProps> = ({ discount }) => {
  const h3 = `Leave a request now and get ${discount}% off!`;

  const left = (
    <img
      src={process.env.PUBLIC_URL + "/images/coursesPage/illustration-2.png"}
      alt=""
    />
  );

  const right = (
    <>
      <Title
        text={{
          h3,
          h2: "Register for the course",
        }}
      />
      <form action="post" className="mt-10">
        <div className="flex flex-col mb-6">
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
    </>
  );

  return (
    <ErrorBoundary>
      <div className="py-20 bg-[#F4F5F6]">
        <Container>
          <Row left={left} right={right} />
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default Register;
