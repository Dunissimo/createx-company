import React, { FC, ReactNode } from "react";
import Container from "../Container";
import ErrorBoundary from "../Indicators/ErrorBoundary";
import Row from "../Row";

interface IProps {
  left: ReactNode;
  right: ReactNode;
}

const AboutItem: FC<IProps> = ({ left, right }) => {
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

export default AboutItem;
