import React, { FC } from "react";

interface IProps {
  type: string;
  before?: any;
}

const TypeFilter: FC<IProps> = ({ type = "Not Found", before }) => {
  return (
    <>
      <button className="border-none outline-none bg-none relative inline">
        {type}
      </button>
      <span className="absolute top-[-0.25rem] right-[0.5rem]">{before}</span>
    </>
  );
};

export default TypeFilter;
