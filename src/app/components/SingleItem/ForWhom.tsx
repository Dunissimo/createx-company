import React, { FC } from "react";
import Container from "../Container";
import Row from "../Row";
import Title from "../Title";

interface IProps {
  type: string;
  list: string[];
}

const ForWhom: FC<IProps> = ({ type, list }) => {
  const left = (
    <div className="lg:w-3/4 text-center lg:text-left mb-8 lg:mb-0">
      <Title
        text={{
          h3: "for whom?",
          h2: `Who will benefit from the ${type}:`,
        }}
      />
    </div>
  );

  const right = (
    <ul className="pt-6">
      {list.map((li) => (
        <li className="forWhom-list">{li}</li>
      ))}
    </ul>
  );

  return (
    <div className="py-40">
      <Container>
        <Row left={left} right={right} itemsAlign />
      </Container>
    </div>
  );
};

export default ForWhom;
