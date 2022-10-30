import React, { FC } from "react";

interface IProps {
  text: { h3: string; h2: string };
}

const Title: FC<IProps> = ({ text }) => {
  const { h2, h3 } = text;
  return (
    <div className="title">
      <h3 className="uppercase">{h3}</h3>
      <h2 className="text-5xl font-black">{h2}</h2>
    </div>
  );
};

export default Title;
