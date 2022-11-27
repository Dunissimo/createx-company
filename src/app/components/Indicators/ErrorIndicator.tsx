import React, { FC } from "react";
import Container from "../Container";

import error from "./error.png";

const ErrorIndicator: FC = () => {
  return (
    <div className="text-center py-10 bg-[#bd1414] text-white">
      <Container>
        <div className="flex justify-center">
          <img src={error} alt="" />
        </div>
        <h2 className="text-xl">Something went wrong!</h2>
        <p>We're already trying to fix the bug</p>
      </Container>
    </div>
  );
};

export default ErrorIndicator;
