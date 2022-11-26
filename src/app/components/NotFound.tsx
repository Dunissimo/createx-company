import React, { FC } from "react";
import Navbar from "./Navbar";

const NotFound: FC = () => {
  return (
    <>
      <div className="bg-gray-300 mb-20">
        <Navbar />
      </div>
      <div className="container mx-auto pb-20">
        <div className="flex items-center justify-center">
          <h2>Error 404! The page is not found</h2>
        </div>
      </div>
    </>
  );
};

export default NotFound;
