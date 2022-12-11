import React, { FC, ReactNode } from "react";
import Container from "../Container";
import Row from "../Row";

interface IProps {
  left: ReactNode;
  right: ReactNode;
}

const AboutItem: FC<IProps> = ({ left, right }) => {
  return (
    <div className="py-20">
      <Container>
        <Row left={left} right={right} />
      </Container>
    </div>
  );
};

export default AboutItem;
