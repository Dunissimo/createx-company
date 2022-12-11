import React, { FC } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Title from "../../components/Title";

interface IProps {
  list: string[];
}

const ForWhom: FC<IProps> = ({ list }) => {
  const left = (
    <div className="lg:w-3/4 text-center lg:text-left mb-8 lg:mb-0">
      <Title
        text={{
          h3: "for whom?",
          h2: "Who will benefit from the course:",
        }}
      />
    </div>
  );

  const right = (
    <ul className="forWhom-list lg:w-2/3 ml-8 lg:ml-0 lg:mr-8">
      {list.map((li, i) => (
        <li className="mb-4 text-gray-800" key={i}>
          {li}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="py-20">
      <Container>
        <Row left={left} right={right} itemsAlign />
      </Container>
    </div>
  );
};

export default ForWhom;
