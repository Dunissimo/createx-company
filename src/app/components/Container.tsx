import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return <div className="container px-4 mx-auto">{children}</div>;
};

export default Container;
