import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import SearchBar from "./SearchBar";
import TypeFilter from "./TypeFilter";

interface IType {
  Marketing: number;
  Management: number;
  "HR & Recruting": number;
  Design: number;
  Development: number;
}

const FilterPanel: FC = () => {
  const [types, setTypes] = useState<IType>({
    Marketing: 0,
    Management: 0,
    "HR & Recruting": 0,
    Development: 0,
    Design: 0,
  });

  const { courses } = useAppSelector((state) => state.courses);

  const getTypes = () => {
    const tempArr: string[] = [];

    courses.map((course) => tempArr.push(course.type));

    const t: IType = {
      Marketing: tempArr.filter((type) => type === "Marketing").length,
      Management: tempArr.filter((type) => type === "Management").length,
      "HR & Recruting": tempArr.filter((type) => type === "HR & Recruting")
        .length,
      Design: tempArr.filter((type) => type === "Design").length,
      Development: tempArr.filter((type) => type === "Development").length,
    };

    setTypes(t);
  };

  const renderTypes = () => {
    const toRender = [];
    for (const key in types) {
      toRender.push(
        <TypeFilter type={key} count={types[key as keyof typeof types]} />
      );
    }

    return toRender;
    // ! Переделать отрисовку types
  };

  useEffect(() => {
    getTypes();
  }, []);

  useEffect(() => {
    renderTypes();
  }, [types]);

  return (
    <section>
      <div className="container max-w-[80%] mx-auto flex items-center justify-between">
        <ul className="filters-list flex items-center gap-8">
          <TypeFilter type="All" count={courses.length} />
          {renderTypes().map((type) => type)}
        </ul>
        <SearchBar />
      </div>
    </section>
  );
};

export default FilterPanel;
