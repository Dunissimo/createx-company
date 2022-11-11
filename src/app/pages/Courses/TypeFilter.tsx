import React, { FC } from "react";

interface IProps {
  type: string;
  count: number;
}

const TypeFilter: FC<IProps> = ({ type, count }) => {
  return (
    <li className="">
      <button className="border-none outline-none bg-none relative inline">
        {type}
        <span className="absolute top-[-0.5rem] right-[-0.75rem]">{count}</span>
      </button>
    </li>
  );
};

export default TypeFilter;
