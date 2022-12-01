import React, { FC } from "react";
import Left from "./Left";
import Right from "./Right";

interface IProps {
  left: React.ReactNode;
  right: React.ReactNode;
  itemsAlign?: boolean;
}

const Row: FC<IProps> = ({ left, right, itemsAlign }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        itemsAlign ? "items-start" : "items-center"
      }`}
    >
      <Left>{left}</Left>
      <Right>{right}</Right>
    </div>
  );
};

export default Row;
