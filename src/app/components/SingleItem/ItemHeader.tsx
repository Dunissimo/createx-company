import React, { FC } from "react";
import Container from "../Container";
import ErrorBoundary from "../Indicators/ErrorBoundary";

interface IProps {
  type: string;
  title: string;
}

const ItemHeader: FC<IProps> = ({ type, title }) => {
  return (
    <ErrorBoundary>
      <div className="py-20 text-center">
        <Container>
          <h2 className="text-[#FF3F3A] uppercase mb-4">{type}</h2>
          <h3 className="text-2xl md:text-5xl font-black w-[90%] mx-auto">
            {title}
          </h3>
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default ItemHeader;
