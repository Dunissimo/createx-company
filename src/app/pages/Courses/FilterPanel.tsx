import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { useAppSelector } from "../../utils/hooks";
import Container from "../../components/Container";
import ErrorIndicator from "../../components/Indicators/ErrorIndicator";
import LoadingIndicator from "../../components/Indicators/LoadingIndicator";
import Tabs from "../../components/Tabs";

export interface IData {
  types: string[];
  uniq: string[];
}

const FilterPanel: FC = () => {
  const [data, setData] = useState<IData>({ types: [], uniq: [] });

  const { courses, loading, error } = useAppSelector((state) => state.courses);

  const getTypes = () => {
    const temp = courses.map((course) => course.type);

    setData({ types: temp, uniq: ["All", ...Array.from(new Set(temp))] });
  };

  useEffect(() => {
    getTypes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses]);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  const handleChange: ChangeEventHandler<HTMLInputElement> = () => {};

  return (
    <div className="py-20">
      <Container>
        <div className="flex items-center justify-between">
          <ul className="filters-list hidden lg:flex items-center gap-4 mr-8">
            <Tabs arr={data.uniq} types={data.types} />
          </ul>
          <div className="search-div">
            <input
              onChange={handleChange}
              className="search-input"
              placeholder="Search"
              name="query"
              type="text"
              // TODO: сделать обработку

              // value={search}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FilterPanel;
