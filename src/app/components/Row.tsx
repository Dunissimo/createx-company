import React, { FC } from "react";
import Left from "./Left";
import Right from "./Right";

interface IProps {
  left: React.ReactNode;
  right: React.ReactNode;
  styles?: boolean;
}

const Row: FC<IProps> = ({ left, right, styles }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        styles ? "items-start" : "items-center"
      }`}
    >
      <Left>{left}</Left>
      <Right>{right}</Right>
    </div>
  );
};

export default Row;
