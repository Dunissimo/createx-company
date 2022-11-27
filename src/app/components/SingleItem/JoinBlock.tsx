import React, { FC, ReactNode } from "react";

interface IProps {
  top: ReactNode | string;
  middle: ReactNode | string;
  bottom: ReactNode | string;
}

const JoinBlock: FC<IProps> = ({ top, middle, bottom }) => {
  return (
    <div className="block mb-8">
      <h4 className="uppercase">{top}</h4>
      <p className="text-2xl text-[#FF3F3A] mt-1 mb-2">{middle}</p>
      <p className="opacity-50">{bottom}</p>
    </div>
  );
};

export default JoinBlock;
