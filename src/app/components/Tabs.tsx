import React, { FC, MouseEventHandler, useState } from "react";
import TypeFilter from "../pages/Courses/TypeFilter";

interface IProps {
  arr: string[];
  types?: string[];
}

const Tabs: FC<IProps> = ({ arr, types }) => {
  const [active, setActive] = useState(0);

  const clickHandler: MouseEventHandler<HTMLLIElement> = (
    e: React.MouseEvent<HTMLLIElement>
  ) => {
    if (e.currentTarget.tagName === "LI") {
      setActive(+e.currentTarget.dataset.index!);
    }
  };

  return (
    <>
      {arr.map((item, i) => {
        return (
          <li
            className={`type relative transition-none  ${
              i === active ? "active" : ""
            }`}
            key={i}
            data-index={i}
            onClick={clickHandler}
          >
            {types ? (
              <>
                <TypeFilter type={item} before={types.length} />
              </>
            ) : (
              <TypeFilter type={item} />
            )}
          </li>
        );
      })}
    </>
  );
};

export default Tabs;
