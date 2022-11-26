import React, { FC } from "react";
import Container from "./Container";
import Navbar from "./Navbar";

const NotFound: FC = () => {
  return (
    <>
      <div className="bg-gray-300 mb-20">
        <Navbar />
      </div>
      <div className="pb-20">
        <Container>
          <div className="flex items-center justify-center">
            <h2>Error 404! The page is not found</h2>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
