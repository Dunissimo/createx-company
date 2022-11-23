import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import Tabs from "../../components/Tabs";
import SearchBar from "./SearchBar";

export interface IData {
  types: string[];
  uniq: string[];
}

const FilterPanel: FC = () => {
  const [data, setData] = useState<IData>({ types: [], uniq: [] });

  const { courses } = useAppSelector((state) => state.courses);

  const getTypes = () => {
    const temp = courses.map((course) => course.type);

    setData({ types: temp, uniq: ["All", ...Array.from(new Set(temp))] });
  };

  useEffect(() => {
    getTypes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses]);

  return (
    <section>
      <div className="container max-w-[80%] mx-auto flex items-center justify-between">
        <ul className="filters-list hidden lg:flex items-center gap-4 mr-8">
          <Tabs arr={data.uniq} types={data.types} />
        </ul>
        <SearchBar />
      </div>
    </section>
  );
};

export default FilterPanel;
