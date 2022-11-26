import React, { FC } from "react";
import Title from "../../components/Title";

interface IProps {
  list: string[];
}

const ForWhom: FC<IProps> = ({ list }) => {
  return (
    <div className="container mx-auto py-20 flex items-start">
      <div className="left lg:w-1/2">
        <div className="w-3/4">
          <Title
            text={{ h3: "for whom?", h2: "Who will benefit from the course:" }}
          />
        </div>
      </div>
      <div className="right lg:w-1/2 flex justify-end">
        <ul className="forWhom-list w-2/3 mr-8">
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
