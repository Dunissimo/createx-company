import React, { FC } from "react";
import Container from "../Container";
import Spinner from "./Spinner";

const LoadingIndicator: FC = () => {
  return (
    <div className="text-center">
      <Container>
        <Spinner />
      </Container>
    </div>
  );
};

export default LoadingIndicator;
