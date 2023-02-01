import React, { FC } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import RegistrationForm from "../../components/SingleItem/RegistrationForm";
import Title from "../../components/Title";

interface IProps {
  discount: number | string;
}

const Registration: FC<IProps> = ({ discount }) => {
  const h3 = `Leave a request now and get ${discount}% off!`;

  const left = <img src={"./images/coursesPage/illustration-2.png"} alt="" />;

  const right = (
    <>
      <Title
        text={{
          h3,
          h2: "Register for the course",
        }}
      />
      <RegistrationForm type="course" />
    </>
  );

  return (
    <div className="py-20 bg-[#F4F5F6]">
      <Container>
        <Row left={left} right={right} />
      </Container>
    </div>
  );
};

export default Registration;
