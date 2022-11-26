import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const Right: FC<IProps> = ({ children }) => {
  return <div className="right lg:w-1/2 mb-8 lg:mb-0">{children}</div>;
};

export default Right;
