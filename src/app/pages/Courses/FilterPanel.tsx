import React, { FC, MouseEventHandler, useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import SearchBar from "./SearchBar";
import TypeFilter from "./TypeFilter";

interface IData {
  types: string[];
  uniq: string[];
}

const FilterPanel: FC = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState<IData>({ types: [], uniq: [] });

  const { courses } = useAppSelector((state) => state.courses);

  const getTypes = () => {
    const temp = courses.map((course) => course.type);

    setData({ types: temp, uniq: ["All", ...Array.from(new Set(temp))] });
  };

  const clickHandler: MouseEventHandler<HTMLLIElement> = (
    e: React.MouseEvent<HTMLLIElement>
  ) => {
    if (e.currentTarget.tagName === "LI") {
      setActive(+e.currentTarget.dataset.index!);
    }
  };

  useEffect(() => {
    getTypes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses]);

  return (
    <section>
      <div className="container max-w-[80%] mx-auto flex items-center justify-between">
        <ul className="filters-list flex items-center gap-4">
          {data.uniq.map((type, i) => {
            const activeClass =
              "border-2 rounded border-[#FF3F3A] text-[#FF3F3A]";

            if (type === "All") {
              return (
                <li
                  className={`type px-4 py-1 transition-none  ${
                    i === active ? activeClass : ""
                  }`}
                  data-index={i}
                  onClick={clickHandler}
                >
                  <TypeFilter type={type} count={data.types.length} />
                </li>
              );
            }
            return (
              <li
                className={`type px-4 py-1 transition-none ${
                  i === active ? activeClass : ""
                }`}
                data-index={i}
                onClick={clickHandler}
              >
                <TypeFilter
                  type={type}
                  count={data.types.filter((tp) => tp === type).length}
                />
              </li>
            );
          })}
        </ul>
        <SearchBar />
      </div>
    </section>
  );
};

export default FilterPanel;
