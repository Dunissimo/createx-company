import React, { FC } from "react";
import Title from "../../components/Title";

interface IProps {
  list: string[];
}

const ForWhom: FC<IProps> = ({ list }) => {
  return (
    <div className="container px-4 mx-auto py-20 flex flex-col lg:flex-row items-start">
      <div className="left lg:w-1/2">
        <div className="lg:w-3/4 text-center lg:text-left mb-8 lg:mb-0">
          <Title
            text={{ h3: "for whom?", h2: "Who will benefit from the course:" }}
          />
        </div>
      </div>
      <div className="right lg:w-1/2 flex justify-end">
        <ul className="forWhom-list lg:w-2/3 ml-8 lg:ml-0 lg:mr-8">
          {list.map((li, i) => (
            <li className="mb-4 text-gray-800" key={i}>
              {li}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForWhom;
