import React, { FC } from "react";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import Row from "../../components/Row";
import RegistrationForm from "../../components/SingleItem/RegistrationForm";
import Title from "../../components/Title";

const Registration: FC = () => {
  const left = (
    <div className="">
      <Title text={{ h3: "Don’t miss the event", h2: "Leave a request" }} />
      <RegistrationForm type="event" />
      <p className="mt-4 text-base font-normal text-[#424551]">
        * You will receive a link to the online lecture in an email after
        registration.
      </p>
    </div>
  );

  const right = (
    <>
      <img
        src={process.env.PUBLIC_URL + "/images/eventsPage/illustration-2.png"}
        alt=""
      />
    </>
  );

  return (
    <ErrorBoundary>
      <div className="pb-20">
        <Container>
          <Row left={left} right={right} />
        </Container>
      </div>{" "}
    </ErrorBoundary>
  );
};

export default Registration;
