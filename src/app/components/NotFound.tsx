import React, { FC } from "react";
import Navbar from "./Navbar";

const NotFound: FC = () => {
  return (
    <div className="container mx-auto py-20">
      <Navbar />
      <h2>Error 404! The page is not found</h2>
    </div>
  );
};

export default NotFound;
